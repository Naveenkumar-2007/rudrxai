"use client"

import { useState } from "react"
import { Plus, LayoutGrid, List, CheckCircle2, Circle, Clock, MoreHorizontal, Briefcase, Filter } from "lucide-react"

// Mock Data
const projects = [
  { id: "1", name: "GlobalTech Architecture", client: "GlobalTech", status: "Active", progress: 65, tasks: 24, completed: 15 },
  { id: "2", name: "HealthFirst AI Agent", client: "HealthFirst", status: "Planning", progress: 15, tasks: 42, completed: 6 },
  { id: "3", name: "Acme Corp RAG System", client: "Acme Corp", status: "Active", progress: 85, tasks: 18, completed: 15 },
  { id: "4", name: "FinServe Migration", client: "FinServe", status: "Completed", progress: 100, tasks: 56, completed: 56 },
]

const recentTasks = [
  { id: "101", title: "Finalize system architecture document", project: "GlobalTech Architecture", priority: "High", status: "Todo", assignee: "NS" },
  { id: "102", title: "Deploy vector database cluster", project: "Acme Corp RAG System", priority: "Urgent", status: "In Progress", assignee: "NS" },
  { id: "103", title: "Review security compliance checklist", project: "HealthFirst AI Agent", priority: "Medium", status: "Todo", assignee: "Unassigned" },
  { id: "104", title: "Setup staging environment", project: "GlobalTech Architecture", priority: "Low", status: "Done", assignee: "NS" },
]

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")
  
  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-foreground mb-1">Projects</h1>
          <p className="text-muted-foreground">Manage client implementations and task tracking.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-background border border-border rounded-lg p-1">
            <button 
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded-md transition-colors ${viewMode === "list" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              <List className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded-md transition-colors ${viewMode === "grid" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" /> New Project
          </button>
        </div>
      </div>
      
      {/* Active Projects Overview */}
      <div>
        <h2 className="text-lg font-bold font-heading text-foreground mb-4">Active Projects</h2>
        
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {projects.filter(p => p.status !== "Completed").map(project => (
              <div key={project.id} className="bg-card/30 backdrop-blur-xl border border-border p-5 rounded-2xl group hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{project.name}</h3>
                      <p className="text-xs text-muted-foreground">{project.client}</p>
                    </div>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-foreground">Progress</span>
                    <span className="text-primary">{project.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <CheckSquare className="w-3.5 h-3.5" />
                    {project.completed}/{project.tasks} tasks
                  </span>
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded ${
                    project.status === "Active" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card/30 backdrop-blur-xl border border-border rounded-2xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-background/50 border-b border-border text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="px-6 py-3 font-semibold">Project Name</th>
                  <th className="px-6 py-3 font-semibold">Client</th>
                  <th className="px-6 py-3 font-semibold">Status</th>
                  <th className="px-6 py-3 font-semibold">Progress</th>
                  <th className="px-6 py-3 font-semibold">Tasks</th>
                  <th className="px-6 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {projects.map(project => (
                  <tr key={project.id} className="hover:bg-muted/50 transition-colors cursor-pointer group">
                    <td className="px-6 py-4 font-medium text-foreground">{project.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{project.client}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded ${
                        project.status === "Active" ? "bg-success/10 text-success" : 
                        project.status === "Completed" ? "bg-primary/10 text-primary" : 
                        "bg-warning/10 text-warning"
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-1.5 w-16 bg-border rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground w-6">{project.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-xs">{project.completed}/{project.tasks}</td>
                    <td className="px-6 py-4 text-right text-muted-foreground">
                      <button className="opacity-0 group-hover:opacity-100 hover:text-foreground transition-all">
                        <MoreHorizontal className="w-4 h-4 ml-auto" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Task List (Linear Style) */}
      <div className="pt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold font-heading text-foreground">My Tasks</h2>
          <div className="flex items-center gap-2">
            <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg bg-background">
              <Filter className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-background border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              <Plus className="w-3.5 h-3.5" /> Task
            </button>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl flex flex-col overflow-hidden">
          {recentTasks.map((task, i) => (
            <div 
              key={task.id} 
              className={`flex items-center gap-3 px-4 py-3 hover:bg-muted/50 cursor-pointer transition-colors ${
                i !== recentTasks.length - 1 ? "border-b border-border/50" : ""
              }`}
            >
              <button className="text-muted-foreground hover:text-primary transition-colors shrink-0">
                {task.status === "Done" ? (
                  <CheckCircle2 className="w-5 h-5 text-success" />
                ) : task.status === "In Progress" ? (
                  <Clock className="w-5 h-5 text-warning" />
                ) : (
                  <Circle className="w-5 h-5" />
                )}
              </button>
              
              <div className="flex-1 min-w-0 flex items-center gap-3">
                <span className={`text-sm font-medium truncate ${task.status === "Done" ? "text-muted-foreground line-through" : "text-foreground"}`}>
                  {task.title}
                </span>
                <span className="hidden sm:inline-block text-xs text-muted-foreground px-2 py-0.5 bg-card border border-border rounded-full shrink-0">
                  {task.project}
                </span>
              </div>
              
              <div className="flex items-center gap-3 shrink-0">
                <span className={`hidden sm:inline-block text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded ${
                  task.priority === "Urgent" ? "bg-destructive/10 text-destructive" :
                  task.priority === "High" ? "bg-warning/10 text-warning" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {task.priority}
                </span>
                
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary border border-primary/30">
                  {task.assignee}
                </div>
              </div>
            </div>
          ))}
          
          <div className="px-4 py-3 text-sm text-muted-foreground flex items-center gap-2 hover:bg-muted/50 cursor-pointer transition-colors group">
            <Plus className="w-4 h-4 opacity-50 group-hover:opacity-100" />
            <span className="opacity-50 group-hover:opacity-100">Add a new task...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function CheckSquare({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="9 11 12 14 22 4"></polyline>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
    </svg>
  )
}
