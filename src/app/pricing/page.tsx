"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/layout/container"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/fade-in"
import Link from "next/link"
import { 
  ArrowRight, Check, ChevronDown, Shield, Zap, 
  Sparkles, Rocket, Globe, 
  Bot, Mic, BarChart3, Cpu,
  Headphones, Target,
  CheckCircle2, ArrowUpRight
} from "lucide-react"

const projectCategories = [
  { name: "Business Website", price: "₹3,999 – ₹9,999", icon: Globe },
  { name: "AI Chatbot", price: "₹4,999 – ₹19,999", icon: Bot },
  { name: "AI Dashboard", price: "₹2,999 – ₹9,999", icon: BarChart3 },
  { name: "Voice AI Agent", price: "₹5,999 – ₹29,000", icon: Mic },
  { name: "Custom Business / Personal Platform", price: "Custom Quote", icon: Cpu },
]

const trustIndicators = [
  { icon: Shield, label: "Production-Grade Quality" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: Target, label: "Fixed Pricing" },
  { icon: Headphones, label: "Dedicated Support" },
  { icon: CheckCircle2, label: "No Hidden Costs" },
  { icon: Rocket, label: "On-Time Delivery" },
]

const engagementModels = [
  {
    name: "Starter",
    badge: "Affordable",
    bestFor: "Small businesses, personal brands",
    includes: ["Business Website", "Mobile Responsive", "SEO Optimization", "Contact Form", "Hosting Setup"],
    price: "₹3,999",
    priceLabel: "Starting at",
    cta: "Get Started",
    href: "/contact",
    icon: Globe,
    highlight: false,
  },
  {
    name: "Growth",
    badge: "Most Popular",
    bestFor: "Growing businesses, SMEs",
    includes: ["AI Chatbot", "Dashboard", "CRM Integration", "Analytics", "Priority Support"],
    price: "₹9,999",
    priceLabel: "Starting at",
    cta: "Request Proposal",
    href: "/contact",
    icon: Sparkles,
    highlight: true,
  },
  {
    name: "Enterprise",
    badge: "Custom",
    bestFor: "Large businesses, custom solutions",
    includes: ["Voice AI Agent", "Custom Platform", "Multi-system Integration", "Dedicated Support", "SLA Agreement"],
    price: "Custom",
    priceLabel: "Quote",
    cta: "Talk to Us",
    href: "/contact",
    icon: Rocket,
    highlight: false,
  },
]

const includedItems = [
  "Requirements gathering", "UI/UX design", "Development",
  "Testing & QA", "Deployment", "Documentation",
  "Training session", "Post-launch support (30 days)", "Source code ownership",
]

const faqs = [
  { q: "What's included in the pricing?", a: "All our pricing includes complete design, development, testing, deployment, and 30 days of post-launch support. Source code ownership is included in every package." },
  { q: "Do you work with international clients?", a: "Yes! We work with clients globally. All communication happens in English, and we adjust meeting schedules to accommodate different time zones." },
  { q: "Can I start with a small project?", a: "Absolutely. Most of our clients start with a website or chatbot and then expand to dashboards, voice agents, and custom platforms as their business grows." },
  { q: "Do you provide maintenance after launch?", a: "Yes. Every project includes 30 days of post-launch support. After that, you can opt for ongoing maintenance plans starting at ₹999/month." },
  { q: "How long does a typical project take?", a: "Business websites: 1–2 weeks. Chatbots: 2–3 weeks. Dashboards: 2–4 weeks. Voice agents: 3–6 weeks. Custom platforms: 4–12 weeks." },
  { q: "Who owns the source code?", a: "You do. You receive full ownership of all source code, documentation, and assets we develop for your project. No vendor lock-in." },
  { q: "What payment methods do you accept?", a: "We accept UPI, bank transfers, Razorpay, and for international clients, PayPal and wire transfers. Payments are milestone-based." },
  { q: "Can you integrate with our existing software?", a: "Yes. We regularly integrate with Google Workspace, WhatsApp, CRMs, payment gateways, ERPs, and custom APIs. If it has an API, we can integrate it." },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background min-h-screen">

        {/* Hero */}
        <section className="pt-36 pb-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                {/* Highlighted pricing badge */}
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-primary/10 px-6 py-2 font-bold text-base text-primary mb-6 animate-pulse">
                  ⚡ Websites Starting from ₹3,999
                </div>
                <h1 className="text-5xl md:text-6xl font-bold font-heading tracking-tight mb-6 text-foreground leading-[1.08]">
                  Transparent{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Affordable
                  </span>{" "}
                  Pricing
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
                  No hidden fees. No hourly billing. Fixed prices for every project. Get exactly what you need at a price you can afford.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                    Get a Free Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Trust Indicators */}
        <section className="py-10 border-y border-border bg-muted/30">
          <Container>
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {trustIndicators.map((t) => {
                const Icon = t.icon
                return (
                  <StaggerItem key={t.label}>
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground leading-tight">{t.label}</span>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </Container>
        </section>

        {/* Project Category Pricing */}
        <section className="py-16">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Product Pricing</span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-foreground">What We Build & What It Costs</h2>
                <p className="text-muted-foreground text-lg">Straightforward pricing by project type.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl overflow-hidden">
                {projectCategories.map((cat, i) => {
                  const Icon = cat.icon
                  return (
                    <div key={cat.name} className={`flex items-center justify-between px-6 py-5 group hover:bg-muted/50 transition-colors ${i !== projectCategories.length - 1 ? "border-b border-border" : ""}`}>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{cat.name}</span>
                      </div>
                      <span className="font-bold text-foreground text-lg">{cat.price}</span>
                    </div>
                  )
                })}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4 max-w-lg mx-auto">
                * Final pricing depends on features and scope. Contact us for a detailed quote.
              </p>
            </FadeIn>
          </Container>
        </section>

        {/* Engagement Models */}
        <section className="py-16 bg-muted/30 border-y border-border">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Plans</span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-foreground">Choose Your Plan</h2>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.08}>
              {engagementModels.map((model) => {
                const Icon = model.icon
                return (
                  <StaggerItem key={model.name}>
                    <div className={`relative h-full rounded-2xl border p-8 flex flex-col transition-all hover:shadow-xl group ${
                      model.highlight
                        ? "border-primary bg-primary/[0.03] shadow-lg shadow-primary/5"
                        : "border-border bg-card hover:border-primary/30"
                    }`}>
                      {model.highlight && (
                        <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full">
                          {model.badge}
                        </div>
                      )}
                      {!model.highlight && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-4">{model.badge}</span>
                      )}

                      <div className="flex items-center gap-3 mb-4 mt-1">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-foreground">{model.name}</h3>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">{model.bestFor}</p>

                      <div className="mb-4">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">{model.priceLabel}</span>
                        <div className="text-3xl font-bold text-foreground">{model.price}</div>
                      </div>

                      <div className="mb-4 flex-1">
                        <ul className="space-y-2">
                          {model.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <span className="text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={model.href}
                        className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all mt-auto ${
                          model.highlight
                            ? "bg-primary text-primary-foreground hover:opacity-90 shadow-md"
                            : "bg-foreground text-background hover:opacity-90"
                        }`}
                      >
                        {model.cta} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </Container>
        </section>

        {/* What's Included */}
        <section className="py-16">
          <Container>
            <FadeIn>
              <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold font-heading text-foreground mb-6">What&apos;s Included in Every Project</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {includedItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30 border-y border-border">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">FAQ</span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-foreground">Frequently Asked Questions</h2>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, i) => (
                <FadeIn key={i} delay={i * 0.03}>
                  <div className={`rounded-xl border bg-card overflow-hidden transition-colors ${openFaq === i ? "border-primary/30" : "border-border"}`}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                    >
                      <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-foreground leading-tight">
                  Ready to Build Your{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Digital Solution</span>?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  Get a free quote for your project. No commitments, no hidden fees.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-primary/20">
                    Get Free Quote <ArrowUpRight className="w-5 h-5" />
                  </Link>
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
