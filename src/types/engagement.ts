export type CRMStatus = "New Lead" | "Qualified" | "Meeting Scheduled" | "Proposal Sent" | "Negotiation" | "Won" | "Lost" | "Customer"

export interface EngagementModel {
  id: string
  title: string
  subtitle: string
  idealFor: string
  process: string[]
  deliverables: string[]
  outcomes: string[]
  icon: string // lucide icon name
}

export interface Lead {
  id: string
  companyName: string
  industry: string
  companySize: string
  email: string
  status: CRMStatus
  budgetRange: string
  aiScore: number
  suggestedModel: string
  createdAt: string
}
