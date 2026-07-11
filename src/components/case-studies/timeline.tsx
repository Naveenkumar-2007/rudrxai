import { CaseStudyTimelineEvent } from "@/types/case-studies"

export function Timeline({ events }: { events: CaseStudyTimelineEvent[] }) {
  if (!events || events.length === 0) return null

  return (
    <div className="relative border-l border-border ml-4 md:ml-6 mt-12 mb-12 space-y-12">
      {events.map((event, index) => (
        <div key={index} className="relative pl-8 md:pl-12">
          {/* Node */}
          <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(124,58,237,0.3)]" />
          
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
            <h4 className="font-heading font-semibold text-lg text-foreground">{event.title}</h4>
            <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-0.5 rounded w-fit">
              {event.timeframe}
            </span>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {event.description}
          </p>
        </div>
      ))}
    </div>
  )
}
