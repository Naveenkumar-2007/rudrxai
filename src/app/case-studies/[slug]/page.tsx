import { caseStudies } from "@/data/case-studies"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/effects/fade-in"
import { Button } from "@/components/ui/button"
import { Timeline } from "@/components/case-studies/timeline"
import { ArchitectureDiagram } from "@/components/solutions/ArchitectureDiagram"
import { ArrowRight, CheckCircle2, TrendingUp, TrendingDown, Layers, Lightbulb, Minus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.id,
  }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = caseStudies.find((cs) => cs.id === resolvedParams.slug)

  if (!study) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-background relative overflow-hidden border-b border-border">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right">
                <div className="flex gap-2 mb-6">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold bg-surface font-mono text-xs uppercase tracking-wider text-primary border-primary/20">
                    {study.industry}
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold bg-surface font-mono text-xs uppercase tracking-wider text-muted-foreground border-border">
                    {study.solutionCategory}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-8 text-foreground leading-[1.1]">
                  {study.title}
                </h1>
                
                <p className="text-xl text-primary font-medium mb-6">
                  Executive Summary
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {study.executiveSummary}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="h-12 px-8">Book Discovery Call</Button>
                </div>
              </FadeIn>
              
              <FadeIn direction="left">
                <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl">
                  <Image 
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Challenge & Process */}
        <section className="py-24 bg-surface/30">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <FadeIn>
                <h2 className="text-3xl font-bold font-heading mb-6">Business Challenge</h2>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  {study.businessChallenge}
                </p>
                
                <h3 className="text-xl font-bold font-heading mb-4">Current Process</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {study.currentProcess}
                </p>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
                  <h3 className="font-heading font-semibold text-xl mb-6 text-destructive">Pain Points</h3>
                  <ul className="space-y-4">
                    {study.painPoints.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <Minus className="w-5 h-5 text-destructive/50 shrink-0 mr-3 mt-0.5" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Architecture & Tech Stack */}
        <section className="py-24 bg-background border-y border-border">
          <Container>
            <FadeIn>
              <SectionHeading 
                title="Solution Architecture"
                subtitle="How we orchestrated AI to solve the operational bottleneck."
                centered
              />
            </FadeIn>
            
            <div className="mt-16 grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
              <div className="xl:col-span-5 space-y-12">
                <FadeIn>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {study.architectureDescription}
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <h4 className="font-heading font-semibold text-lg mb-4 flex items-center">
                    <Layers className="w-5 h-5 text-primary mr-2" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologyStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-md bg-surface border border-border text-sm font-medium text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <h4 className="font-heading font-semibold text-lg mb-4 flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2" />
                    Enterprise Security
                  </h4>
                  <ul className="space-y-3">
                    {study.securityMeasures.map((measure, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-success mt-2 mr-3 shrink-0" />
                        <span className="text-sm text-muted-foreground">{measure}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
              
              <div className="xl:col-span-7">
                <FadeIn direction="left">
                  <ArchitectureDiagram nodes={[
                    { id: "1", type: "input", label: "Enterprise Data" },
                    { id: "2", type: "process", label: "AI Engine" },
                    { id: "3", type: "storage", label: "Secure Vault" },
                    { id: "4", type: "output", label: "Business Outcome" }
                  ]} />
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Timeline & ROI */}
        <section className="py-24 bg-surface/30">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <FadeIn>
                  <h2 className="text-3xl font-bold font-heading mb-6">Implementation Timeline</h2>
                  <p className="text-muted-foreground mb-8">From initial discovery to full production rollout.</p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <Timeline events={study.timeline} />
                </FadeIn>
              </div>
              
              <div>
                <FadeIn direction="left">
                  <div className="sticky top-32">
                    <h2 className="text-3xl font-bold font-heading mb-6">Business ROI</h2>
                    <p className="text-muted-foreground mb-12">Measurable impact on the bottom line.</p>
                    
                    <div className="space-y-6 mb-12">
                      {study.roiMetrics.map((metric, i) => (
                        <div key={i} className="bg-background rounded-2xl p-6 border border-border shadow-sm flex items-center justify-between">
                          <span className="text-lg font-medium text-muted-foreground">{metric.label}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-3xl font-bold font-heading text-foreground">{metric.value}</span>
                            {metric.trend === 'up' ? (
                              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-success" />
                              </div>
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <TrendingDown className="w-5 h-5 text-primary" />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="font-heading font-semibold text-xl mb-6">Outcomes</h3>
                    <ul className="space-y-4">
                      {study.businessOutcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                          <span className="text-muted-foreground font-medium">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Lessons Learned & Related */}
        <section className="py-24 bg-background border-t border-border">
          <Container>
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <div className="bg-surface rounded-3xl p-8 md:p-12 border border-border text-center mb-24">
                  <Lightbulb className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h2 className="text-2xl font-bold font-heading mb-6">Lessons Learned</h2>
                  <div className="space-y-4 text-left">
                    {study.lessonsLearned.map((lesson, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        <span className="text-primary font-bold mr-2">{i + 1}.</span>
                        {lesson}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn>
                <h3 className="text-center font-heading font-semibold text-xl mb-8">Related Solutions</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {study.relatedSolutions.map((related, i) => (
                    <Link key={i} href={related.url} className="px-6 py-3 rounded-xl bg-surface border border-border text-muted-foreground font-medium hover:text-foreground hover:border-primary/50 hover:shadow-lg transition-all flex items-center group">
                      {related.name}
                      <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  )
}
