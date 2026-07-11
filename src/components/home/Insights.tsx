"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { StaggerContainer, StaggerItem } from "@/components/effects/fade-in"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    category: "Architecture",
    title: "Designing Multi-Agent Systems for Enterprise Workflows",
    readTime: "8 min read"
  },
  {
    category: "Strategy",
    title: "Measuring ROI in Generative AI Deployments",
    readTime: "6 min read"
  },
  {
    category: "Security",
    title: "Implementing Zero-Trust Architecture for LLMs",
    readTime: "10 min read"
  }
]

export function Insights() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-16">
          <SectionHeading 
            badge="Resources"
            title="Latest Insights" 
            subtitle="Perspectives on enterprise AI architecture and strategy."
            className="mb-0"
          />
          <Link href="#" className="hidden md:inline-flex items-center text-primary font-medium hover:text-accent transition-colors">
            View All Articles <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <StaggerItem key={i}>
              <Link href="#" className="group flex flex-col h-full bg-surface border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                
                <h3 className="font-heading font-semibold text-xl text-foreground mb-6 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <div className="mt-auto pt-6 border-t border-border flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Read Article <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
