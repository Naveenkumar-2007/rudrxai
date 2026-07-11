"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/effects/fade-in"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

import { products } from "@/data/products"

export function FeaturedProducts() {
  return (
    <Section className="bg-background relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
      
      <Container className="relative z-10">
        <SectionHeading 
          badge="Platforms"
          title="AI Products" 
          subtitle="Accelerate your time-to-market with our pre-built, highly customizable enterprise AI platforms."
          centered
        />
        
        <div className="space-y-12">
          {products.map((product, idx) => (
            <FadeIn key={product.id} delay={0.1} direction={idx % 2 === 0 ? "left" : "right"}>
              <div className="flex flex-col lg:flex-row gap-8 items-center bg-surface border border-border rounded-3xl p-6 lg:p-10 overflow-hidden relative group">
                
                {/* Content Side */}
                <div className={`flex-1 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <h3 className="text-3xl font-bold font-heading text-foreground mb-2">{product.title}</h3>
                  <p className="text-primary font-medium mb-4">{product.tagline}</p>
                  <p className="text-lg text-muted-foreground mb-8">
                    {product.overview}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {product.techStack.slice(0, 5).map((tech, fIdx) => (
                      <li key={fIdx} className="flex items-center text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                  
                  <a href={product.liveUrl || `/solutions/${product.id}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-background border border-border text-foreground font-medium hover:bg-elevated transition-colors group-hover:border-primary/50">
                    View Live Project <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
                
                {/* Visual Side */}
                <div className={`flex-1 w-full lg:w-auto rounded-2xl border border-border relative overflow-hidden flex items-center justify-center`}>
                   <img 
                     src={product.imageUrl || "/placeholder.jpg"} 
                     alt={product.title} 
                     className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                   />
                </div>
                
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}
