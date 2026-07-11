"use client"

import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { FadeIn } from "@/components/effects/fade-in"
import { Mail, Loader2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    // @ts-expect-error Better Auth types can sometimes miss forgetPassword depending on the inferred configuration
    const { error: resetError } = await authClient.forgetPassword({
      email,
      redirectTo: "/auth/reset-password",
    })

    if (resetError) {
      setError(resetError.message || "Failed to send reset email")
    } else {
      setSuccess(true)
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <FadeIn>
          <div className="bg-surface border border-border rounded-2xl shadow-xl p-8">
            <Link href="/auth/login" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to login
            </Link>

            <h1 className="text-2xl font-bold font-heading mb-2 text-foreground">Reset Password</h1>
            <p className="text-sm text-muted-foreground mb-6">Enter your email address and we&apos;ll send you a link to reset your password.</p>

            {error && (
              <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
                {error}
              </div>
            )}

            {success ? (
              <div className="p-4 rounded-lg bg-success/10 border border-success/20 text-success text-sm font-medium text-center">
                Reset link sent! Check your email inbox.
              </div>
            ) : (
              <form onSubmit={handleReset} className="space-y-4">
                <div>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center bg-primary text-primary-foreground rounded-lg py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Send Reset Link"}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
