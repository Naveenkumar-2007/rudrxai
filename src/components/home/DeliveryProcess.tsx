"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/effects/fade-in"
import { Search, PenTool, Terminal, ShieldCheck, Rocket, LineChart } from "lucide-react"

const process = [
  { icon: Search, title: "Discovery" },
  { icon: PenTool, title: "Architecture" },
  { icon: Terminal, title: "Development" },
  { icon: ShieldCheck, title: "Testing" },
  { icon: Rocket, title: "Deployment" },
  { icon: LineChart, title: "Optimization" },
]

export function DeliveryProcess() {
  return (
    <Section className="bg-surface border-y border-border">
      <Container>
        <SectionHeading 
          badge="Methodology"
          title="Enterprise Delivery Process" 
          subtitle="A systematic, risk-mitigated approach to deploying intelligent systems in complex environments."
          centered
        />
        
        <div className="relative mt-20">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-border -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {process.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up" className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 relative group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all duration-300">
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground border-2 border-surface">
                    {i + 1}
                  </div>
                  <step.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h4>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
