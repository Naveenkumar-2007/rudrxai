export interface CaseStudyStat {
  label: string
  value: string
  trend?: "up" | "down"
}

export interface CaseStudyTimelineEvent {
  title: string
  description: string
  timeframe: string
}

export interface CaseStudy {
  id: string
  title: string
  industry: string
  solutionCategory: string
  image: string
  
  executiveSummary: string
  businessChallenge: string
  currentProcess: string
  painPoints: string[]
  
  architectureDescription: string
  
  technologyStack: string[]
  securityMeasures: string[]
  
  timeline: CaseStudyTimelineEvent[]
  
  businessOutcomes: string[]
  roiMetrics: CaseStudyStat[]
  
  lessonsLearned: string[]
  
  relatedSolutions: { name: string; url: string }[]
}
