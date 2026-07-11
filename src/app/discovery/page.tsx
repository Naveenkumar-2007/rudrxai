import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/layout/container"
import { DiscoveryWizard } from "@/components/engagement/discovery-wizard"
import { FadeIn } from "@/components/effects/fade-in"
import { ShieldCheck, Zap, Lock } from "lucide-react"

export default function DiscoveryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Context */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <FadeIn>
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary border-primary/20 bg-primary/5 mb-6">
                  Enterprise Qualification
                </span>
                <h1 className="text-4xl font-bold font-heading mb-6 text-foreground">
                  Book a Discovery Session
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Fill out this qualification form so our AI and Enterprise Consultants can prepare a tailored architecture and strategy overview before our meeting.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-1">NDA Protected</h4>
                      <p className="text-xs text-muted-foreground">All information shared is strictly confidential.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-1">AI-Powered Analysis</h4>
                      <p className="text-xs text-muted-foreground">Our internal systems route your request instantly.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center shrink-0">
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-1">No Commitment</h4>
                      <p className="text-xs text-muted-foreground">The discovery session is entirely complimentary.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            {/* Right Wizard */}
            <div className="lg:col-span-8">
              <FadeIn delay={0.2}>
                <DiscoveryWizard />
              </FadeIn>
            </div>
            
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
