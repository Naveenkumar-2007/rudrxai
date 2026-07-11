import { solutions } from "@/data/solutions"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/fade-in"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SolutionsIndex() {
  const categories = Array.from(new Set(solutions.map(s => s.category)))

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-40 pb-20 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          <Container>
            <FadeIn>
              <SectionHeading 
                badge="Platforms"
                title="Enterprise AI Solutions"
                subtitle="Explore our comprehensive suite of intelligent solutions designed to automate workflows, reduce overhead, and scale operations."
              />
            </FadeIn>
            
            <div className="space-y-24 mt-16">
              {categories.map((category) => (
                <div key={category}>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-8 pb-4 border-b border-border">{category}</h3>
                  <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.filter(s => s.category === category).map((solution) => (
                      <StaggerItem key={solution.id}>
                        <Link href={`/solutions/${solution.id}`} className="group block h-full bg-surface border border-border p-8 rounded-2xl transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                          <h4 className="font-heading font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors">{solution.title}</h4>
                          <p className="text-muted-foreground text-sm mb-8 line-clamp-3">{solution.heroDescription}</p>
                          <div className="mt-auto flex items-center text-sm font-medium text-primary">
                            Explore Solution <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </div>
                        </Link>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              ))}
            </div>
            
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
