import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { conversationId, role, content, intent, agentName } = body
    
    if (!conversationId || !role || !content) {
      return NextResponse.json({ error: "conversationId, role, and content are required" }, { status: 400 })
    }
    
    // Create new message
    const message = await prisma.message.create({
      data: {
        conversationId,
        role,
        content,
        intent,
        agentName
      }
    })
    
    return NextResponse.json({ message })
  } catch (error) {
    console.error("Failed to create message:", error)
    return NextResponse.json({ error: "Failed to create message" }, { status: 500 })
  }
}
