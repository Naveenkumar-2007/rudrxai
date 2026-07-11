"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { StaggerContainer, StaggerItem } from "@/components/effects/fade-in"
import { ArrowRight, HeartPulse, Landmark, Building2, Factory, ShoppingCart, GraduationCap, Truck, Home, Zap, ShieldCheck } from "lucide-react"
import Link from "next/link"

const industries = [
  { name: "Healthcare", icon: HeartPulse, desc: "Patient data analytics, AI diagnostics assistance, and automated compliance." },
  { name: "Finance", icon: Landmark, desc: "Fraud detection, algorithmic risk assessment, and autonomous client support." },
  { name: "Government", icon: Building2, desc: "Secure citizen service automation and intelligence for public infrastructure." },
  { name: "Manufacturing", icon: Factory, desc: "Predictive maintenance, supply chain optimization, and CV quality control." },
  { name: "Retail", icon: ShoppingCart, desc: "Demand forecasting, personalized recommendation engines, and inventory AI." },
  { name: "Education", icon: GraduationCap, desc: "Personalized learning pathways and automated administrative processing." },
  { name: "Logistics", icon: Truck, desc: "Dynamic route optimization and autonomous fleet management systems." },
  { name: "Real Estate", icon: Home, desc: "Property valuation models and intelligent tenant management platforms." },
  { name: "Energy", icon: Zap, desc: "Smart grid analytics and predictive demand-response distribution." },
  { name: "Insurance", icon: ShieldCheck, desc: "Automated claims processing and advanced underwriting risk models." },
]

export function Industries() {
  return (
    <Section className="bg-surface relative border-y border-border">
      <Container>
        <SectionHeading 
          badge="Sectors"
          title="Industries We Serve" 
          subtitle="Specialized AI engineering tailored to the unique regulatory, scaling, and operational demands of your industry."
          centered
        />
        
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((item, i) => (
            <StaggerItem key={i}>
              <Link href="/case-studies" className="group block h-full bg-background border border-border rounded-xl p-6 transition-all hover:border-primary/50 hover:bg-elevated relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] transition-all group-hover:bg-primary/20 group-hover:scale-110" />
                
                <item.icon className="w-8 h-8 text-primary mb-4 relative z-10" />
                
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2 relative z-10">
                  {item.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 relative z-10 line-clamp-3">
                  {item.desc}
                </p>
                
                <div className="flex items-center text-xs font-medium text-primary mt-auto relative z-10 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                  View Cases <ArrowRight className="ml-1 w-3 h-3" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
