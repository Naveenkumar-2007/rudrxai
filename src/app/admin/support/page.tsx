"use client"

import { useState } from "react"
import { Search, Plus, Filter, MessageSquare, MoreHorizontal, AlertCircle, CheckCircle2, Clock } from "lucide-react"

// Mock Data
const tickets = [
  { id: "T-1042", subject: "API Rate Limit Exceeded", client: "Acme Corp", status: "Open", priority: "High", time: "2 hours ago" },
  { id: "T-1041", subject: "New AI Agent Training Data", client: "GlobalTech", status: "In Progress", priority: "Normal", time: "5 hours ago" },
  { id: "T-1040", subject: "Dashboard Analytics Not Loading", client: "HealthFirst", status: "Waiting on Customer", priority: "Urgent", time: "1 day ago" },
  { id: "T-1039", subject: "Invoice Query #INV-2026-042", client: "GlobalTech", status: "Resolved", priority: "Low", time: "2 days ago" },
]

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-foreground mb-1">Support Tickets</h1>
          <p className="text-muted-foreground">Manage client requests, bugs, and technical support.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search tickets..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 bg-background border border-border rounded-lg pl-9 pr-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          <button className="p-2 bg-background border border-border rounded-lg text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" /> New Ticket
          </button>
        </div>
      </div>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Open Tickets", value: "12", highlight: true },
          { label: "Unassigned", value: "4", highlight: true },
          { label: "Avg Resolution Time", value: "3.2 hrs", highlight: false },
          { label: "CSAT Score", value: "4.8/5.0", highlight: false },
        ].map((stat, i) => (
          <div key={i} className="bg-card/30 backdrop-blur-xl border border-border p-5 rounded-2xl relative overflow-hidden">
            <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
            <div className={`text-2xl font-bold mb-1 ${stat.highlight ? "text-primary" : "text-foreground"}`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Tickets List */}
      <div className="bg-card/30 backdrop-blur-xl border border-border rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border flex gap-4 overflow-x-auto scrollbar-hide">
          {["All Tickets", "Unassigned", "My Tickets", "Resolved"].map((tab, i) => (
            <button key={tab} className={`text-sm font-medium whitespace-nowrap px-1 pb-2 border-b-2 transition-colors ${
              i === 0 ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}>
              {tab}
            </button>
          ))}
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-background/50 border-b border-border text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-semibold">Subject</th>
                <th className="px-6 py-4 font-semibold">Client</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Priority</th>
                <th className="px-6 py-4 font-semibold hidden sm:table-cell">Last Updated</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {tickets.map(ticket => (
                <tr key={ticket.id} className="hover:bg-muted/50 transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground max-w-[200px] sm:max-w-[300px] truncate">{ticket.subject}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{ticket.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{ticket.client}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-xs font-medium">
                      {ticket.status === "Open" && <AlertCircle className="w-3.5 h-3.5 text-warning" />}
                      {ticket.status === "In Progress" && <Clock className="w-3.5 h-3.5 text-primary" />}
                      {ticket.status === "Resolved" && <CheckCircle2 className="w-3.5 h-3.5 text-success" />}
                      {ticket.status === "Waiting on Customer" && <Clock className="w-3.5 h-3.5 text-muted-foreground" />}
                      <span className={ticket.status === "Open" ? "text-warning" : ticket.status === "In Progress" ? "text-primary" : ticket.status === "Resolved" ? "text-success" : "text-muted-foreground"}>
                        {ticket.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded ${
                      ticket.priority === "Urgent" ? "bg-destructive/10 text-destructive" :
                      ticket.priority === "High" ? "bg-warning/10 text-warning" :
                      ticket.priority === "Normal" ? "bg-primary/10 text-primary" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground hidden sm:table-cell">{ticket.time}</td>
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
