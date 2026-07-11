export interface TrustArticle {
  id: string
  title: string
  category: "Security" | "Privacy" | "Responsible AI" | "Infrastructure" | "Compliance" | "Incident Response"
  content: string
}

export interface ComplianceCertification {
  name: string
  status: "Achieved" | "In Progress" | "Roadmap"
  description: string
  icon?: string
}

export interface TrustCenterData {
  hero: {
    title: string
    subtitle: string
  }
  certifications: ComplianceCertification[]
  articles: TrustArticle[]
}
