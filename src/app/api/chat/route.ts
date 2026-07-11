import { processMessage, ChatMessage } from "@/lib/chat-agent"
import { retrieveRelevantKnowledge, buildRAGContext } from "@/lib/rag"
import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import nodemailer from "nodemailer"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { sessionId, message, history } = body as {
      sessionId: string
      message: string
      history: ChatMessage[]
    }

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    // Save user message to db
    let conversationId: string | undefined
    if (sessionId) {
      const convo = await prisma.conversation.findFirst({
        where: { sessionId }
      })
      if (convo) {
        conversationId = convo.id
        await prisma.message.create({
          data: {
            conversationId,
            role: "user",
            content: message
          }
        })
      }
    }

    // Get RAG Context
    const knowledge = retrieveRelevantKnowledge(message)
    const context = buildRAGContext(knowledge)

    // Forward to Python FastAPI Backend
    const fastApiRes = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        session_id: sessionId || "anonymous",
        message: message,
        history: history || [],
        rag_context: context
      })
    })

    if (!fastApiRes.ok) {
      throw new Error(`FastAPI responded with status: ${fastApiRes.status}`)
    }

    const response = await fastApiRes.json()

    // Save assistant message to db
    if (conversationId && response.message) {
      await prisma.message.create({
        data: {
          conversationId,
          role: "assistant",
          content: response.message,
          intent: response.intent,
          agentName: response.agent_name || "Rudrx Assistant"
        }
      })
      
      // Save lead if collected
      const info = response.collected_info
      if (info && info.is_complete && info.email) {
        const lead = await prisma.lead.create({
          data: {
            contactName: info.name,
            email: info.email,
            phone: info.phone_number || "",
            notes: `Company: ${info.company}\nDescription: ${info.description}`
          }
        })
        
        // Link lead to conversation
        await prisma.conversation.update({
          where: { id: conversationId },
          data: { leadId: lead.id }
        })

        // Send Email Notification
        try {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS
            }
          })

          await transporter.sendMail({
            from: `"Rudrx AI Concierge" <${process.env.SMTP_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject: `New Lead Booking: ${info.name} from ${info.company}`,
            text: `A new discovery call was booked via the AI Concierge!\n\nName: ${info.name}\nEmail: ${info.email}\nPhone: ${info.phone_number}\nCompany: ${info.company}\nProject Details: ${info.description}\n\nReview this lead in your admin dashboard.`,
            html: `
              <h2>New Lead Booked!</h2>
              <p>A new discovery call was booked via the AI Concierge.</p>
              <ul>
                <li><strong>Name:</strong> ${info.name}</li>
                <li><strong>Email:</strong> ${info.email}</li>
                <li><strong>Phone:</strong> ${info.phone_number}</li>
                <li><strong>Company:</strong> ${info.company}</li>
              </ul>
              <p><strong>Project Details:</strong></p>
              <p>${info.description}</p>
              <br/>
              <p>Review this lead in your <a href="${process.env.NEXT_PUBLIC_APP_URL}/admin">Admin Dashboard</a>.</p>
            `
          })
          console.log("Lead notification email sent successfully!")
        } catch (emailErr) {
          console.error("Failed to send lead email notification:", emailErr)
        }
      }
    }

    return NextResponse.json(response)
  } catch (error: unknown) {
    console.error("Chat API error:", error)
    const errorMessage = error instanceof Error ? error.message : "Internal server error"
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
