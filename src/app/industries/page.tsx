import { industries } from "@/data/industries"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/fade-in"
import { ArrowRight, Building2 } from "lucide-react"
import Link from "next/link"

export default function IndustriesIndex() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-40 pb-20 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />
          <Container>
            <FadeIn>
              <SectionHeading 
                badge="Sectors"
                title="Industry Transformation"
                subtitle="We build enterprise-grade AI systems tailored to the specific operational, regulatory, and technical challenges of your industry."
              />
            </FadeIn>
            
            <div className="mt-16">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {industries.map((industry) => (
                  <StaggerItem key={industry.id}>
                    <Link href={`/industries/${industry.id}`} className="group block h-full bg-surface border border-border p-6 rounded-2xl transition-all hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Building2 className="w-5 h-5 text-secondary" />
                      </div>
                      
                      <h4 className="font-heading font-bold text-lg text-foreground mb-3 group-hover:text-secondary transition-colors">{industry.title}</h4>
                      <p className="text-muted-foreground text-sm mb-6 line-clamp-3">{industry.overview}</p>
                      
                      <div className="mt-auto flex items-center text-sm font-medium text-secondary">
                        View Architecture <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
            
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
