import { retrieveRelevantKnowledge, buildRAGContext } from "./rag"

export interface ChatMessage {
  role: "user" | "assistant" | "system"
  content: string
}

export interface AgentResponse {
  message: string
  intent: string
  bookingData?: {
    name?: string
    email?: string
    company?: string
    preferredTime?: string
  }
}

/**
 * Detect user intent from conversation
 */
function detectIntent(userMessage: string, _history: ChatMessage[]): string {
  const lower = userMessage.toLowerCase()

  // Book a call intent
  if (
    lower.includes("book") || 
    lower.includes("schedule") || 
    lower.includes("call") || 
    lower.includes("meeting") ||
    lower.includes("appointment") ||
    lower.includes("demo") ||
    lower.includes("discovery")
  ) {
    return "book_call"
  }

  // Pricing inquiry
  if (
    lower.includes("price") || 
    lower.includes("cost") || 
    lower.includes("how much") ||
    lower.includes("budget") ||
    lower.includes("pricing") ||
    lower.includes("tier") ||
    lower.includes("plan")
  ) {
    return "pricing_inquiry"
  }

  // Technical question
  if (
    lower.includes("how does") || 
    lower.includes("architecture") || 
    lower.includes("technical") ||
    lower.includes("api") ||
    lower.includes("integration") ||
    lower.includes("stack")
  ) {
    return "technical_question"
  }

  return "general_question"
}

/**
 * Extract potential booking info from a message
 */
function extractBookingInfo(message: string): Record<string, string | undefined> {
  const emailMatch = message.match(/[\w.+-]+@[\w-]+\.[\w.]+/)
  const info: Record<string, string | undefined> = {}
  if (emailMatch) info.email = emailMatch[0]
  return info
}

/**
 * Build the system prompt with RAG context
 */
function buildSystemPrompt(ragContext: string, intent: string): string {
  let intentInstructions = ""

  if (intent === "book_call") {
    intentInstructions = `
The user wants to book a discovery call or meeting. Guide them through providing:
1. Their full name
2. Email address
3. Company name
4. Preferred date/time

Be helpful and conversational. If they've provided some info, acknowledge it and ask for what's missing.
Once you have all info, confirm the details and let them know a team member will reach out within 24 hours.
End with: "I've submitted your discovery request! Our team will reach out to [email] within 24 hours to confirm your session."
`
  } else if (intent === "pricing_inquiry") {
    intentInstructions = `
The user is asking about pricing. Use the pricing information from the knowledge base to give accurate details.
Always mention that all projects are fixed-price with guaranteed timelines.
Suggest booking a discovery call for a custom proposal.
`
  }

  return `You are Rudrx AI Assistant — a knowledgeable, professional, and friendly AI chatbot for Rudrx AI, an enterprise AI company.

YOUR PERSONALITY:
- Professional but warm
- Concise — use short paragraphs
- Use bullet points for lists
- Always be helpful and solution-oriented
- Never make up information — only use what's in the knowledge base below

KNOWLEDGE BASE:
${ragContext}

${intentInstructions}

RULES:
- If someone asks to book a call, guide them to provide: name, email, company, preferred time
- Always suggest visiting /discovery for the full booking experience
- For pricing, give the tier information and suggest a discovery call
- Keep responses under 200 words unless the user asks for detail
- Use markdown formatting (bold, bullets) for readability
- If you don't know something, say "I'd recommend speaking with our team directly" and suggest /contact
`
}

/**
 * Main agent function — processes a message and returns a response
 * Uses Gemini API or falls back to a template-based response
 */
export async function processMessage(
  userMessage: string,
  history: ChatMessage[]
): Promise<AgentResponse> {
  const intent = detectIntent(userMessage, history)
  const relevantKnowledge = retrieveRelevantKnowledge(userMessage)
  const ragContext = buildRAGContext(relevantKnowledge)
  const systemPrompt = buildSystemPrompt(ragContext, intent)
  const bookingInfo = extractBookingInfo(userMessage)

  const apiKey = process.env.GROQ_API_KEY

  if (apiKey) {
    // Use Groq API
    try {
      const messages = [
        { role: "system", content: systemPrompt },
        { role: "assistant", content: "I understand. I'm the Rudrx AI Assistant, ready to help." },
        ...history.slice(-10).map(m => ({
          role: m.role,
          content: m.content
        })),
        { role: "user", content: userMessage },
      ]

      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages,
            temperature: 0.7,
            max_tokens: 500,
          }),
        }
      )

      const data = await res.json()
      const text = data?.choices?.[0]?.message?.content

      if (text) {
        return {
          message: text,
          intent,
          bookingData: intent === "book_call" ? bookingInfo : undefined,
        }
      }
    } catch (error) {
      console.error("Groq API error:", error)
    }
  }

  // Fallback: template-based responses
  return generateFallbackResponse(userMessage, intent, ragContext, relevantKnowledge)
}

function generateFallbackResponse(
  _userMessage: string,
  intent: string,
  _ragContext: string,
  relevantKnowledge: ReturnType<typeof retrieveRelevantKnowledge>
): AgentResponse {
  if (intent === "book_call") {
    return {
      message: "I'd love to help you book a discovery call! 🎯\n\nYou can schedule your **free 30-minute session** directly through our booking page:\n\n👉 [Book Discovery Call](/discovery)\n\nOr tell me your **name, email, and company**, and I'll submit the request for you. Our team will reach out within 24 hours to confirm.",
      intent,
    }
  }

  if (intent === "pricing_inquiry") {
    return {
      message: "Here's our pricing overview:\n\n• **Starter** ($15K–$50K) — MVPs, pilots, 4-8 week delivery\n• **Growth** ($50K–$200K) — Production AI systems, multi-agent architectures\n• **Enterprise** (Custom) — Full transformation, dedicated teams, SLAs\n\nAll projects are **fixed-price** with guaranteed timelines. No hourly billing.\n\n👉 [View Full Pricing](/pricing) or [Book a Discovery Call](/discovery) for a custom proposal.",
      intent,
    }
  }

  if (relevantKnowledge.length > 0) {
    const entry = relevantKnowledge[0]
    return {
      message: `${entry.content}\n\nWant to learn more? Feel free to ask, or [book a discovery call](/discovery) to speak with our team.`,
      intent,
    }
  }

  return {
    message: "Thanks for your question! I'm the Rudrx AI Assistant. I can help you with:\n\n• **Products** — Agents, Voice, Knowledge, Vision, Flow\n• **Pricing** — Starter, Growth, Enterprise tiers\n• **Solutions** — RAG, Document AI, AI Strategy\n• **Booking** — Schedule a free discovery call\n\nWhat would you like to know more about?",
    intent: "general_question",
  }
}
