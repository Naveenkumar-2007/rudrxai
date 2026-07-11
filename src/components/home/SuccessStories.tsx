"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { StaggerContainer, StaggerItem } from "@/components/effects/fade-in"
import { ArrowRight, TrendingDown, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

const stories = [
  {
    metric: "67%",
    metricIcon: TrendingDown,
    metricLabel: "Reduction in Support Costs",
    solution: "AI Support Platform",
    client: "Global FinTech Provider",
    desc: "Implemented an autonomous tier-1 support agent capable of resolving complex billing disputes natively."
  },
  {
    metric: "320h",
    metricIcon: Clock,
    metricLabel: "Saved Per Month",
    solution: "Document Intelligence",
    client: "National Logistics Firm",
    desc: "Automated the extraction and reconciliation of handwritten shipping manifests using custom Vision models."
  },
  {
    metric: "4x",
    metricIcon: TrendingUp,
    metricLabel: "Increase in Lead Conversion",
    solution: "Predictive Analytics",
    client: "Enterprise SaaS Company",
    desc: "Built a machine learning pipeline to score and route incoming enterprise leads based on historical conversion data."
  }
]

export function SuccessStories() {
  return (
    <Section className="bg-elevated relative">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 items-end mb-16">
          <SectionHeading 
            badge="Outcomes"
            title="Measurable Business Value" 
            subtitle="Real results from enterprise deployments."
            className="mb-0 flex-1"
          />
          <Link href="/case-studies" className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
            View All Case Studies
          </Link>
        </div>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <StaggerItem key={i}>
              <div className="bg-background border border-border rounded-2xl p-8 h-full flex flex-col group hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <story.metricIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-heading text-foreground">{story.metric}</div>
                  </div>
                </div>
                
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  {story.metricLabel}
                </h4>
                
                <p className="text-foreground font-medium mb-4">
                  {story.client}
                </p>
                
                <p className="text-muted-foreground mb-8 flex-1">
                  {story.desc}
                </p>
                
                <div className="pt-6 border-t border-border mt-auto flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{story.solution}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
