import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { sessionId } = body
    
    if (!sessionId) {
      return NextResponse.json({ error: "sessionId is required" }, { status: 400 })
    }
    
    // Create new conversation
    const conversation = await prisma.conversation.create({
      data: {
        sessionId,
      }
    })
    
    return NextResponse.json({ conversation })
  } catch (error) {
    console.error("Failed to create conversation:", error)
    return NextResponse.json({ error: "Failed to create conversation" }, { status: 500 })
  }
}
