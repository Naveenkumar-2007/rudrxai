import { EngagementModel, Lead } from "@/types/engagement"

export const engagementModels: EngagementModel[] = [
  {
    id: "discovery-workshop",
    title: "Discovery Workshop",
    subtitle: "Identify AI opportunities and map a concrete technical roadmap.",
    idealFor: "Organizations exploring AI opportunities",
    process: ["Business Analysis", "Current Systems Review", "Opportunity Mapping", "ROI Estimation", "Technical Roadmap"],
    deliverables: ["AI Readiness Report", "High-level Architecture", "Implementation Roadmap"],
    outcomes: ["Clear AI Strategy", "Defined ROI Metrics", "Risk Mitigation Plan"],
    icon: "Compass"
  },
  {
    id: "ai-consulting",
    title: "AI Consulting",
    subtitle: "Strategic guidance on enterprise architecture and AI adoption.",
    idealFor: "Strategy and architecture design",
    process: ["Current State Audit", "Architecture Design", "Technology Selection", "Security Review"],
    deliverables: ["Architecture Blueprint", "Governance Framework", "Vendor Assessment"],
    outcomes: ["Secure Foundation", "Scalable Infrastructure", "Compliance Alignment"],
    icon: "Lightbulb"
  },
  {
    id: "mvp-development",
    title: "MVP Development",
    subtitle: "Rapid prototyping to validate AI concepts and market fit.",
    idealFor: "Startups validating an idea",
    process: ["Discovery", "Prototype", "Development", "Launch", "Scale"],
    deliverables: ["Working Prototype", "Source Code", "Deployment Docs"],
    outcomes: ["Market Validation", "Investor Readiness", "Core IP Creation"],
    icon: "Rocket"
  },
  {
    id: "enterprise-projects",
    title: "Enterprise Projects",
    subtitle: "End-to-end custom AI implementation for large organizations.",
    idealFor: "Large custom implementations",
    process: ["Requirements", "Architecture", "Development", "Testing", "Deployment"],
    deliverables: ["Production System", "SLA Documentation", "Training Materials"],
    outcomes: ["Operational Efficiency", "Cost Reduction", "Competitive Advantage"],
    icon: "Building2"
  },
  {
    id: "dedicated-ai-team",
    title: "Dedicated AI Team",
    subtitle: "Your own fractional AI engineering department.",
    idealFor: "Long-term product development",
    process: ["Onboarding", "Sprint Planning", "Continuous Delivery", "Knowledge Transfer"],
    deliverables: ["Dedicated AI Engineer", "MLOps Support", "Monthly Reviews"],
    outcomes: ["Accelerated Delivery", "Flexible Scaling", "Internal Capability Building"],
    icon: "Users"
  },
  {
    id: "managed-ai-services",
    title: "Managed AI Services",
    subtitle: "Ongoing monitoring, optimization, and support for AI systems.",
    idealFor: "Ongoing optimization and support",
    process: ["Monitoring Setup", "Performance Tuning", "Model Retraining", "Updates"],
    deliverables: ["Uptime Guarantee", "Performance Reports", "Incident Response"],
    outcomes: ["Reliability", "Cost Optimization", "Continuous Improvement"],
    icon: "Activity"
  }
]

export const mockLeads: Lead[] = [
  {
    id: "L-1029",
    companyName: "Acme Financial",
    industry: "Banking",
    companySize: "1000-5000",
    email: "cto@acmefinancial.com",
    status: "New Lead",
    budgetRange: "$100k - $250k",
    aiScore: 94,
    suggestedModel: "Enterprise Projects",
    createdAt: "2024-11-20T10:00:00Z"
  },
  {
    id: "L-1028",
    companyName: "HealthTech Solutions",
    industry: "Healthcare",
    companySize: "50-200",
    email: "vp.engineering@healthtech.io",
    status: "Meeting Scheduled",
    budgetRange: "$50k - $100k",
    aiScore: 82,
    suggestedModel: "MVP Development",
    createdAt: "2024-11-19T14:30:00Z"
  },
  {
    id: "L-1027",
    companyName: "Global Logistics Co",
    industry: "Supply Chain",
    companySize: "10000+",
    email: "innovation@globallogistics.com",
    status: "Proposal Sent",
    budgetRange: "$250k+",
    aiScore: 98,
    suggestedModel: "AI Transformation",
    createdAt: "2024-11-15T09:15:00Z"
  }
]
