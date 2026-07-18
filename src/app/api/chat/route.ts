import { processMessage, ChatMessage } from "@/lib/chat-agent"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { message, history } = body as {
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

    // Process message using built-in chat agent (RAG + Groq API / fallback)
    const response = await processMessage(message, history || [])

    return NextResponse.json({
      message: response.message,
      intent: response.intent,
      bookingData: response.bookingData,
    })
  } catch (error: unknown) {
    console.error("Chat API error:", error)
    const errorMessage = error instanceof Error ? error.message : "Internal server error"
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
