import { prisma } from "@/lib/db"
import { sendEmail, ADMIN_EMAIL, contactNotificationEmail } from "@/lib/email"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, service, message, source } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      )
    }

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        company: company || null,
        phone: phone || null,
        service: service || null,
        message,
        source: source || "contact",
      },
    })

    // Send email notification
    const emailTemplate = contactNotificationEmail({ name, email, company, phone, service, message })
    await sendEmail({
      to: ADMIN_EMAIL,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
    })

    return NextResponse.json({ success: true, id: submission.id })
  } catch (error: unknown) {
    console.error("Contact submission error:", error)
    const errorMessage = error instanceof Error ? error.message : "Internal server error"
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
