"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/layout/container"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/fade-in"
import Link from "next/link"
import { 
  ArrowRight, Check, ChevronDown, Shield, Eye, Zap, Lock, 
  Sparkles, Rocket, Building2, Users, Code2, Lightbulb,
  FileText, Bot, Mic, BarChart3, Brain, Cpu, Globe, 
  Monitor, Headphones, Star, Clock, Target, Layers,
  CreditCard, CheckCircle2, ArrowUpRight
} from "lucide-react"

/* ============================================================
   DATA
   ============================================================ */

const trustIndicators = [
  { icon: Shield, label: "Enterprise-Grade Architecture" },
  { icon: Eye, label: "Transparent Pricing" },
  { icon: Zap, label: "Scalable Solutions" },
  { icon: Lock, label: "Security-First Engineering" },
  { icon: Rocket, label: "Production-Ready Delivery" },
  { icon: Headphones, label: "Dedicated Support" },
  { icon: CheckCircle2, label: "No Hidden Costs" },
  { icon: Target, label: "Milestone-Based Development" },
]

const pricingPhilosophyPoints = [
  "Business Goals & ROI Targets",
  "Project Scope & Complexity",
  "System Integrations Required",
  "Timeline & Delivery Schedule",
  "Security & Compliance Needs",
  "Deployment Environment",
  "Long-Term Support Plan",
]

const engagementModels = [
  {
    name: "Discovery Workshop",
    badge: "Explore",
    bestFor: "Businesses exploring AI opportunities",
    includes: ["Business analysis", "AI opportunity assessment", "Technology recommendations", "Architecture discussion", "Implementation roadmap", "ROI estimation"],
    deliverables: ["Workshop report", "AI roadmap", "Solution recommendations", "Timeline estimation"],
    price: "$99",
    priceLabel: "Starting at",
    cta: "Book Workshop",
    href: "/discovery",
    icon: Lightbulb,
    highlight: false,
  },
  {
    name: "AI MVP Development",
    badge: "Launch",
    bestFor: "Startups, founders, product validation",
    includes: ["UI/UX Design", "Backend Development", "AI Integration", "Testing & QA", "Cloud Deployment"],
    deliverables: ["Working MVP", "Source Code", "Documentation", "Deployment Guide"],
    price: "$499",
    priceLabel: "Starting at",
    cta: "Build MVP",
    href: "/discovery",
    icon: Rocket,
    highlight: false,
  },
  {
    name: "Custom AI Solutions",
    badge: "Most Popular",
    bestFor: "Growing businesses, SMEs, mid-market",
    includes: ["AI Agents", "RAG Systems", "Automation Pipelines", "Dashboards & Analytics", "Custom APIs", "Cloud Deployment"],
    deliverables: ["Production System", "Full Source Code", "API Documentation", "Training Session"],
    price: "$1,500",
    priceLabel: "Starting at",
    cta: "Request Proposal",
    href: "/discovery",
    icon: Sparkles,
    highlight: true,
  },
  {
    name: "Enterprise AI Transformation",
    badge: "Enterprise",
    bestFor: "Large organizations, government",
    includes: ["Discovery & Architecture", "Security & Compliance", "Multi-system Integration", "Training & Enablement", "Dedicated Support", "SLA Agreement"],
    deliverables: ["Enterprise Platform", "Architecture Docs", "Compliance Reports", "Training Materials"],
    price: "Custom",
    priceLabel: "Quote",
    cta: "Talk to Enterprise Team",
    href: "/discovery",
    icon: Building2,
    highlight: false,
  },
  {
    name: "Dedicated AI Team",
    badge: "Partnership",
    bestFor: "Long-term partnerships",
    includes: ["AI Engineers", "Backend Engineers", "Frontend Engineers", "ML Engineers", "Project Manager", "QA Engineer"],
    deliverables: ["Continuous Delivery", "Weekly Reports", "Dedicated Slack Channel", "Architecture Reviews"],
    price: "Custom",
    priceLabel: "Monthly",
    cta: "Schedule Consultation",
    href: "/discovery",
    icon: Users,
    highlight: false,
  },
]

const projectCategories = [
  { name: "Business Website", price: "$99", icon: Globe },
  { name: "AI Chatbot", price: "$299", icon: Bot },
  { name: "AI Dashboard", price: "$499", icon: BarChart3 },
  { name: "Voice AI Agent", price: "$699", icon: Mic },
  { name: "Document Intelligence", price: "$899", icon: FileText },
  { name: "RAG Platform", price: "$999", icon: Brain },
  { name: "Computer Vision", price: "$1,200", icon: Monitor },
  { name: "Custom AI SaaS", price: "$2,500+", icon: Code2 },
  { name: "Enterprise AI Platform", price: "Custom Quote", icon: Cpu },
]

const includedItems = [
  "Discovery session", "Requirements gathering", "Solution architecture",
  "UI/UX design", "Development", "Testing & QA",
  "Deployment", "Documentation", "Training session",
  "Post-launch support", "Quality assurance", "Source code ownership",
]

const addOns = [
  "Cloud infrastructure", "Advanced dashboards", "API integrations",
  "WhatsApp integration", "Slack integration", "CRM integration",
  "Analytics & reporting", "Monitoring & alerting", "Advanced security",
  "Priority support", "Performance optimization", "Additional AI models",
]

const processSteps = [
  { step: "01", title: "Discovery", desc: "We analyze your business, identify AI opportunities, and define success metrics." },
  { step: "02", title: "Requirements", desc: "Detailed technical requirements, user stories, and acceptance criteria." },
  { step: "03", title: "Architecture", desc: "Scalable, secure system design with technology selection and integration planning." },
  { step: "04", title: "Design", desc: "Premium UI/UX design with prototypes, user testing, and design system creation." },
  { step: "05", title: "Development", desc: "Agile sprints with weekly demos, continuous integration, and code reviews." },
  { step: "06", title: "Testing", desc: "Comprehensive QA, performance testing, security audits, and UAT." },
  { step: "07", title: "Deployment", desc: "Zero-downtime deployment, monitoring setup, and production validation." },
  { step: "08", title: "Support", desc: "Post-launch monitoring, bug fixes, optimization, and ongoing maintenance." },
]

const paymentMilestones = [
  { pct: "20%", label: "Discovery & Planning", desc: "Project kickoff, requirements, architecture" },
  { pct: "30%", label: "Development Kickoff", desc: "Design approval, sprint planning, initial delivery" },
  { pct: "30%", label: "Development Progress", desc: "Core features, integrations, testing" },
  { pct: "20%", label: "Final Delivery", desc: "Deployment, training, handover" },
]

const supportPlans = [
  {
    name: "Starter",
    price: "Included",
    priceNote: "After delivery",
    features: ["Email support", "Bug fixes (30 days)", "Knowledge transfer", "Documentation access"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$99/mo",
    priceNote: "Ongoing",
    features: ["Priority support", "Performance monitoring", "Monthly maintenance", "Security updates", "Feature requests"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "SLA-backed",
    features: ["Dedicated support team", "99.9% SLA", "24/7 monitoring", "Architecture reviews", "Optimization sprints", "Quarterly roadmap"],
    highlight: false,
  },
]

const faqs = [
  { q: "Why isn't every project a fixed price?", a: "Every AI project is unique. The scope, complexity, integrations, security requirements, and deployment environment vary significantly. We provide detailed fixed-price proposals after our discovery session — but we need to understand your specific needs first to give you an honest, accurate quote." },
  { q: "Do you sign NDAs?", a: "Absolutely. We sign NDAs before every discovery session. Your intellectual property, business data, and project details are always protected. We can use your NDA template or provide ours." },
  { q: "Do you work internationally?", a: "Yes. We work with clients globally across North America, Europe, Middle East, and Asia-Pacific. All communication happens in English, and we adjust meeting schedules to accommodate different time zones." },
  { q: "Can we start with a small MVP?", a: "Yes, and we encourage it. Starting with an MVP lets you validate your AI use case with real users before investing in a full-scale platform. Most of our enterprise clients started with a $499–$1,500 MVP before scaling." },
  { q: "Do you provide maintenance after launch?", a: "Yes. Every project includes 30 days of post-launch support. After that, you can choose from our Growth ($99/month) or Enterprise (custom) support plans for ongoing maintenance, monitoring, and optimization." },
  { q: "Can you integrate with our existing software?", a: "Yes. We regularly integrate with SAP, Salesforce, HubSpot, Slack, Microsoft 365, Google Workspace, custom ERPs, databases, and legacy systems. If it has an API, we can integrate it." },
  { q: "Who owns the source code?", a: "You do. Unless otherwise agreed in writing, you receive full ownership of all source code, documentation, and assets we develop for your project. No vendor lock-in." },
  { q: "What payment methods do you accept?", a: "We accept bank wire transfers, ACH, credit cards (via Stripe), and for enterprise clients, purchase orders with NET-30 terms. Payments are milestone-based — you pay as we deliver." },
  { q: "Can projects scale over time?", a: "Absolutely. Our architectures are designed for scale from day one. We use microservices, containerization, and cloud-native patterns. Many clients start with a single AI agent and scale to multi-agent enterprise platforms." },
  { q: "How long does a typical project take?", a: "MVPs: 2–4 weeks. Custom solutions: 4–12 weeks. Enterprise platforms: 3–6+ months. We provide exact timelines in our proposals, and we have a strong track record of on-time delivery." },
  { q: "What technologies do you use?", a: "We're technology-agnostic but typically work with: Next.js, React, Python, FastAPI, LangChain, LangGraph, OpenAI, Gemini, Claude, Llama, Pinecone, Weaviate, PostgreSQL, Redis, Docker, Kubernetes, AWS, GCP, and Azure." },
  { q: "Do you offer training for our team?", a: "Yes. Every project includes a training session. For enterprise clients, we provide comprehensive training programs covering system administration, content management, AI prompt engineering, and ongoing optimization." },
  { q: "What happens if the project scope changes?", a: "We handle scope changes through a formal change request process. We'll assess the impact on timeline and budget, provide a revised proposal, and only proceed with your written approval. No surprises." },
  { q: "How do you handle data security?", a: "We follow enterprise security best practices: encryption at rest and in transit, role-based access control, regular security audits, SOC2-aligned processes, and GDPR/HIPAA compliance where required. We can deploy to your private cloud or air-gapped environments." },
  { q: "Can we see examples of your work?", a: "Yes. We share relevant case studies during discovery calls. Due to NDAs with enterprise clients, some projects are presented anonymously. Visit our Case Studies page for published examples across healthcare, finance, and government." },
]

/* ============================================================
   PAGE COMPONENT
   ============================================================ */

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background min-h-screen">

        {/* ===== HERO ===== */}
        <section className="pt-40 pb-24 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-primary mb-8">
                  <Sparkles className="w-3.5 h-3.5" /> Pricing & Engagement
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-8 text-foreground leading-[1.08]">
                  Flexible Pricing for{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Enterprise AI
                  </span>{" "}
                  Solutions
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                  Every business is different. Every AI solution is different. We provide transparent pricing based on your goals, technical complexity, integrations, security requirements, delivery timeline, and long-term support.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/discovery" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                    Book Discovery Call <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all">
                    Request Custom Quote
                  </Link>
                </div>
              </FadeIn>

              {/* Right Side: Animated Visual */}
              <FadeIn delay={0.3} direction="right">
                <div className="relative hidden lg:block">
                  {/* Main card */}
                  <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm font-semibold text-foreground">Enterprise Dashboard</div>
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-destructive/50" />
                        <div className="w-3 h-3 rounded-full bg-warning/50" />
                        <div className="w-3 h-3 rounded-full bg-success/50" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { label: "AI Accuracy", value: "99.2%", color: "text-success" },
                        { label: "Processing", value: "2.4M", color: "text-primary" },
                        { label: "Cost Saved", value: "$1.8M", color: "text-accent" },
                      ].map((m) => (
                        <div key={m.label} className="bg-background rounded-xl p-4 border border-border">
                          <div className={`text-2xl font-bold ${m.color}`}>{m.value}</div>
                          <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    {/* Fake chart */}
                    <div className="h-24 flex items-end gap-1.5 px-2">
                      {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-primary/80 to-primary/20 rounded-t-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  {/* Floating cards */}
                  <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-xl z-20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-success" /></div>
                      <div>
                        <div className="text-xs font-semibold text-foreground">Deployed</div>
                        <div className="text-[10px] text-muted-foreground">Production Ready</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-xl z-20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><Zap className="w-4 h-4 text-primary" /></div>
                      <div>
                        <div className="text-xs font-semibold text-foreground">AI Pipeline</div>
                        <div className="text-[10px] text-muted-foreground">99.9% Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* ===== TRUST INDICATORS ===== */}
        <section className="py-16 border-y border-border bg-muted/30">
          <Container>
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
              {trustIndicators.map((t) => {
                const Icon = t.icon
                return (
                  <StaggerItem key={t.label}>
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
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

        {/* ===== PRICING PHILOSOPHY ===== */}
        <section className="py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Approach</span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground leading-tight">
                  Why Custom AI Projects Require{" "}
                  <span className="text-primary">Flexible Pricing</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  AI is not a commodity product. A chatbot for a startup has different requirements than a document intelligence platform for a Fortune 500. We don&apos;t believe in hourly billing or one-size-fits-all pricing. Instead, we provide value-based proposals tailored to your specific business outcomes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every proposal is fixed-price with clear milestones, guaranteed timelines, and no hidden costs. You know exactly what you&apos;re getting, when you&apos;re getting it, and what it costs.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-lg font-bold text-foreground mb-6">Pricing Depends On</h3>
                  <div className="space-y-4">
                    {pricingPhilosophyPoints.map((point, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <span className="text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                        </div>
                        <span className="text-foreground font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* ===== ENGAGEMENT MODELS ===== */}
        <section id="engagement" className="py-24 bg-muted/30 border-y border-border">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Engagement Models</span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">Choose Your Partnership Model</h2>
                <p className="text-muted-foreground text-lg">From a $99 discovery workshop to a dedicated AI engineering team — we have an engagement model for every stage of your AI journey.</p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" staggerDelay={0.08}>
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

                      <p className="text-sm text-muted-foreground mb-6">{model.bestFor}</p>

                      <div className="mb-6">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">{model.priceLabel}</span>
                        <div className="text-3xl font-bold text-foreground">{model.price}</div>
                      </div>

                      <div className="mb-4 flex-1">
                        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Includes</div>
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

        {/* ===== PROJECT CATEGORY ESTIMATOR ===== */}
        <section className="py-24">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Project Estimator</span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">Project Category Pricing</h2>
                <p className="text-muted-foreground text-lg">Starting investment estimates by project type. Final pricing depends on scope and requirements.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl overflow-hidden">
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
              <p className="text-center text-sm text-muted-foreground mt-6 max-w-lg mx-auto">
                * These are starting estimates. Every project receives a detailed fixed-price proposal after discovery.
              </p>
            </FadeIn>
          </Container>
        </section>

        {/* ===== WHAT'S INCLUDED + ADD-ONS ===== */}
        <section className="py-24 bg-muted/30 border-y border-border">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <FadeIn>
                <div className="bg-card border border-border rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-foreground">What&apos;s Included</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">Every project includes these core deliverables at no additional cost.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {includedItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="bg-card border border-border rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-foreground">Optional Add-Ons</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">Extend your project with additional capabilities and integrations.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {addOns.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <ArrowUpRight className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* ===== DEVELOPMENT PROCESS ===== */}
        <section className="py-24">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">How We Build</span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">Development Process</h2>
                <p className="text-muted-foreground text-lg">A proven 8-stage delivery methodology refined across 50+ enterprise projects.</p>
              </div>
            </FadeIn>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-px w-0.5 bg-border" />

              {processSteps.map((s, i) => (
                <FadeIn key={s.step} delay={i * 0.06}>
                  <div className={`relative flex items-start mb-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    {/* Step number */}
                    <div className="absolute left-0 md:left-1/2 w-12 h-12 md:-ml-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20 z-10">
                      {s.step}
                    </div>
                    {/* Content */}
                    <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:pl-0 md:pr-0 md:ml-auto md:mr-[calc(50%+3rem)]" : "md:ml-[calc(50%+3rem)]"}`}>
                      <div className="bg-card border border-border p-6 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all">
                        <h4 className="text-lg font-bold text-foreground mb-2">{s.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* ===== PAYMENT STRUCTURE ===== */}
        <section className="py-24 bg-muted/30 border-y border-border">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Payment</span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">Milestone-Based Billing</h2>
                <p className="text-muted-foreground text-lg">You pay as we deliver. No upfront full payment. No surprises.</p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
              {paymentMilestones.map((m, i) => (
                <StaggerItem key={m.label}>
                  <div className="relative bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all group">
                    {i < paymentMilestones.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border z-10" />
                    )}
                    <div className="text-4xl font-bold text-primary mb-2">{m.pct}</div>
                    <h4 className="font-bold text-foreground mb-2">{m.label}</h4>
                    <p className="text-xs text-muted-foreground">{m.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* ===== SUPPORT PLANS ===== */}
        <section className="py-24">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">After Launch</span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">Support Plans</h2>
                <p className="text-muted-foreground text-lg">We don&apos;t disappear after deployment. Choose the level of ongoing support that fits your needs.</p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {supportPlans.map((plan) => (
                <StaggerItem key={plan.name}>
                  <div className={`relative h-full rounded-2xl border p-8 flex flex-col transition-all hover:shadow-xl ${
                    plan.highlight ? "border-primary bg-primary/[0.03] shadow-lg shadow-primary/5" : "border-border bg-card hover:border-primary/30"
                  }`}>
                    {plan.highlight && (
                      <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full">
                        Recommended
                      </div>
                    )}
                    <h3 className="text-xl font-bold font-heading text-foreground mb-1">{plan.name}</h3>
                    <div className="text-2xl font-bold text-foreground mb-1">{plan.price}</div>
                    <span className="text-xs text-muted-foreground mb-6">{plan.priceNote}</span>
                    <ul className="space-y-3 flex-1">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-24 bg-muted/30 border-y border-border">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">FAQ</span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">Frequently Asked Questions</h2>
                <p className="text-muted-foreground text-lg">Everything you need to know about working with Rudrx AI.</p>
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

        {/* ===== FINAL CTA ===== */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-foreground leading-tight">
                  Ready to Build Your{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI Solution</span>?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
                  Let&apos;s discuss your business goals and create a solution tailored to your organization. Start with a free discovery workshop.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/discovery" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-primary/20">
                    <CreditCard className="w-5 h-5" /> Book Discovery Call
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-full border-2 border-border text-foreground font-bold text-lg hover:border-primary/50 hover:bg-primary/5 transition-all">
                    Request Proposal <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* ===== STICKY CTA ===== */}
        <div className="fixed bottom-6 left-6 z-40 hidden md:block">
          <Link
            href="/discovery"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20 hover:opacity-90 transition-all"
          >
            <Clock className="w-4 h-4" /> Book Free Discovery
          </Link>
        </div>

      </main>
      <Footer />
    </>
  )
}
