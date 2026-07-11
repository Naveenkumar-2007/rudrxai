import nodemailer from "nodemailer"

// Configure transporter
// For development: uses a mock/ethereal account if no Gmail is configured
// For production: uses Gmail SMTP with App Password
function createTransporter() {
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (user && pass) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    })
  }

  // Fallback: log emails to console in dev
  return null
}

interface EmailOptions {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  const transporter = createTransporter()

  if (!transporter) {
    console.log("========== EMAIL NOTIFICATION ==========")
    console.log(`To: ${to}`)
    console.log(`Subject: ${subject}`)
    console.log(`Body: ${html.replace(/<[^>]*>/g, "")}`)
    console.log("=========================================")
    return { success: true, method: "console" }
  }

  try {
    await transporter.sendMail({
      from: `"Rudrx AI" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    })
    return { success: true, method: "smtp" }
  } catch (error) {
    console.error("Email send failed:", error)
    return { success: false, method: "smtp", error }
  }
}

// Admin notification email address
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@rudrx.com"

// ============================================
// Email Templates
// ============================================

export function contactNotificationEmail(data: {
  name: string
  email: string
  company?: string
  phone?: string
  service?: string
  message: string
}) {
  return {
    subject: `🔔 New Contact: ${data.name} from ${data.company || "Unknown"}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #7C3AED; padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Submission</h1>
        </div>
        <div style="background: #f8f9fa; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Name</td><td style="padding: 8px 0; color: #6b7280;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email</td><td style="padding: 8px 0; color: #6b7280;">${data.email}</td></tr>
            ${data.company ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Company</td><td style="padding: 8px 0; color: #6b7280;">${data.company}</td></tr>` : ""}
            ${data.phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone</td><td style="padding: 8px 0; color: #6b7280;">${data.phone}</td></tr>` : ""}
            ${data.service ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Service</td><td style="padding: 8px 0; color: #6b7280;">${data.service}</td></tr>` : ""}
          </table>
          <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
            <strong style="color: #374151;">Message:</strong>
            <p style="color: #6b7280; margin: 8px 0 0; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
      </div>
    `,
  }
}

export function discoveryNotificationEmail(data: {
  fullName: string
  email: string
  company: string
  role?: string
  industry?: string
  budget?: string
  timeline?: string
  challenges?: string
}) {
  return {
    subject: `🚀 New Discovery Request: ${data.fullName} — ${data.company}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #7C3AED, #A78BFA); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">🎯 New Discovery Session Request</h1>
        </div>
        <div style="background: #f8f9fa; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Name</td><td style="padding: 8px 0; color: #6b7280;">${data.fullName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email</td><td style="padding: 8px 0; color: #6b7280;">${data.email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Company</td><td style="padding: 8px 0; color: #6b7280;">${data.company}</td></tr>
            ${data.role ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Role</td><td style="padding: 8px 0; color: #6b7280;">${data.role}</td></tr>` : ""}
            ${data.industry ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Industry</td><td style="padding: 8px 0; color: #6b7280;">${data.industry}</td></tr>` : ""}
            ${data.budget ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Budget</td><td style="padding: 8px 0; color: #6b7280;">${data.budget}</td></tr>` : ""}
            ${data.timeline ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Timeline</td><td style="padding: 8px 0; color: #6b7280;">${data.timeline}</td></tr>` : ""}
          </table>
          ${data.challenges ? `
            <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
              <strong style="color: #374151;">Challenges:</strong>
              <p style="color: #6b7280; margin: 8px 0 0; white-space: pre-wrap;">${data.challenges}</p>
            </div>
          ` : ""}
        </div>
      </div>
    `,
  }
}
