import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/layout/container"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/fade-in"
import { EngagementComparison } from "@/components/engagement/engagement-comparison"
import { engagementModels } from "@/data/engagement"
import Link from "next/link"
import { ArrowRight, Compass, Lightbulb, Rocket, Building2, Users, Activity } from "lucide-react"

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6" />,
  Lightbulb: <Lightbulb className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />
}

export default function EngagementPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background min-h-screen">
        
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative overflow-hidden border-b border-border">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
          <Container>
            <FadeIn>
              <div className="max-w-3xl">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Engagement Models</span>
                <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-8 text-foreground leading-[1.1]">
                  Let&apos;s Build Something <span className="text-muted-foreground">Extraordinary</span> Together.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                  Every business is different. Every AI strategy is different. We don&apos;t sell hours or subscriptions—we partner with you to deliver guaranteed business outcomes. Let&apos;s understand your business first.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/discovery" className="px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">
                    Book Discovery
                  </Link>
                  <Link href="/contact" className="px-8 py-4 rounded-full border border-border text-foreground font-medium hover:border-primary/50 transition-colors">
                    Talk to Expert
                  </Link>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Models Grid */}
        <section className="py-24">
          <Container>
            <FadeIn>
              <h2 className="text-3xl font-bold font-heading mb-12 text-center">How We Partner With You</h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engagementModels.map((model) => (
                <StaggerItem key={model.id}>
                  <Link href={`/engagement/${model.id}`} className="group block h-full p-8 rounded-2xl bg-surface border border-border hover:border-primary/50 hover:shadow-xl transition-all relative overflow-hidden">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                      {iconMap[model.icon] || <Compass className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-colors">
                      {model.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                      {model.subtitle}
                    </p>
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Ideal For</div>
                    <p className="text-sm text-foreground font-medium mb-8">
                      {model.idealFor}
                    </p>
                    
                    <div className="absolute bottom-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* Comparison Table Section */}
        <section className="py-24 bg-surface border-y border-border">
          <Container>
            <FadeIn>
              <div className="mb-12 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold font-heading mb-4">Compare Engagement Models</h2>
                <p className="text-muted-foreground">Not sure which model is right for you? Compare deliverables and outcomes to find the perfect fit for your organization&apos;s maturity.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <EngagementComparison />
            </FadeIn>
          </Container>
        </section>

        {/* Process Timeline */}
        <section className="py-24 overflow-hidden relative">
          <Container>
            <FadeIn>
              <h2 className="text-3xl font-bold font-heading mb-16 text-center">Our Delivery Process</h2>
            </FadeIn>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute top-0 bottom-0 left-[27px] md:left-1/2 md:-ml-px w-0.5 bg-border" />
              
              {[
                { step: "01", title: "Discovery", desc: "We analyze your business architecture and identify AI opportunities." },
                { step: "02", title: "Architecture", desc: "Our engineers design a scalable, secure, and compliant technical foundation." },
                { step: "03", title: "Proposal", desc: "You receive a fixed-scope proposal with guaranteed timelines and costs." },
                { step: "04", title: "Development", desc: "Agile sprints with weekly demos and continuous deployment." },
                { step: "05", title: "Deployment", desc: "Seamless rollout into your production environment with zero downtime." }
              ].map((item, i) => (
                <div key={i} className={`relative flex items-center mb-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 -ml-[27px] md:-ml-7 bg-background border-4 border-surface rounded-full flex items-center justify-center font-bold text-primary shadow-lg z-10">
                    {item.step}
                  </div>
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                    <FadeIn delay={i * 0.1}>
                      <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm hover:border-primary/50 transition-colors">
                        <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Pricing Philosophy CTA */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <Container>
            <FadeIn>
              <h2 className="text-4xl font-bold font-heading mb-6">Ready To Start Your AI Journey?</h2>
              <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
                Enterprise clients expect proposals based on concrete scope, not generic pricing tiers. Book a discovery call today to receive a custom quote tailored to your business outcomes.
              </p>
              <Link href="/discovery" className="inline-flex items-center px-8 py-4 rounded-full bg-background text-foreground font-bold hover:bg-surface transition-colors shadow-xl">
                Book Discovery Call <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </FadeIn>
          </Container>
        </section>
        
      </main>
      <Footer />
    </>
  )
}
