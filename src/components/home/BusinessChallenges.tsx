"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { StaggerContainer, StaggerItem } from "@/components/effects/fade-in"
import { ArrowRight, MessageSquare, Briefcase, FileText, Database, Phone, BarChart } from "lucide-react"

const challenges = [
  {
    icon: MessageSquare,
    problem: "Customer Support",
    solution: "AI Support Agents",
  },
  {
    icon: Briefcase,
    problem: "Manual Operations",
    solution: "AI Automation",
  },
  {
    icon: FileText,
    problem: "Documents",
    solution: "Document Intelligence",
  },
  {
    icon: Database,
    problem: "Knowledge",
    solution: "Enterprise RAG",
  },
  {
    icon: Phone,
    problem: "Call Centers",
    solution: "Voice AI",
  },
  {
    icon: BarChart,
    problem: "Analytics",
    solution: "AI Dashboards",
  },
]

export function BusinessChallenges() {
  return (
    <Section className="bg-background relative">
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading 
          badge="The Problem Space"
          title="Business Challenges We Solve" 
          subtitle="Stop throwing headcount at operational bottlenecks. Scale intelligently with AI systems designed for enterprise workflows."
          centered
        />
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((item, i) => (
            <StaggerItem key={i}>
              <div className="group relative bg-surface border border-border p-8 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_32px_rgba(124,58,237,0.15)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-8 group-hover:border-primary/30 transition-colors">
                    <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground font-medium mb-2 uppercase tracking-widest">From</p>
                    <h3 className="text-2xl font-semibold font-heading text-foreground mb-6">
                      {item.problem}
                    </h3>
                    
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                    
                    <p className="text-sm text-muted-foreground font-medium mb-2 uppercase tracking-widest">To</p>
                    <h3 className="text-2xl font-semibold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      {item.solution}
                    </h3>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
