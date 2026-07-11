"use client"

import { useState } from "react"
import { Plus, Search, Filter, MoreHorizontal, MessageSquare, Calendar, Building2 } from "lucide-react"

const stages = [
  "New Lead",
  "Qualified",
  "Discovery",
  "Proposal",
  "Negotiation",
  "Won",
  "Lost"
]

// Mock data
const initialLeads = [
  {
    id: "1",
    company: "Acme Corp",
    contact: "John Smith",
    stage: "New Lead",
    value: "$45k",
    lastActivity: "2h ago",
    tags: ["Enterprise", "AI Agent"]
  },
  {
    id: "2",
    company: "TechGlobal",
    contact: "Sarah Jenkins",
    stage: "Discovery",
    value: "$120k",
    lastActivity: "1d ago",
    tags: ["RAG", "Data"]
  },
  {
    id: "3",
    company: "HealthFirst",
    contact: "Dr. Alan Grant",
    stage: "Proposal",
    value: "$80k",
    lastActivity: "3h ago",
    tags: ["Healthcare", "Voice AI"]
  }
]

export default function CRMLeadsPage() {
  const [leads] = useState(initialLeads)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold font-heading text-foreground mb-1">Sales Pipeline</h1>
          <p className="text-muted-foreground">Manage and track your enterprise leads.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search leads..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 bg-background border border-border rounded-lg pl-9 pr-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          <button className="p-2 bg-background border border-border rounded-lg text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" /> New Lead
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-6 min-w-max h-full">
          {stages.map((stage) => {
            const stageLeads = leads.filter(l => l.stage === stage && (l.company.toLowerCase().includes(searchQuery.toLowerCase()) || l.contact.toLowerCase().includes(searchQuery.toLowerCase())))
            
            return (
              <div key={stage} className="flex flex-col w-80 shrink-0">
                {/* Stage Header */}
                <div className="flex items-center justify-between mb-4 px-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm text-foreground">{stage}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-border text-xs font-medium text-muted-foreground">
                      {stageLeads.length}
                    </span>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Stage Column */}
                <div className="flex-1 flex flex-col gap-3 min-h-[200px] rounded-xl bg-card/10 border border-border/50 p-2">
                  {stageLeads.map(lead => (
                    <div 
                      key={lead.id} 
                      className="bg-background border border-border rounded-lg p-4 cursor-grab active:cursor-grabbing hover:border-primary/50 transition-colors group"
                      draggable
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          <Building2 className="w-3 h-3" />
                          {lead.value}
                        </div>
                        <button className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <h4 className="font-bold text-foreground mb-1">{lead.company}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{lead.contact}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {lead.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-border/50 text-muted-foreground rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-border/50 text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 hover:text-foreground cursor-pointer transition-colors"><MessageSquare className="w-3 h-3" /> 2</span>
                          <span className="flex items-center gap-1 hover:text-foreground cursor-pointer transition-colors"><Calendar className="w-3 h-3" /></span>
                        </div>
                        <span>{lead.lastActivity}</span>
                      </div>
                    </div>
                  ))}
                  
                  {stageLeads.length === 0 && (
                    <div className="flex-1 flex items-center justify-center border-2 border-dashed border-border rounded-lg m-1">
                      <span className="text-xs text-muted-foreground">Drop here</span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
