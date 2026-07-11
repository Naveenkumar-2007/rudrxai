"use client"

import { useState, useEffect } from "react"
import { authClient } from "@/lib/auth-client"
import { Loader2, Monitor, Globe } from "lucide-react"

export default function SecurityPage() {
  const { data: session } = authClient.useSession()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [sessions, setSessions] = useState<any[]>([])
  
  useEffect(() => {
    async function fetchSessions() {
      const { data } = await authClient.listSessions()
      if (data) setSessions(data)
    }
    fetchSessions()
  }, [])
  
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: "", text: "" })

    const { error } = await authClient.changePassword({
      newPassword,
      currentPassword,
      revokeOtherSessions: true,
    })

    if (error) {
      setMessage({ type: "error", text: error.message || "Failed to change password" })
    } else {
      setMessage({ type: "success", text: "Password changed successfully. Other sessions revoked." })
      setCurrentPassword("")
      setNewPassword("")
    }
    setLoading(false)
  }

  const handleRevoke = async (token: string) => {
    await authClient.revokeSession({ token })
    // Refresh sessions list internally handled by better-auth hooks usually,
    // or trigger a router.refresh() if needed
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-heading text-foreground mb-2">Security</h1>
        <p className="text-muted-foreground text-sm">Manage your password and active sessions.</p>
      </div>

      {message.text && (
        <div className={`mb-6 p-4 rounded-lg text-sm font-medium ${message.type === "error" ? "bg-destructive/10 text-destructive border border-destructive/20" : "bg-success/10 text-success border border-success/20"}`}>
          {message.text}
        </div>
      )}

      {/* Password Change */}
      <div className="bg-surface border border-border p-8 rounded-2xl mb-8">
        <h3 className="font-semibold text-foreground mb-6">Change Password</h3>
        <form onSubmit={handlePasswordChange} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Current Password</label>
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <p className="text-xs text-muted-foreground mt-2">Must be at least 8 characters long.</p>
          </div>
          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              disabled={loading || !currentPassword || !newPassword}
              className="flex items-center justify-center bg-primary text-primary-foreground rounded-lg px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              Update Password
            </button>
          </div>
        </form>
      </div>

      {/* Active Sessions */}
      <div className="bg-surface border border-border rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-border bg-background/50">
          <h3 className="font-semibold text-foreground">Active Sessions</h3>
          <p className="text-sm text-muted-foreground">Devices currently logged in to your account.</p>
        </div>
        <div className="divide-y divide-border">
          {sessions?.map((s) => (
            <div key={s.id} className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center">
                  <Monitor className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground flex items-center gap-2">
                    {s.userAgent?.includes("Mac") ? "Mac OS" : s.userAgent?.includes("Windows") ? "Windows" : "Unknown Device"}
                    {s.token === session?.session.token && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">CURRENT</span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Globe className="w-3 h-3" /> {s.ipAddress || "Unknown IP"} • Last active recently
                  </div>
                </div>
              </div>
              
              {s.token !== session?.session.token && (
                <button 
                  onClick={() => handleRevoke(s.token)}
                  className="text-sm font-medium text-destructive hover:bg-destructive/10 px-3 py-1.5 rounded transition-colors"
                >
                  Revoke
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
