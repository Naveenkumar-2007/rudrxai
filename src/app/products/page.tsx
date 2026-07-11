import { products } from "@/data/products"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/fade-in"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductsIndex() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-40 pb-20 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
          <Container>
            <FadeIn>
              <SectionHeading 
                badge="Portfolio"
                title="AI Projects & Platforms"
                subtitle="Explore real-world implementations of scalable AI models, RAG architectures, and predictive machine learning systems."
              />
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="#featured" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm h-11 px-8 py-2">
                  View All Projects
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-surface hover:text-foreground shadow-sm h-11 px-8 py-2">
                  Request Custom Build
                </Link>
              </div>
            </FadeIn>
            
            <div id="featured" className="mt-24">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <StaggerItem key={product.id}>
                    <div className="group block h-full bg-surface border border-border rounded-2xl transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden flex flex-col">
                      
                      {/* Invisible link covering the whole card */}
                      <Link href={`/products/${product.id}`} className="absolute inset-0 z-0" aria-label={`View ${product.title}`} />
                      
                      {/* Image header */}
                      {product.imageUrl && (
                        <div className="relative w-full h-48 bg-muted overflow-hidden z-10 pointer-events-none">
                          <Image
                            src={product.imageUrl}
                            alt={product.title}
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                        </div>
                      )}
                      
                      <div className="p-8 flex flex-col flex-1 relative z-10 pointer-events-none">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">{product.title}</h4>
                        </div>
                        <p className="text-primary font-medium text-sm mb-4">{product.tagline}</p>
                        
                        <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">{product.overview}</p>
                        
                        {product.techStack && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {product.techStack.slice(0, 4).map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                                {tech}
                              </span>
                            ))}
                            {product.techStack.length > 4 && (
                              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium">
                                +{product.techStack.length - 4}
                              </span>
                            )}
                          </div>
                        )}
                        
                        <div className="mt-auto flex items-center justify-between text-sm font-medium">
                          <span className="text-primary flex items-center">
                            View Details <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </span>
                          
                          {product.liveUrl && (
                            <div className="pointer-events-auto z-20">
                              <a 
                                href={product.liveUrl} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
                              >
                                Live Demo <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
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
