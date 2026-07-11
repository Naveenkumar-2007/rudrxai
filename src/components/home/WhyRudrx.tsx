"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { StaggerContainer, StaggerItem } from "@/components/effects/fade-in"
import { Server, Shield, Globe2, Rocket, Code, Handshake } from "lucide-react"

const reasons = [
  {
    icon: Server,
    title: "Enterprise Architecture",
    desc: "We build systems designed to scale from day one, integrating seamlessly with your existing data lakes and legacy infrastructure."
  },
  {
    icon: Rocket,
    title: "Production Ready",
    desc: "Moving beyond prototypes. We deliver hardened, production-ready AI applications with comprehensive testing and CI/CD pipelines."
  },
  {
    icon: Code,
    title: "AI Native",
    desc: "Born in the AI era. Our engineers leverage state-of-the-art models and vector infrastructure, not just API wrappers."
  },
  {
    icon: Shield,
    title: "Security First",
    desc: "SOC2 compliant deployments. Your data remains yours, with options for VPC peering, on-premise, or private cloud implementations."
  },
  {
    icon: Globe2,
    title: "Global Delivery",
    desc: "A distributed team of elite engineers operating across timezones to accelerate your delivery cycle."
  },
  {
    icon: Handshake,
    title: "Long-term Partnership",
    desc: "We don't just hand over code. We provide ongoing support, model fine-tuning, and infrastructure monitoring."
  }
]

export function WhyRudrx() {
  return (
    <Section className="bg-background relative">
      <Container>
        <SectionHeading 
          badge="Differentiator"
          title="Why Rudrx" 
          subtitle="We don't build toys. We engineer robust, secure, and highly scalable AI systems for organizations that demand excellence."
        />
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mt-12">
          {reasons.map((item, i) => (
            <StaggerItem key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface border border-border flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
