"use client"

import { useState } from "react"
import { Search, Plus, Filter, FileText, MoreHorizontal, Send, Eye, CheckCircle2, XCircle } from "lucide-react"

// Mock Data
const proposals = [
  { id: "PROP-24-001", client: "GlobalTech", title: "Enterprise Architecture & AI Agents", value: "$125,000", status: "Sent", date: "Jul 10, 2026", validUntil: "Aug 10, 2026" },
  { id: "PROP-24-002", client: "HealthFirst", title: "Voice AI Integration MVP", value: "$45,000", status: "Draft", date: "Jul 11, 2026", validUntil: "Aug 11, 2026" },
  { id: "PROP-24-003", client: "Acme Corp", title: "Custom RAG Deployment", value: "$85,000", status: "Accepted", date: "Jul 05, 2026", validUntil: "Aug 05, 2026" },
  { id: "PROP-24-004", client: "FinServe", title: "Data Analytics Platform", value: "$150,000", status: "Viewed", date: "Jul 08, 2026", validUntil: "Aug 08, 2026" },
  { id: "PROP-24-005", client: "RetailPlus", title: "E-commerce Automation", value: "$30,000", status: "Rejected", date: "Jun 20, 2026", validUntil: "Jul 20, 2026" },
]

export default function ProposalsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-foreground mb-1">Proposals</h1>
          <p className="text-muted-foreground">Manage sent proposals, drafts, and client contracts.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search proposals..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 bg-background border border-border rounded-lg pl-9 pr-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          <button className="p-2 bg-background border border-border rounded-lg text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" /> New Proposal
          </button>
        </div>
      </div>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Pending Value", value: "$270,000", count: "3 proposals" },
          { label: "Drafts", value: "1", count: "$45,000 total" },
          { label: "Accepted (This Month)", value: "2", count: "$135,000 total" },
          { label: "Close Rate", value: "68%", count: "+5% vs last month" },
        ].map((stat, i) => (
          <div key={i} className="bg-card/30 backdrop-blur-xl border border-border p-5 rounded-2xl">
            <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
            <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.count}</div>
          </div>
        ))}
      </div>

      {/* Proposals List */}
      <div className="bg-card/30 backdrop-blur-xl border border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-background/50 border-b border-border text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-semibold">Proposal</th>
                <th className="px-6 py-4 font-semibold">Client</th>
                <th className="px-6 py-4 font-semibold">Value</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold hidden md:table-cell">Sent Date</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {proposals.map(proposal => (
                <tr key={proposal.id} className="hover:bg-muted/50 transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{proposal.title}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{proposal.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-foreground">{proposal.client}</td>
                  <td className="px-6 py-4 font-medium text-foreground">{proposal.value}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {proposal.status === "Sent" && <Send className="w-3.5 h-3.5 text-primary" />}
                      {proposal.status === "Viewed" && <Eye className="w-3.5 h-3.5 text-primary" />}
                      {proposal.status === "Draft" && <FileText className="w-3.5 h-3.5 text-muted-foreground" />}
                      {proposal.status === "Accepted" && <CheckCircle2 className="w-3.5 h-3.5 text-success" />}
                      {proposal.status === "Rejected" && <XCircle className="w-3.5 h-3.5 text-destructive" />}
                      
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded ${
                        proposal.status === "Accepted" ? "bg-success/10 text-success" : 
                        proposal.status === "Rejected" ? "bg-destructive/10 text-destructive" :
                        proposal.status === "Draft" ? "bg-muted text-muted-foreground" :
                        "bg-primary/10 text-primary"
                      }`}>
                        {proposal.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">
                    <div className="text-sm text-foreground">{proposal.date}</div>
                    <div className="text-xs text-muted-foreground">Valid til {proposal.validUntil}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-all">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
