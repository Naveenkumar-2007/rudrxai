import { prisma } from "@/lib/db"
import { sendEmail, ADMIN_EMAIL, discoveryNotificationEmail } from "@/lib/email"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      fullName, email, company, role, industry, companySize,
      budget, timeline, challenges, currentStack, aiExperience,
      preferredDate, preferredTime
    } = body

    // Validate required fields
    if (!fullName || !email || !company) {
      return NextResponse.json(
        { error: "Full name, email, and company are required." },
        { status: 400 }
      )
    }

    // Save to database
    const submission = await prisma.discoverySubmission.create({
      data: {
        fullName,
        email,
        company,
        role: role || null,
        industry: industry || null,
        companySize: companySize || null,
        budget: budget || null,
        timeline: timeline || null,
        challenges: challenges || null,
        currentStack: currentStack || null,
        aiExperience: aiExperience || null,
        preferredDate: preferredDate || null,
        preferredTime: preferredTime || null,
      },
    })

    // Send email notification
    const emailTemplate = discoveryNotificationEmail({
      fullName, email, company, role, industry, budget, timeline, challenges
    })
    await sendEmail({
      to: ADMIN_EMAIL,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
    })

    return NextResponse.json({ success: true, id: submission.id })
  } catch (error: unknown) {
    console.error("Discovery submission error:", error)
    const errorMessage = error instanceof Error ? error.message : "Internal server error"
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
