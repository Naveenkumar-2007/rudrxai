"use client"

import { authClient } from "@/lib/auth-client"
import { FadeIn } from "@/components/effects/fade-in"
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Building2, 
  Briefcase, 
  CheckSquare, 
  FileText, 
  Receipt, 
  CreditCard, 
  LifeBuoy, 
  PenTool, 
  FolderGit2, 
  Box, 
  Layers, 
  Settings, 
  LogOut, 
  User,
  Activity,
  Menu,
  X,
  Search,
  Bot
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Activity", href: "/admin/activity", icon: Activity },
  { 
    name: "CRM", 
    items: [
      { name: "Leads", href: "/admin/crm/leads", icon: Users },
      { name: "Meetings", href: "/admin/crm/meetings", icon: Calendar },
      { name: "Clients", href: "/admin/crm/clients", icon: Building2 },
    ]
  },
  { 
    name: "Operations", 
    items: [
      { name: "Projects", href: "/admin/projects", icon: Briefcase },
      { name: "Tasks", href: "/admin/tasks", icon: CheckSquare },
      { name: "Proposals", href: "/admin/proposals", icon: FileText },
      { name: "Invoices", href: "/admin/invoices", icon: Receipt },
      { name: "Payments", href: "/admin/payments", icon: CreditCard },
      { name: "AI Concierge", href: "/admin/concierge", icon: Bot },
      { name: "Support", href: "/admin/support", icon: LifeBuoy },
    ]
  },
  { 
    name: "CMS", 
    items: [
      { name: "Blog", href: "/admin/cms/blog", icon: PenTool },
      { name: "Portfolio", href: "/admin/cms/portfolio", icon: FolderGit2 },
      { name: "Products", href: "/admin/cms/products", icon: Box },
      { name: "Solutions", href: "/admin/cms/solutions", icon: Layers },
    ]
  }
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = authClient.useSession()
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSignOut = async () => {
    await authClient.signOut()
    router.push("/auth/login")
  }

  if (isPending) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userRole = (session?.user as any)?.role || "guest"
  
  if (!session || (userRole !== "admin" && userRole !== "sales")) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-4">
        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
          <Settings className="w-8 h-8 text-destructive" />
        </div>
        <h1 className="text-2xl font-bold font-heading mb-2">Access Denied</h1>
        <p className="text-muted-foreground mb-8">You do not have permission to access the admin portal.</p>
        <Link href="/" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
          Return Home
        </Link>
      </div>
    )
  }

  const Sidebar = () => (
    <div className="flex flex-col h-full bg-card/30 backdrop-blur-xl border-r border-border">
      {/* Brand */}
      <div className="p-6">
        <Link href="/admin/dashboard" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
            <span className="font-bold text-primary text-lg">K</span>
          </div>
          <span className="font-heading font-bold text-lg tracking-tight">Rudrx OS</span>
        </Link>
      </div>

      {/* Global Search */}
      <div className="px-4 mb-6">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search OS... (Cmd+K)" 
            className="w-full bg-background/50 border border-border rounded-lg pl-9 pr-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide px-3 pb-6">
        <div className="space-y-6">
          {/* Top Level */}
          <div className="space-y-1">
            {navigation.filter(item => !item.items).map((item) => {
              const Icon = item.icon!
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
              return (
                <Link
                  key={item.name}
                  href={item.href!}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:bg-background hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" /> {item.name}
                </Link>
              )
            })}
          </div>

          {/* Grouped */}
          {navigation.filter(item => item.items).map((group) => (
            <div key={group.name} className="space-y-2">
              <div className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {group.name}
              </div>
              <div className="space-y-1">
                {group.items?.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive 
                          ? "bg-primary/10 text-primary" 
                          : "text-muted-foreground hover:bg-background hover:text-foreground"
                      }`}
                    >
                      <Icon className="w-4 h-4" /> {item.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Area */}
      <div className="p-4 border-t border-border bg-background/50">
        <div className="flex flex-col gap-2">
          <Link 
            href="/admin/settings"
            className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-background hover:text-foreground transition-colors"
          >
            <Settings className="w-4 h-4" /> Settings
          </Link>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors text-left"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
          
          <div className="mt-2 pt-2 border-t border-border flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <User className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-foreground truncate">{session.user.name}</div>
              <div className="text-xs text-muted-foreground capitalize truncate">{userRole}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground flex overflow-hidden selection:bg-primary/30">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 h-screen sticky top-0">
        <Sidebar />
      </aside>

      {/* Mobile Header & Menu */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="font-bold text-primary text-lg">K</span>
            </div>
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -mr-2 text-muted-foreground hover:text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed inset-0 z-40 lg:hidden bg-background pt-16"
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto pt-16 lg:pt-0 bg-[#0A0A0A]">
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <FadeIn>
            {children}
          </FadeIn>
        </div>
      </main>
    </div>
  )
}
