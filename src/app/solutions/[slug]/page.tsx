import { notFound } from "next/navigation"
import { solutions } from "@/data/solutions"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/effects/fade-in"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"

import { RoiCalculator } from "@/components/solutions/RoiCalculator"
import { InteractiveDemo } from "@/components/solutions/InteractiveDemo"
import { ArchitectureDiagram } from "@/components/solutions/ArchitectureDiagram"
import { DeliveryProcess } from "@/components/home/DeliveryProcess"
import { FinalCTA } from "@/components/home/FinalCTA"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.id }))
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const solution = solutions.find((s) => s.id === resolvedParams.slug)
  
  if (!solution) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        
        {/* 1. HERO */}
        <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
          <Container className="relative z-10 text-center max-w-4xl">
            <FadeIn>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                {solution.category}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-8 text-foreground leading-[1.1]">
                {solution.heroSubtitle}
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                {solution.heroDescription}
              </p>
              <Button size="lg" asChild className="h-14 px-8 text-base">
                <Link href="/contact">Book Discovery Call <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </FadeIn>
          </Container>
        </section>

        {/* 2 & 3 & 4. BUSINESS PROBLEMS (Before vs After) */}
        <Section className="bg-surface border-y border-border">
          <Container>
            <SectionHeading badge="The Gap" title="Business Challenges We Solve" centered />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {solution.businessProblems.map((prob, i) => (
                <FadeIn key={i} delay={i * 0.1} className="bg-background border border-border rounded-2xl p-8">
                  <h3 className="font-heading font-bold text-xl mb-6 border-b border-border pb-4">{prob.title}</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-destructive" /> Current Challenge
                      </p>
                      <p className="text-foreground">{prob.currentChallenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-success" /> Rudrx Solution
                      </p>
                      <p className="text-foreground font-medium">{prob.rudrxSolution}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>

        {/* 5. INTERACTIVE DEMO (If applicable) */}
        {solution.demoType && (
          <Section className="bg-background">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <SectionHeading badge="Simulation" title="Experience the Workflow" className="mb-6" />
                  <p className="text-muted-foreground mb-8">
                    See exactly how {solution.title} operates natively within your enterprise systems without human bottlenecks.
                  </p>
                  <ul className="space-y-4">
                    {solution.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-foreground">{feat.title}</strong>
                          <span className="text-muted-foreground text-sm">{feat.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <FadeIn direction="left">
                  <InteractiveDemo type={solution.demoType} />
                </FadeIn>
              </div>
            </Container>
          </Section>
        )}

        {/* 6. REFERENCE ARCHITECTURE */}
        <Section className="bg-elevated border-y border-border">
          <Container>
            <SectionHeading badge="Engineering" title="Reference Architecture" subtitle={`How we integrate ${solution.title} into your existing data lake and APIs.`} centered />
            <div className="mt-12">
              <ArchitectureDiagram nodes={solution.architecture} />
            </div>
          </Container>
        </Section>

        {/* 7 & 8. ROI CALCULATOR & BENEFITS */}
        <Section className="bg-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading badge="Business Value" title="Measurable Impact" className="mb-8" />
                <div className="space-y-8">
                  {solution.benefits.map((benefit, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                      <h4 className="font-heading font-bold text-lg text-foreground mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </FadeIn>
                  ))}
                </div>
              </div>
              <FadeIn direction="left">
                <RoiCalculator config={solution.roiConfig} />
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* 9. TECHNOLOGY STACK */}
        <Section className="bg-surface border-y border-border">
          <Container>
            <SectionHeading badge="Infrastructure" title="Technology Stack" subtitle="Enterprise-grade models and deployment infrastructure." centered />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {solution.techStack.map((stack, i) => (
                <div key={i} className="bg-background border border-border p-6 rounded-xl text-center">
                  <h4 className="font-heading font-semibold text-foreground mb-4 border-b border-border pb-4">{stack.category}</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {stack.techs.map((t, j) => (
                      <span key={j} className="px-3 py-1 bg-surface border border-border rounded-lg text-sm font-medium text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 10. SUCCESS STORY */}
        <Section className="bg-background">
          <Container>
             <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-8 md:p-12">
               <span className="text-primary font-bold tracking-wider uppercase text-sm mb-8 block">Proven Success</span>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="md:col-span-1 border-r border-border/50">
                   <div className="text-5xl md:text-6xl font-bold font-heading text-foreground mb-2">{solution.caseStudy.metric}</div>
                   <div className="text-lg font-medium text-muted-foreground">{solution.caseStudy.metricLabel}</div>
                 </div>
                 <div className="md:col-span-2 flex flex-col justify-center">
                   <p className="text-xl md:text-2xl text-foreground font-medium mb-4 leading-relaxed">
                     &quot;{solution.caseStudy.description}&quot;
                   </p>
                   <p className="text-primary font-semibold">— {solution.caseStudy.client}</p>
                 </div>
               </div>
             </div>
          </Container>
        </Section>

        {/* 11. DELIVERY PROCESS */}
        <DeliveryProcess />

        {/* 12. FAQ */}
        <Section className="bg-background border-t border-border">
          <Container className="max-w-3xl mx-auto">
            <SectionHeading badge="Questions" title="Frequently Asked Questions" centered />
            <Accordion type="single" collapsible className="w-full mt-12">
              {solution.faq.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{f.question}</AccordionTrigger>
                  <AccordionContent>{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Section>

        {/* 13. CTA */}
        <FinalCTA />

      </main>
      <Footer />
    </>
  )
}
