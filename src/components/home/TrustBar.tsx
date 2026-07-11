import { Container } from "@/components/layout/container"
import { FadeIn } from "@/components/effects/fade-in"

// Mock enterprise logos using SVG placeholders
const logos = [
  "Acme Corp",
  "GlobalBank",
  "NexusTech",
  "Vertex",
  "Quantum",
  "Starlight",
]

export function TrustBar() {
  return (
    <section className="py-12 border-y border-border/50 bg-surface/30 backdrop-blur-sm overflow-hidden">
      <Container>
        <FadeIn>
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
            Trusted by ambitious companies building the future
          </p>
          
          {/* Simple CSS Marquee / Flex Wrap for logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-foreground/10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-foreground rounded-full" />
                </div>
                <span className="font-heading font-bold text-xl tracking-tight text-foreground">{logo}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
