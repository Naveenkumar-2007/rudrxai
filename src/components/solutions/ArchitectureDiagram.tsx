import { ArchitectureNode } from "@/types/solutions"
import { Database, Server, Cpu, Webhook } from "lucide-react"

export function ArchitectureDiagram({ nodes }: { nodes: ArchitectureNode[] }) {
  const getIcon = (type: string) => {
    switch(type) {
      case 'input': return <Webhook className="w-5 h-5" />
      case 'process': return <Cpu className="w-5 h-5 text-primary" />
      case 'storage': return <Database className="w-5 h-5 text-accent" />
      case 'output': return <Server className="w-5 h-5 text-success" />
      default: return <Server className="w-5 h-5" />
    }
  }

  return (
    <div className="bg-surface/50 border border-border rounded-2xl p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {nodes.map((node, i) => (
          <div key={node.id} className="flex flex-col md:flex-row items-center">
            <div className={`
              flex flex-col items-center justify-center w-32 h-32 rounded-xl border bg-background text-center p-4 shadow-xl
              ${node.type === 'process' ? 'border-primary/50 shadow-[0_0_30px_rgba(124,58,237,0.15)]' : 'border-border'}
            `}>
              <div className="mb-3">{getIcon(node.type)}</div>
              <span className="text-xs font-semibold text-foreground">{node.label}</span>
            </div>
            
            {i < nodes.length - 1 && (
              <div className="flex md:flex-row flex-col items-center justify-center w-8 md:w-16 h-16 md:h-8">
                <div className="w-[2px] h-full md:w-full md:h-[2px] bg-border relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-ping" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
