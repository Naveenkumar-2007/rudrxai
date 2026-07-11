"use client"

import { useState, useEffect } from "react"
import { Share2, Bookmark, Headphones, Languages } from "lucide-react"

export function ReadingProgress({ title }: { title: string }) {
  const [progress, setProgress] = useState(0)
  const [isVoicePlaying, setIsVoicePlaying] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      
      const maxScroll = documentHeight - windowHeight
      const currentProgress = (scrollTop / maxScroll) * 100
      
      setProgress(Math.min(100, Math.max(0, currentProgress)))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b border-border w-full hidden md:block">
      <div className="absolute top-0 left-0 h-[2px] bg-primary transition-all duration-150 ease-out" style={{ width: `${progress}%` }} />
      
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground truncate max-w-[50%]">
          {title}
        </span>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsVoicePlaying(!isVoicePlaying)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${isVoicePlaying ? 'bg-primary text-primary-foreground' : 'bg-surface border border-border text-foreground hover:border-primary/50'}`}
          >
            <Headphones className="w-3 h-3" />
            {isVoicePlaying ? "Playing Audio..." : "Voice Reader"}
          </button>
          
          <div className="h-4 w-px bg-border mx-2" />
          
          <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors" title="Translate">
            <Languages className="w-4 h-4" />
          </button>
          <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors" title="Save to Bookmarks">
            <Bookmark className="w-4 h-4" />
          </button>
          <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors" title="Share Article">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
