"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, UploadCloud, FileText, CheckCircle2 } from "lucide-react"

export function InteractiveDemo({ type = "chat" }: { type?: "chat" | "document" | "voice" | "vision" }) {
  if (type === "document") return <DocumentDemo />
  return <ChatDemo />
}

function ChatDemo() {
  const [messages, setMessages] = useState<{role: 'user'|'agent', text: string}[]>([
    { role: 'agent', text: 'Hello. I am your enterprise agent. How can I help you automate tasks today?' }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if(!input.trim()) return
    const newMsg = input
    setMessages(prev => [...prev, {role: 'user', text: newMsg}])
    setInput("")
    setIsTyping(true)
    
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, {role: 'agent', text: `I have analyzed your request regarding "${newMsg}". I am executing the multi-step workflow across your CRM and ERP now.`}])
    }, 1500)
  }

  return (
    <div className="bg-background border border-border rounded-2xl flex flex-col h-[400px] overflow-hidden shadow-2xl">
      <div className="bg-surface p-4 border-b border-border flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">Rudrx Agent</p>
          <p className="text-xs text-success">Online • Secure Environment</p>
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <AnimatePresence>
          {messages.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`max-w-[80%] p-3 rounded-xl text-sm ${m.role === 'user' ? 'bg-primary text-primary-foreground self-end rounded-tr-sm' : 'bg-surface border border-border text-foreground self-start rounded-tl-sm'}`}
            >
              {m.text}
            </motion.div>
          ))}
          {isTyping && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-surface border border-border text-foreground self-start rounded-xl p-3 text-sm flex gap-1">
               <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
               <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-75" />
               <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-150" />
             </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="p-4 bg-surface border-t border-border flex gap-2">
        <input 
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Type a command..."
          className="flex-1 bg-background border border-border rounded-lg px-4 text-sm focus:outline-none focus:border-primary"
        />
        <button onClick={handleSend} className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary/90">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

function DocumentDemo() {
  const [step, setStep] = useState(0)
  
  const handleUpload = () => {
    setStep(1)
    setTimeout(() => setStep(2), 2000)
  }
  
  return (
    <div className="bg-background border border-border rounded-2xl flex flex-col h-[400px] shadow-2xl p-6 relative overflow-hidden">
      {step === 0 && (
        <div className="flex-1 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors cursor-pointer" onClick={handleUpload}>
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <UploadCloud className="w-8 h-8 text-primary" />
          </div>
          <p className="text-foreground font-medium">Click to upload sample invoice</p>
          <p className="text-xs text-muted-foreground">Secure processing environment</p>
        </div>
      )}
      
      {step === 1 && (
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <div className="relative w-24 h-32 bg-surface border border-border rounded-lg flex items-center justify-center overflow-hidden">
             <FileText className="w-8 h-8 text-muted-foreground" />
             <div className="absolute inset-0 bg-primary/20 animate-pulse" />
             <div className="absolute top-0 w-full h-1 bg-primary animate-[scan_2s_ease-in-out_infinite]" />
          </div>
          <p className="text-primary font-medium animate-pulse">Extracting entities via Vision Model...</p>
        </div>
      )}
      
      {step === 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
            <CheckCircle2 className="w-6 h-6 text-success" />
            <span className="font-medium text-foreground">Extraction Complete</span>
          </div>
          <div className="space-y-4">
            {[['Invoice #', 'INV-2026-9082'], ['Vendor', 'Acme Global Corp'], ['Total Amount', '$14,250.00'], ['Confidence', '99.8%']].map((row, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-surface rounded-lg">
                <span className="text-sm text-muted-foreground">{row[0]}</span>
                <span className={`text-sm font-mono font-medium ${row[0]==='Confidence'?'text-success':'text-foreground'}`}>{row[1]}</span>
              </div>
            ))}
          </div>
          <button onClick={() => setStep(0)} className="mt-auto text-sm text-primary hover:underline text-center">Reset Demo</button>
        </motion.div>
      )}
    </div>
  )
}
