"use client"

import { useState } from "react"
import { CaseStudy } from "@/types/case-studies"
import { StaggerContainer, StaggerItem } from "@/components/effects/fade-in"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react"

export function FilterGallery({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [activeFilter, setActiveFilter] = useState<string>("All")
  
  // Extract unique industries for filter buttons
  const industries = ["All", ...Array.from(new Set(caseStudies.map(cs => cs.industry)))]
  
  const filteredStudies = activeFilter === "All" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === activeFilter)

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {industries.map(industry => (
          <button
            key={industry}
            onClick={() => setActiveFilter(industry)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === industry 
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                : "bg-surface border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            {industry}
          </button>
        ))}
      </div>
      
      {/* Grid */}
      <StaggerContainer key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStudies.map(study => (
          <StaggerItem key={study.id}>
            <Link 
              href={`/case-studies/${study.id}`}
              className="group flex flex-col h-full bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Image Header */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image 
                  src={study.image} 
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-2.5 py-1 rounded bg-background/80 backdrop-blur-md text-xs font-semibold text-foreground border border-white/10">
                    {study.industry}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-primary/90 backdrop-blur-md text-xs font-semibold text-primary-foreground">
                    {study.solutionCategory}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-grow">
                  {study.executiveSummary}
                </p>
                
                {/* Micro ROI highlight */}
                <div className="flex gap-4 mb-6 pb-6 border-b border-border/50">
                  {study.roiMetrics.slice(0, 2).map((metric, idx) => (
                    <div key={idx} className="flex-1">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                        {metric.trend === 'up' ? <TrendingUp className="w-3 h-3 text-success" /> : <TrendingDown className="w-3 h-3 text-primary" />}
                        {metric.label}
                      </div>
                      <div className="font-semibold text-foreground">{metric.value}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-sm font-medium text-primary mt-auto">
                  Read Full Story <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}
