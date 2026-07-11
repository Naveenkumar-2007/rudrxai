import { engagementModels } from "@/data/engagement"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/layout/container"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, Compass, Lightbulb, Rocket, Building2, Users, Activity } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-8 h-8" />,
  Lightbulb: <Lightbulb className="w-8 h-8" />,
  Rocket: <Rocket className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Activity: <Activity className="w-8 h-8" />
}

export function generateStaticParams() {
  return engagementModels.map((m) => ({
    slug: m.id,
  }))
}

export default async function EngagementModelPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const model = engagementModels.find((m) => m.id === resolvedParams.slug)

  if (!model) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background min-h-screen">
        
        {/* Hero */}
        <section className="pt-32 pb-16 border-b border-border bg-surface/30">
          <Container>
            <Link href="/engagement" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> All Engagement Models
            </Link>
            
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm border border-primary/20">
                  {iconMap[model.icon] || <Compass className="w-8 h-8" />}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">{model.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">{model.subtitle}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Ideal for: {model.idealFor}
                </div>
              </div>
              
              {/* Quick Summary Card */}
              <div className="w-full lg:w-[400px] bg-background border border-border rounded-2xl p-8 shadow-xl shrink-0">
                <h3 className="font-bold text-lg mb-6">Engagement Summary</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Pricing</span>
                    <span className="font-semibold text-foreground">Custom Quote</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">SLA Included</span>
                    <span className="font-semibold text-foreground">Enterprise Level</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Onboarding Time</span>
                    <span className="font-semibold text-foreground">~2 Weeks</span>
                  </div>
                </div>
                <Link href="/discovery" className="w-full flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Request Pricing <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-24">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              {/* Process */}
              <div>
                <h3 className="text-2xl font-bold font-heading mb-6 border-b border-border pb-4">Our Process</h3>
                <div className="space-y-6">
                  {model.process.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-sm font-bold text-muted-foreground shrink-0">
                        {i + 1}
                      </div>
                      <div className="pt-1 font-medium text-foreground">{step}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h3 className="text-2xl font-bold font-heading mb-6 border-b border-border pb-4">Deliverables</h3>
                <ul className="space-y-4">
                  {model.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h3 className="text-2xl font-bold font-heading mb-6 border-b border-border pb-4">Business Outcomes</h3>
                <ul className="space-y-4">
                  {model.outcomes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
