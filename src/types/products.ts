export type ProductStatus = "Available" | "Beta" | "Private Preview" | "Coming Soon"

export interface ProductFeature {
  title: string
  description: string
  icon?: string
}

export interface ProductIntegration {
  name: string
  logoId: "microsoft" | "google" | "salesforce" | "sap" | "slack" | "teams" | "jira" | "hubspot" | "servicenow" | "postgres" | "snowflake" | "aws" | "azure" | "gcp" | "oracle" | "zendesk" | string
}

export interface ProductSecurityFeature {
  title: string
  description: string
}

export interface ProductPricingTier {
  name: string
  description: string
  price?: string
  features: string[]
  isPopular?: boolean
  ctaText: string
}

export interface ProductFaq {
  question: string
  answer: string
}

export interface Product {
  id: string
  title: string
  tagline: string
  overview: string
  status: ProductStatus
  bestFor: string
  businessProblems: string[]
  features: ProductFeature[]
  
  architectureDescription: string
  
  liveUrl?: string
  imageUrl?: string
  techStack?: string[]
  
  integrations: ProductIntegration[]
  security: ProductSecurityFeature[]
  
  pricing: ProductPricingTier[]
  faq: ProductFaq[]
}
