"use client"

import { useState, useEffect } from "react"
import { authClient } from "@/lib/auth-client"
import { Loader2 } from "lucide-react"

export default function ProfilePage() {
  const { data: session } = authClient.useSession()
  
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  useEffect(() => {
    if (session?.user?.name) {
      setName(session.user.name)
    }
  }, [session])

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: "", text: "" })

    const { error } = await authClient.updateUser({
      name,
    })

    if (error) {
      setMessage({ type: "error", text: error.message || "Failed to update profile" })
    } else {
      setMessage({ type: "success", text: "Profile updated successfully" })
    }
    setLoading(false)
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-heading text-foreground mb-2">Profile Settings</h1>
        <p className="text-muted-foreground text-sm">Manage your personal information and preferences.</p>
      </div>

      {message.text && (
        <div className={`mb-6 p-4 rounded-lg text-sm font-medium ${message.type === "error" ? "bg-destructive/10 text-destructive border border-destructive/20" : "bg-success/10 text-success border border-success/20"}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleUpdate} className="space-y-6 bg-surface border border-border p-8 rounded-2xl">
        
        <div className="flex items-center gap-6 pb-6 border-b border-border">
          <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-heading text-2xl">
            {name ? name.charAt(0).toUpperCase() : "U"}
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-1">Profile Photo</h3>
            <p className="text-xs text-muted-foreground mb-3">JPG, GIF or PNG. 1MB max.</p>
            <button type="button" className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-background transition-colors">
              Upload Photo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
            <input
              type="email"
              disabled
              value={session?.user.email || ""}
              className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 text-sm text-muted-foreground cursor-not-allowed"
            />
            <p className="text-xs text-muted-foreground mt-2">Email cannot be changed.</p>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Role</label>
          <input
            type="text"
            disabled
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            value={((session?.user as any)?.role as string) || "Guest"}
            className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 text-sm text-muted-foreground capitalize cursor-not-allowed"
          />
        </div>

        <div className="pt-6 border-t border-border flex justify-end">
          <button
            type="submit"
            disabled={loading || name === session?.user.name}
            className="flex items-center justify-center bg-primary text-primary-foreground rounded-lg px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}
