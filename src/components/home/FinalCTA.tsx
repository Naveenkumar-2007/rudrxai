"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { FadeIn } from "@/components/effects/fade-in"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <Section className="relative overflow-hidden py-32 lg:py-48 bg-background">
      {/* Heavy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      
      <Container className="relative z-10 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-8 text-foreground">
            Let&apos;s Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Your Next AI Platform
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Partner with elite AI engineers to automate your operations, deploy autonomous agents, and unlock new business capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="h-14 px-10 text-base rounded-xl shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:shadow-[0_0_60px_rgba(124,58,237,0.5)] transition-shadow">
              <Link href="/contact">
                Book Discovery Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-10 text-base rounded-xl bg-surface/50 backdrop-blur-md border-border hover:bg-surface">
              <Link href="/solutions">
                Explore Solutions
              </Link>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
