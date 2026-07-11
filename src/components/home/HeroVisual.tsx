"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[700px] flex items-center justify-center -ml-12 lg:-ml-24">
      {/* Background Environment */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none rounded-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background pointer-events-none" />

      {/* Network Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" style={{ zIndex: 0 }}>
        {/* Top Left */}
        <path d="M 250 200 C 350 200, 350 350, 450 350" fill="none" stroke="url(#purpleGlow)" strokeWidth="2" />
        {/* Top Mid */}
        <path d="M 450 180 C 450 250, 450 300, 450 350" fill="none" stroke="url(#purpleGlow)" strokeWidth="2" />
        {/* Top Right */}
        <path d="M 650 200 C 550 200, 550 350, 450 350" fill="none" stroke="url(#purpleGlow)" strokeWidth="2" />
        {/* Mid Left */}
        <path d="M 250 350 L 450 350" fill="none" stroke="url(#purpleGlow)" strokeWidth="2" />
        {/* Mid Right */}
        <path d="M 650 350 L 450 350" fill="none" stroke="url(#purpleGlow)" strokeWidth="2" />
        {/* Bottom Left */}
        <path d="M 250 500 C 350 500, 350 350, 450 350" fill="none" stroke="url(#purpleGlow)" strokeWidth="2" />
        {/* Bottom Right */}
        <path d="M 650 500 C 550 500, 550 350, 450 350" fill="none" stroke="url(#purpleGlow)" strokeWidth="2" />
        
        <defs>
          <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Central Command Node */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-64 h-64 flex flex-col items-center justify-center bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(139,92,246,0.15)]"
      >
        <div className="absolute inset-0 border border-primary/20 rounded-2xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
           <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
           {/* Geometric Cube / Diamond SVG placeholder */}
           <svg viewBox="0 0 100 100" className="w-20 h-20 text-white drop-shadow-[0_0_15px_rgba(139,92,246,0.8)] z-10">
              <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="currentColor" strokeWidth="2"/>
              <polygon points="50,10 50,50 90,70" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5"/>
              <polygon points="50,10 10,30 50,50" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5"/>
              <polygon points="50,50 10,70 50,90" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5"/>
              <polygon points="50,50 90,70 50,90" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5"/>
           </svg>
        </div>
        <p className="font-bold text-sm text-foreground tracking-widest mb-1">AI SUPERVISOR</p>
        <p className="text-xs text-muted-foreground mb-4">Strategic Command Center</p>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-[10px] text-green-500 font-medium">All Systems Operational</span>
        </div>
      </motion.div>

      {/* Surrounding Dashboard Cards */}
      <div className="absolute inset-0 w-full h-full">
        {/* Top Left: Sales */}
        <motion.div initial={{opacity:0, y:-20}} animate={controls} variants={{visible: {opacity:1, y:0, transition:{delay:0.2}}}} className="absolute top-[10%] left-[5%] w-56 bg-surface/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl">
           <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              </div>
              <div>
                 <p className="text-[10px] font-bold text-foreground">SALES INTELLIGENCE</p>
                 <p className="text-[9px] text-muted-foreground">Pipeline Health</p>
              </div>
           </div>
           <p className="text-[10px] text-muted-foreground">Pipeline</p>
           <p className="text-xl font-bold text-foreground">$24.8M</p>
           <p className="text-[9px] text-green-400 flex items-center">↑ 18.6% vs last month</p>
           {/* Chart line placeholder */}
           <div className="mt-3 h-8 w-full border-b border-l border-white/10 relative">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100"><polyline points="0,80 20,60 40,70 60,30 80,40 100,10" fill="none" stroke="#60a5fa" strokeWidth="2"/></svg>
           </div>
        </motion.div>

        {/* Top Mid: Finance */}
        <motion.div initial={{opacity:0, y:-20}} animate={controls} variants={{visible: {opacity:1, y:0, transition:{delay:0.3}}}} className="absolute top-[5%] left-[38%] w-56 bg-surface/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl">
           <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center text-green-400">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                 <p className="text-[10px] font-bold text-foreground">FINANCE INTELLIGENCE</p>
                 <p className="text-[9px] text-muted-foreground">Revenue Impact</p>
              </div>
           </div>
           <p className="text-[10px] text-muted-foreground">Generated Revenue</p>
           <p className="text-xl font-bold text-foreground">$8.42M</p>
           <p className="text-[9px] text-green-400 flex items-center">↑ 24.1% vs last month</p>
           <div className="mt-3 h-8 w-full border-b border-l border-white/10 relative">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100"><polyline points="0,90 20,50 40,60 60,20 80,40 100,5" fill="none" stroke="#4ade80" strokeWidth="2"/></svg>
           </div>
        </motion.div>

        {/* Top Right: Marketing */}
        <motion.div initial={{opacity:0, y:-20}} animate={controls} variants={{visible: {opacity:1, y:0, transition:{delay:0.4}}}} className="absolute top-[10%] right-[5%] w-56 bg-surface/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl">
           <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>
              </div>
              <div>
                 <p className="text-[10px] font-bold text-foreground">MARKETING INTELLIGENCE</p>
                 <p className="text-[9px] text-muted-foreground">Campaign ROI</p>
              </div>
           </div>
           <p className="text-[10px] text-muted-foreground">Campaign ROI</p>
           <p className="text-xl font-bold text-foreground">320%</p>
           <p className="text-[9px] text-green-400 flex items-center">↑ 28.7% vs last month</p>
           <div className="mt-3 h-8 w-full border-b border-l border-white/10 relative">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100"><polyline points="0,70 20,40 40,50 60,10 80,30 100,0" fill="none" stroke="#c084fc" strokeWidth="2"/></svg>
           </div>
        </motion.div>

        {/* Mid Left: Support */}
        <motion.div initial={{opacity:0, x:-20}} animate={controls} variants={{visible: {opacity:1, x:0, transition:{delay:0.5}}}} className="absolute top-[35%] left-[2%] w-52 bg-surface/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl">
           <div className="flex items-start gap-3 mb-4">
              <div className="w-6 h-6 rounded bg-sky-500/20 flex items-center justify-center text-sky-400">
                 <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728M5.636 18.364a9 9 0 010-12.728M15.536 8.464a5 5 0 010 7.072M8.464 15.536a5 5 0 010-7.072M12 10a2 2 0 110 4 2 2 0 010-4z"/></svg>
              </div>
              <div>
                 <p className="text-[9px] font-bold text-foreground">CUSTOMER SUPPORT AI</p>
                 <p className="text-[8px] text-muted-foreground">Resolution Rate</p>
              </div>
           </div>
           <p className="text-lg font-bold text-foreground">97.6%</p>
           <p className="text-[8px] text-green-400 flex items-center mb-2">↑ 12.4% vs last month</p>
           <div className="h-6 w-full border-b border-l border-white/10 relative">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100"><polyline points="0,50 20,30 40,80 60,10 80,40 100,5" fill="none" stroke="#38bdf8" strokeWidth="2"/></svg>
           </div>
        </motion.div>

        {/* Mid Right: Knowledge Engine */}
        <motion.div initial={{opacity:0, x:20}} animate={controls} variants={{visible: {opacity:1, x:0, transition:{delay:0.6}}}} className="absolute top-[35%] right-[2%] w-52 bg-surface/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl">
           <div className="flex items-start gap-3 mb-4">
              <div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                 <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              </div>
              <div>
                 <p className="text-[9px] font-bold text-foreground">KNOWLEDGE ENGINE</p>
                 <p className="text-[8px] text-muted-foreground">Information Access</p>
              </div>
           </div>
           <p className="text-lg font-bold text-foreground">2.1M</p>
           <p className="text-[8px] text-green-400 flex items-center mb-2">↑ 35.2% vs last month</p>
           <div className="h-6 w-full border-b border-l border-white/10 relative">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100"><polyline points="0,80 20,60 40,70 60,30 80,40 100,10" fill="none" stroke="#34d399" strokeWidth="2"/></svg>
           </div>
        </motion.div>

        {/* Bottom Left: Operations */}
        <motion.div initial={{opacity:0, y:20}} animate={controls} variants={{visible: {opacity:1, y:0, transition:{delay:0.7}}}} className="absolute bottom-[20%] left-[5%] w-52 bg-surface/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl">
           <div className="flex items-start gap-3 mb-4">
              <div className="w-6 h-6 rounded bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                 <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              </div>
              <div>
                 <p className="text-[9px] font-bold text-foreground">OPERATIONS AI</p>
                 <p className="text-[8px] text-muted-foreground">Process Efficiency</p>
              </div>
           </div>
           <p className="text-lg font-bold text-foreground">89.4%</p>
           <p className="text-[8px] text-green-400 flex items-center mb-2">↑ 15.3% vs last month</p>
           <div className="h-6 w-full border-b border-l border-white/10 relative">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100"><polyline points="0,60 20,40 40,70 60,30 80,20 100,15" fill="none" stroke="#fbbf24" strokeWidth="2"/></svg>
           </div>
        </motion.div>

        {/* Bottom Right: Analytics */}
        <motion.div initial={{opacity:0, y:20}} animate={controls} variants={{visible: {opacity:1, y:0, transition:{delay:0.8}}}} className="absolute bottom-[20%] right-[5%] w-52 bg-surface/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl">
           <div className="flex items-start gap-3 mb-4">
              <div className="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                 <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>
              </div>
              <div>
                 <p className="text-[9px] font-bold text-foreground">ANALYTICS ENGINE</p>
                 <p className="text-[8px] text-muted-foreground">Insights Generated</p>
              </div>
           </div>
           <p className="text-lg font-bold text-foreground">12.4K</p>
           <p className="text-[8px] text-green-400 flex items-center mb-2">↑ 41.8% vs last month</p>
           <div className="h-6 w-full border-b border-l border-white/10 relative">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100"><polyline points="0,90 20,80 40,40 60,50 80,10 100,5" fill="none" stroke="#818cf8" strokeWidth="2"/></svg>
           </div>
        </motion.div>
        
        {/* Bottom Center Nodes */}
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex gap-4 w-[400px] justify-center">
            <motion.div initial={{opacity:0, y:20}} animate={controls} variants={{visible: {opacity:1, y:0, transition:{delay:0.9}}}} className="flex-1 bg-surface/80 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-xl">
               <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                  </div>
                  <div>
                    <p className="text-[8px] font-bold text-foreground">MULTI-AGENT ORCHESTRATOR</p>
                    <p className="text-[7px] text-muted-foreground">Active Agents</p>
                  </div>
               </div>
               <p className="text-xl font-bold text-foreground">128</p>
               <p className="text-[7px] text-muted-foreground">All agents performing optimally</p>
               <div className="flex gap-1 mt-2">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-3 h-3 rounded-full bg-primary/30 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"/></div>)}
               </div>
            </motion.div>

            <motion.div initial={{opacity:0, y:20}} animate={controls} variants={{visible: {opacity:1, y:0, transition:{delay:1.0}}}} className="flex-1 bg-surface/80 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-xl">
               <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <div>
                    <p className="text-[8px] font-bold text-foreground">WORKFLOW AUTOMATION</p>
                    <p className="text-[7px] text-muted-foreground">Automated Workflows</p>
                  </div>
               </div>
               <p className="text-xl font-bold text-foreground">342</p>
               <p className="text-[7px] text-green-400">↑ 21.7% vs last month</p>
               <div className="flex gap-1 mt-2 h-1 w-full bg-white/10 rounded overflow-hidden">
                  <div className="w-[85%] h-full bg-blue-400" />
               </div>
            </motion.div>
        </div>
      </div>
      
      {/* Footer 3D Platform/Keyboard illusion */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-zinc-900 rounded-t-3xl border-t border-x border-white/10 opacity-90 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]" style={{ transform: "perspective(500px) rotateX(45deg)", transformOrigin: "bottom" }}>
         <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
         <div className="flex gap-4 p-4 h-full">
            <div className="flex-1 border border-white/10 rounded-lg bg-white/5 relative overflow-hidden"><div className="absolute top-1 left-1 w-12 h-12 border border-primary/30 rounded-full animate-spin" style={{ animationDuration: '4s' }} /></div>
            <div className="flex-1 border border-white/10 rounded-lg bg-white/5 flex flex-col justify-end p-2"><div className="w-full h-2 bg-primary/40 rounded mb-1"/><div className="w-3/4 h-2 bg-primary/20 rounded"/></div>
            <div className="flex-1 border border-white/10 rounded-lg bg-white/5 relative overflow-hidden"><div className="absolute bottom-2 right-2 w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center"><div className="w-4 h-4 bg-blue-500 rounded-sm animate-pulse"/></div></div>
         </div>
      </div>

    </div>
  )
}
