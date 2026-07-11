"use client"

import { useState } from "react"
import { Search, Plus, Filter, Receipt, MoreHorizontal, Download, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react"

// Mock Data
const invoices = [
  { id: "INV-2026-042", client: "GlobalTech", amount: "$35,000.00", status: "Paid", issueDate: "Jul 01, 2026", dueDate: "Jul 15, 2026" },
  { id: "INV-2026-043", client: "Acme Corp", amount: "$15,500.00", status: "Pending", issueDate: "Jul 08, 2026", dueDate: "Jul 22, 2026" },
  { id: "INV-2026-044", client: "HealthFirst", amount: "$12,000.00", status: "Overdue", issueDate: "Jun 15, 2026", dueDate: "Jun 29, 2026" },
  { id: "INV-2026-045", client: "FinServe", amount: "$45,000.00", status: "Draft", issueDate: "Jul 11, 2026", dueDate: "Jul 25, 2026" },
]

export default function InvoicesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-foreground mb-1">Invoices</h1>
          <p className="text-muted-foreground">Manage billing, collections, and revenue.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search invoices..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 bg-background border border-border rounded-lg pl-9 pr-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          <button className="p-2 bg-background border border-border rounded-lg text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" /> Create Invoice
          </button>
        </div>
      </div>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Collected (YTD)", value: "$450,200", trend: "+12.5%", isPositive: true },
          { label: "Outstanding", value: "$60,500", trend: "3 invoices", isPositive: true },
          { label: "Overdue", value: "$12,000", trend: "1 invoice", isPositive: false },
          { label: "Avg Time to Pay", value: "14 days", trend: "-2 days", isPositive: true },
        ].map((stat, i) => (
          <div key={i} className="bg-card/30 backdrop-blur-xl border border-border p-5 rounded-2xl relative overflow-hidden group">
            <div className="flex justify-between items-start mb-2">
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              <div className={`flex items-center gap-1 text-xs font-medium ${
                stat.isPositive ? "text-success" : "text-destructive"
              }`}>
                {stat.trend.includes("%") || stat.trend.includes("days") ? (
                  stat.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />
                ) : null}
                {stat.trend}
              </div>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
            
            {/* Decorative background glow */}
            <div className={`absolute -bottom-6 -right-6 w-24 h-24 blur-3xl rounded-full transition-colors ${
              stat.isPositive ? "bg-success/5 group-hover:bg-success/10" : "bg-destructive/5 group-hover:bg-destructive/10"
            }`} />
          </div>
        ))}
      </div>

      {/* Invoices List */}
      <div className="bg-card/30 backdrop-blur-xl border border-border rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border flex gap-4 overflow-x-auto scrollbar-hide">
          {["All Invoices", "Pending", "Paid", "Overdue", "Drafts"].map((tab, i) => (
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
                <th className="px-6 py-4 font-semibold">Invoice</th>
                <th className="px-6 py-4 font-semibold">Client</th>
                <th className="px-6 py-4 font-semibold">Amount</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold hidden md:table-cell">Due Date</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {invoices.map(invoice => (
                <tr key={invoice.id} className="hover:bg-muted/50 transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors shrink-0">
                        <Receipt className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{invoice.id}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{invoice.issueDate}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-foreground">{invoice.client}</td>
                  <td className="px-6 py-4 font-medium text-foreground">{invoice.amount}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {invoice.status === "Overdue" && <Clock className="w-3.5 h-3.5 text-destructive" />}
                      
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded ${
                        invoice.status === "Paid" ? "bg-success/10 text-success" : 
                        invoice.status === "Overdue" ? "bg-destructive/10 text-destructive" :
                        invoice.status === "Draft" ? "bg-muted text-muted-foreground" :
                        "bg-primary/10 text-primary"
                      }`}>
                        {invoice.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">
                    <div className={`text-sm ${invoice.status === "Overdue" ? "text-destructive font-medium" : "text-foreground"}`}>
                      {invoice.dueDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
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
