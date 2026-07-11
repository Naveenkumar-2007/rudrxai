"use client"

import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { FadeIn } from "@/components/effects/fade-in"
import { ShieldCheck, Mail, Lock, Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const { error: signInError } = await authClient.signIn.email({
      email,
      password,
    })

    if (signInError) {
      setError(signInError.message || "Invalid credentials")
      setLoading(false)
    } else {
      router.push("/settings/profile")
      router.refresh()
    }
  }

  return (
    <main className="min-h-screen bg-background flex">
      {/* Left side: Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24">
        <div className="max-w-sm w-full mx-auto">
          <Link href="/" className="inline-block mb-12">
            <span className="font-heading font-bold text-2xl tracking-wider">RUDRX<span className="text-primary">AI</span></span>
          </Link>
          
          <FadeIn>
            <h1 className="text-3xl font-bold font-heading mb-2 text-foreground">Welcome back</h1>
            <p className="text-muted-foreground mb-8">Sign in to your Rudrx AI workspace.</p>

            {error && (
              <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-surface border border-border rounded-lg pl-10 pr-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-foreground">Password</label>
                  <Link href="/auth/forgot-password" className="text-sm font-medium text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-surface border border-border rounded-lg pl-10 pr-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center bg-primary text-primary-foreground rounded-lg py-3 font-semibold hover:bg-primary/90 transition-colors shadow-lg disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
              </button>

              {/* Development / Testing Shortcut */}
              <div className="pt-4 border-t border-border mt-6">
                <button
                  type="button"
                  onClick={async () => {
                    setLoading(true)
                    setError("")
                    
                    // First try to sign up the test admin
                    await authClient.signUp.email({
                      email: "admin@rudrx.com",
                      password: "password123",
                      name: "Test Admin",
                      // @ts-expect-error - role is an additional field
                      role: "admin"
                    })
                    
                    // Then log them in
                    const { error: signInError } = await authClient.signIn.email({
                      email: "admin@rudrx.com",
                      password: "password123",
                    })

                    if (signInError) {
                      setError("Could not log in test admin. " + signInError.message)
                      setLoading(false)
                    } else {
                      router.push("/admin/dashboard")
                      router.refresh()
                    }
                  }}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-background border border-primary/20 text-primary rounded-lg py-2.5 text-sm font-medium hover:bg-primary/5 transition-colors disabled:opacity-50"
                >
                  <ShieldCheck className="w-4 h-4" /> Sign In as Admin (Testing)
                </button>
              </div>
            </form>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              Don&apos;t have an account? <Link href="/contact" className="font-medium text-primary hover:underline">Book Discovery</Link>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Right side: Visuals */}
      <div className="hidden lg:flex flex-1 bg-surface border-l border-border items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full" />
        <div className="max-w-md text-center z-10 p-12">
          <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl border border-border">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">Enterprise Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your workspace is secured with state-of-the-art encryption and role-based access control. All sessions are monitored for suspicious activity.
          </p>
        </div>
      </div>
    </main>
  )
}
