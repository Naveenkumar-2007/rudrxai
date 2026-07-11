"use client"

import { authClient } from "@/lib/auth-client"
import { FadeIn } from "@/components/effects/fade-in"
import { User, ShieldCheck, LogOut, LayoutDashboard } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  
  // Using better-auth hooks for client side
  const { data: session, isPending } = authClient.useSession()

  const handleLogout = async () => {
    await authClient.signOut()
    router.push("/auth/login")
  }

  if (isPending) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>
  }

  const navItems = [
    { name: "Profile", href: "/settings/profile", icon: User },
    { name: "Security", href: "/settings/security", icon: ShieldCheck },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-surface border-r border-border flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <span className="font-heading font-bold tracking-wider">RUDRX<span className="text-primary">PORTAL</span></span>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-heading">
              {session?.user.name?.charAt(0).toUpperCase() || "U"}
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">{session?.user.name}</div>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <div className="text-xs text-muted-foreground capitalize">{((session?.user as any)?.role as string) || "Guest"}</div>
            </div>
          </div>

          <nav className="space-y-1">
            <Link 
              href="/dashboard" 
              className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-background hover:text-foreground rounded-lg transition-colors"
            >
              <LayoutDashboard className="w-4 h-4" /> Dashboard
            </Link>
            
            <div className="pt-4 pb-2">
              <span className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Settings</span>
            </div>
            
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
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
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-border">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8 md:p-12">
          <FadeIn>
            {children}
          </FadeIn>
        </div>
      </main>
    </div>
  )
}
