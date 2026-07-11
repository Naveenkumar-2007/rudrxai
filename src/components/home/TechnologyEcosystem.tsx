"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { StaggerContainer, StaggerItem } from "@/components/effects/fade-in"

const ecosystem = [
  { category: "AI & ML", techs: ["OpenAI", "Anthropic", "PyTorch", "Hugging Face", "LangChain"] },
  { category: "Cloud & Ops", techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"] },
  { category: "Data & Vector", techs: ["Pinecone", "Milvus", "PostgreSQL", "Snowflake", "Redis"] },
  { category: "App & Edge", techs: ["Next.js", "React", "Node.js", "Python", "Go"] },
]

export function TechnologyEcosystem() {
  return (
    <Section className="bg-background border-t border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading 
          badge="Technology"
          title="Modern Enterprise Stack" 
          subtitle="We build on the most robust, scalable, and secure technologies available today."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ecosystem.map((group, i) => (
            <div key={i} className="bg-surface/50 border border-border/50 rounded-2xl p-6">
              <h4 className="font-heading font-semibold text-foreground mb-6 text-center border-b border-border/50 pb-4">
                {group.category}
              </h4>
              <StaggerContainer delay={0.2} staggerDelay={0.05} className="flex flex-col gap-3">
                {group.techs.map((tech, j) => (
                  <StaggerItem key={j} direction="none" className="bg-background border border-border/50 py-3 px-4 rounded-lg text-center text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors">
                    {tech}
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
