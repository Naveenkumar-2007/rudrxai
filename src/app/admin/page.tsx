"use client"

import { useState } from "react"
import { mockLeads } from "@/data/engagement"
import { CRMStatus } from "@/types/engagement"
import { Users, DollarSign, BrainCircuit, Activity, Clock, Filter, Search, ChevronRight } from "lucide-react"

const statusColors: Record<CRMStatus, string> = {
  "New Lead": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "Qualified": "bg-primary/10 text-primary border-primary/20",
  "Meeting Scheduled": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  "Proposal Sent": "bg-orange-500/10 text-orange-500 border-orange-500/20",
  "Negotiation": "bg-purple-500/10 text-purple-500 border-purple-500/20",
  "Won": "bg-green-500/10 text-green-500 border-green-500/20",
  "Lost": "bg-red-500/10 text-red-500 border-red-500/20",
  "Customer": "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
}

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLeads = mockLeads.filter(l => 
    l.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.industry.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-border flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <span className="font-heading font-bold text-lg tracking-wider">RUDRX<span className="text-primary">ADMIN</span></span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg">
            <Activity className="w-4 h-4" /> CRM Dashboard
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-background hover:text-foreground rounded-lg transition-colors">
            <Users className="w-4 h-4" /> Leads & Contacts
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-background hover:text-foreground rounded-lg transition-colors">
            <DollarSign className="w-4 h-4" /> Proposals
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-background hover:text-foreground rounded-lg transition-colors">
            <BrainCircuit className="w-4 h-4" /> AI Analytics
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center justify-between px-8 border-b border-border bg-background">
          <h1 className="text-lg font-bold font-heading">Pipeline Overview</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search leads..." 
                className="pl-9 pr-4 py-1.5 bg-surface border border-border rounded-md text-sm focus:outline-none focus:border-primary transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
              FD
            </div>
          </div>
        </header>

        <div className="p-8 flex-1 overflow-y-auto">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Active Leads</span>
                <Users className="w-4 h-4 text-primary" />
              </div>
              <div className="text-3xl font-bold font-heading">124</div>
              <div className="text-xs text-success mt-2 font-medium">+12% from last week</div>
            </div>
            
            <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Pipeline Value</span>
                <DollarSign className="w-4 h-4 text-primary" />
              </div>
              <div className="text-3xl font-bold font-heading">$1.2M</div>
              <div className="text-xs text-success mt-2 font-medium">4 active proposals</div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Meetings Today</span>
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div className="text-3xl font-bold font-heading">3</div>
              <div className="text-xs text-muted-foreground mt-2 font-medium">Next at 2:00 PM EST</div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Avg. AI Score</span>
                <BrainCircuit className="w-4 h-4 text-primary" />
              </div>
              <div className="text-3xl font-bold font-heading">88/100</div>
              <div className="text-xs text-muted-foreground mt-2 font-medium">High qualification rate</div>
            </div>
          </div>

          {/* CRM Table */}
          <div className="bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-background/50">
              <h2 className="font-bold font-heading">Recent Enterprise Leads</h2>
              <button className="text-sm flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Filter className="w-4 h-4" /> Filter
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-background border-b border-border">
                  <tr>
                    <th className="px-6 py-4 font-medium">Company</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Budget</th>
                    <th className="px-6 py-4 font-medium">AI Score</th>
                    <th className="px-6 py-4 font-medium">Suggested Model</th>
                    <th className="px-6 py-4 font-medium"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-background/50 transition-colors group cursor-pointer">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-foreground">{lead.companyName}</div>
                        <div className="text-xs text-muted-foreground">{lead.industry} • {lead.companySize} emp</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusColors[lead.status]}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-medium text-muted-foreground">
                        {lead.budgetRange}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-background rounded-full h-1.5 max-w-[60px] border border-border overflow-hidden">
                            <div className="bg-primary h-1.5 rounded-full" style={{ width: `${lead.aiScore}%` }}></div>
                          </div>
                          <span className="text-xs font-bold">{lead.aiScore}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs text-foreground font-medium border border-border bg-background px-2 py-1 rounded">
                          {lead.suggestedModel}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
