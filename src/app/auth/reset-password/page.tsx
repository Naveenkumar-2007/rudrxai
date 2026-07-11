"use client"

import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { FadeIn } from "@/components/effects/fade-in"
import { Lock, Loader2, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirm) {
      setError("Passwords do not match")
      return
    }
    
    setLoading(true)
    setError("")

    const { error: resetError } = await authClient.resetPassword({
      newPassword: password,
    })

    if (resetError) {
      setError(resetError.message || "Failed to reset password. Link may be expired.")
    } else {
      setSuccess(true)
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <FadeIn>
          <div className="bg-surface border border-border rounded-2xl shadow-xl p-8 text-center">
            
            {success ? (
              <div className="py-6">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-success" />
                </div>
                <h1 className="text-2xl font-bold font-heading mb-2 text-foreground">Password Reset Complete</h1>
                <p className="text-sm text-muted-foreground mb-8">Your password has been successfully updated.</p>
                <Link href="/auth/login" className="inline-block px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  Sign In
                </Link>
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-bold font-heading mb-2 text-foreground text-left">Set New Password</h1>
                <p className="text-sm text-muted-foreground mb-6 text-left">Please enter your new password below.</p>

                {error && (
                  <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium text-left">
                    {error}
                  </div>
                )}

                <form onSubmit={handleReset} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">New Password</label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Confirm Password</label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center bg-primary text-primary-foreground rounded-lg py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors mt-2 disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save Password"}
                  </button>
                </form>
              </>
            )}
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
