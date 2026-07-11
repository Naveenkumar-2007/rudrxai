// No unused imports

export interface BusinessProblem {
  title: string
  currentChallenge: string
  rudrxSolution: string
  icon?: unknown
}

export interface ArchitectureNode {
  id: string
  label: string
  type: "input" | "process" | "storage" | "output"
  next?: string[]
}

export interface TechStackItem {
  category: string
  techs: string[]
}

export interface RoiConfig {
  defaultEmployees: number
  defaultHourlyRate: number
  defaultHoursPerWeek: number
  efficiencyGainPercentage: number // e.g. 0.40 for 40%
}

export interface SolutionData {
  id: string
  category: "Core AI" | "Data & Ops" | "Engineering"
  title: string
  heroSubtitle: string
  heroDescription: string
  
  businessProblems: BusinessProblem[]
  
  features: {
    title: string
    description: string
  }[]
  
  architecture: ArchitectureNode[]
  
  benefits: {
    title: string
    description: string
  }[]
  
  industries: string[]
  
  techStack: TechStackItem[]
  
  caseStudy: {
    metric: string
    metricLabel: string
    client: string
    description: string
  }
  
  roiConfig?: RoiConfig
  
  faq: {
    question: string
    answer: string
  }[]
  
  demoType?: "chat" | "document" | "voice" | "vision"
}
