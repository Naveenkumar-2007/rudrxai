"use client"

import { useState } from "react"
import { Search, Plus, Filter, FileEdit, Trash2, Eye } from "lucide-react"

// Mock Data
const blogPosts = [
  { id: "1", title: "Enterprise RAG Architecture Guide", author: "Dr. Alan Grant", status: "Published", date: "Jul 10, 2026", views: "1.2k" },
  { id: "2", title: "The Future of Voice AI in Healthcare", author: "Sarah Jenkins", status: "Draft", date: "Jul 12, 2026", views: "-" },
  { id: "3", title: "Automating Contract Extraction", author: "John Smith", status: "Published", date: "Jul 05, 2026", views: "854" },
  { id: "4", title: "Building Multi-Agent Systems", author: "Dr. Alan Grant", status: "Archived", date: "Jun 20, 2026", views: "3.4k" },
]

export default function BlogCMSPage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-foreground mb-1">Blog CMS</h1>
          <p className="text-muted-foreground">Manage and publish articles to the knowledge hub.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 bg-background border border-border rounded-lg pl-9 pr-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          <button className="p-2 bg-background border border-border rounded-lg text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" /> New Article
          </button>
        </div>
      </div>
      
      {/* Articles List */}
      <div className="bg-card/30 backdrop-blur-xl border border-border rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border flex gap-4 overflow-x-auto scrollbar-hide">
          {["All Posts", "Published", "Drafts", "Archived"].map((tab, i) => (
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
                <th className="px-6 py-4 font-semibold">Title</th>
                <th className="px-6 py-4 font-semibold">Author</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold hidden md:table-cell">Date</th>
                <th className="px-6 py-4 font-semibold hidden sm:table-cell">Views</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {blogPosts.map(post => (
                <tr key={post.id} className="hover:bg-muted/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground max-w-[300px] truncate">{post.title}</div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{post.author}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded ${
                      post.status === "Published" ? "bg-success/10 text-success" : 
                      post.status === "Draft" ? "bg-muted text-muted-foreground" :
                      "bg-destructive/10 text-destructive"
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">{post.date}</td>
                  <td className="px-6 py-4 text-muted-foreground hidden sm:table-cell">{post.views}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                        <FileEdit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-4 h-4" />
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
