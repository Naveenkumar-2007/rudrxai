import { 
  DollarSign, 
  Users, 
  ArrowUpRight, 
  ArrowDownRight,
  Briefcase,
  Target
} from "lucide-react"

const metrics = [
  {
    name: "Total Revenue",
    value: "$124,500",
    change: "+14.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    name: "Active Projects",
    value: "12",
    change: "+2",
    trend: "up",
    icon: Briefcase,
  },
  {
    name: "New Leads",
    value: "84",
    change: "-5.2%",
    trend: "down",
    icon: Users,
  },
  {
    name: "Conversion Rate",
    value: "24.8%",
    change: "+2.4%",
    trend: "up",
    icon: Target,
  },
]

const recentActivity = [
  { id: 1, type: "lead", title: "New Enterprise Lead: Acme Corp", time: "2 hours ago", status: "high" },
  { id: 2, type: "project", title: "Project Alpha deployment successful", time: "5 hours ago", status: "success" },
  { id: 3, type: "meeting", title: "Discovery Call with TechCorp", time: "1 day ago", status: "normal" },
  { id: 4, type: "invoice", title: "Invoice #INV-2024-001 paid", time: "2 days ago", status: "success" },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-foreground mb-1">Executive Overview</h1>
          <p className="text-muted-foreground">Welcome back. Here&apos;s what&apos;s happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium hover:bg-border/50 transition-colors">
            Download Report
          </button>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            New Lead
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.name} className="bg-card/30 backdrop-blur-xl border border-border p-6 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <metric.icon className="w-5 h-5" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                metric.trend === "up" ? "text-success" : "text-destructive"
              }`}>
                {metric.trend === "up" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {metric.change}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.name}</div>
            </div>
            
            {/* Decorative background glow */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Revenue Chart Placeholder */}
          <div className="bg-card/30 backdrop-blur-xl border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold font-heading text-foreground">Revenue Growth</h2>
              <select className="bg-background border border-border rounded-lg px-3 py-1.5 text-sm outline-none focus:border-primary">
                <option>Last 12 Months</option>
                <option>Last 6 Months</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="h-[300px] w-full flex items-end gap-2">
              {/* Mock Bar Chart */}
              {[40, 60, 45, 70, 65, 80, 75, 90, 85, 100, 95, 110].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end group">
                  <div 
                    className="w-full bg-primary/20 rounded-t-sm group-hover:bg-primary/40 transition-colors relative"
                    style={{ height: `${height}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background border border-border px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      ${height}k
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          {/* Recent Activity */}
          <div className="bg-card/30 backdrop-blur-xl border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold font-heading text-foreground">Recent Activity</h2>
              <button className="text-sm text-primary hover:underline">View All</button>
            </div>
            <div className="space-y-6">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex gap-4">
                  <div className="relative mt-1">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === "high" ? "bg-primary" :
                      activity.status === "success" ? "bg-success" : "bg-muted-foreground"
                    }`} />
                    <div className="absolute top-3 bottom-[-20px] left-1/2 w-[1px] bg-border -translate-x-1/2 last:hidden" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{activity.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Upcoming Meetings */}
          <div className="bg-card/30 backdrop-blur-xl border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold font-heading text-foreground">Upcoming</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-background/50 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex flex-col items-center justify-center text-primary leading-tight">
                    <span className="text-xs font-bold">JUL</span>
                    <span className="text-sm font-black">12</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Project Alpha Kickoff</p>
                    <p className="text-xs text-muted-foreground">10:00 AM • Google Meet</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-background/50 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex flex-col items-center justify-center text-primary leading-tight">
                    <span className="text-xs font-bold">JUL</span>
                    <span className="text-sm font-black">14</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Discovery: GlobalTech</p>
                    <p className="text-xs text-muted-foreground">2:30 PM • Zoom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
