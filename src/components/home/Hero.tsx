import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/effects/fade-in"
import { Button } from "@/components/ui/button"
import { HeroVisual } from "./HeroVisual"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-background">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-widest text-primary mb-8 uppercase">
                <span className="mr-2">+</span>
                AI Operating System for Enterprises
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tighter font-heading text-foreground leading-[1.1] mb-6">
                Intelligence.<br />
                Orchestrated.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Outcomes.
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
                Rudrx AI is the operating system for modern businesses. Our multi-agent intelligence layer automates operations, enhances decisions, and accelerates growth at scale.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button size="lg" asChild className="h-14 px-8 text-base bg-foreground hover:bg-foreground/90 text-background border-none rounded-lg">
                  <Link href="/contact">
                    Book Discovery Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base bg-transparent border-border text-foreground hover:bg-surface rounded-lg">
                  <Link href="/solutions">
                    Explore Solutions
                  </Link>
                </Button>
              </div>
            </FadeIn>

            {/* Bottom Stats */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-8 mb-12">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <p className="text-3xl font-bold text-foreground">500+</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Enterprise Clients</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <p className="text-3xl font-bold text-foreground">99.9%</p>
                  </div>
                  <p className="text-sm text-muted-foreground">System Reliability</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    <p className="text-3xl font-bold text-foreground">3.2M+</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Tasks Automated</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <p className="text-3xl font-bold text-foreground">30+</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Countries Served</p>
                </div>
              </div>
            </FadeIn>

            {/* Trusted By */}
            <FadeIn delay={0.6}>
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Trusted by innovative startups</p>
                <div className="flex flex-wrap items-center gap-6 opacity-60 grayscale">
                   {/* Using text logos for placeholders */}
                   <span className="font-bold text-xl tracking-tight">Lumina AI</span>
                   <span className="font-bold text-xl font-serif italic">Nexa</span>
                   <span className="font-bold text-lg tracking-widest">SYNTHETIX</span>
                   <span className="font-bold text-xl">Orbit</span>
                   <span className="font-bold text-xl text-teal-600">Elevate</span>
                   <span className="font-bold text-lg font-mono">/dev/null</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Visual */}
          <div className="relative lg:h-[800px] flex items-center justify-center">
            <FadeIn delay={0.5} direction="left" className="w-full h-full">
              <HeroVisual />
            </FadeIn>
          </div>
          
        </div>
      </Container>
    </section>
  )
}
