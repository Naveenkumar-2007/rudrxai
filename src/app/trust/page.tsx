import { trustData } from "@/data/trust"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/fade-in"
import { ShieldCheck, Lock, Activity, Server, FileCheck, HelpCircle } from "lucide-react"

// Helper to get category icons
function getCategoryIcon(category: string) {
  const props = { className: "w-5 h-5 text-primary" }
  switch(category) {
    case "Security": return <ShieldCheck {...props} />
    case "Privacy": return <Lock {...props} />
    case "Responsible AI": return <Activity {...props} />
    case "Infrastructure": return <Server {...props} />
    case "Compliance": return <FileCheck {...props} />
    case "Incident Response": return <HelpCircle {...props} />
    default: return <ShieldCheck {...props} />
  }
}

export default function TrustCenterPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        
        {/* Premium Hero */}
        <section className="pt-40 pb-24 bg-background relative overflow-hidden border-b border-border">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
          <Container>
            <FadeIn>
              <SectionHeading 
                badge="Trust Center"
                title={trustData.hero.title}
                subtitle={trustData.hero.subtitle}
                centered
              />
            </FadeIn>
            
            <FadeIn delay={0.2} className="mt-16">
              <div className="bg-surface border border-border p-8 rounded-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">Target Availability</h3>
                  <p className="text-muted-foreground text-sm">Our infrastructure is designed for extreme reliability.</p>
                </div>
                <div className="flex items-center gap-4 bg-background px-6 py-4 rounded-xl border border-border">
                  <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                  <span className="text-3xl font-bold font-heading text-foreground">99.9%</span>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Compliance Roadmap */}
        <section className="py-24 bg-surface/30 border-b border-border">
          <Container>
            <FadeIn>
              <h2 className="text-3xl font-bold font-heading text-center mb-16">Compliance & Certifications</h2>
            </FadeIn>
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustData.certifications.map((cert, i) => (
                <StaggerItem key={i}>
                  <div className="bg-background border border-border p-6 rounded-2xl h-full shadow-sm hover:border-primary/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center">
                        <FileCheck className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md border ${
                        cert.status === "Achieved" 
                          ? "bg-success/10 text-success border-success/20" 
                          : cert.status === "In Progress"
                            ? "bg-warning/10 text-warning border-warning/20"
                            : "bg-surface text-muted-foreground border-border"
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    <h4 className="font-heading font-semibold text-lg mb-2 text-foreground">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Trust Articles */}
        <section className="py-24 bg-background">
          <Container>
            <div className="max-w-4xl mx-auto space-y-12">
              {trustData.articles.map((article, i) => (
                <FadeIn key={article.id} delay={i * 0.1}>
                  <div className="bg-surface/50 border border-border p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-background rounded-lg border border-border shadow-sm">
                        {getCategoryIcon(article.category)}
                      </div>
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {article.content}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ Section Placeholder */}
        <section className="py-24 bg-surface/30 border-t border-border">
          <Container>
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold font-heading mb-6">Security FAQ</h2>
                <p className="text-muted-foreground mb-12">
                  Have more technical questions about our infrastructure? 
                </p>
                <div className="bg-background border border-border p-8 rounded-2xl text-left shadow-sm">
                  <div className="flex gap-4 items-start mb-6 border-b border-border pb-6">
                    <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">How do you handle PII data?</h4>
                      <p className="text-muted-foreground text-sm">We implement automatic PII redaction at the edge before data ever hits a language model. You can configure custom redaction rules per deployment.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Can we self-host Rudrx models?</h4>
                      <p className="text-muted-foreground text-sm">Yes, Rudrx Cloud supports VPC peering and on-premise Kubernetes deployments for enterprise clients with strict data sovereignty requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  )
}
