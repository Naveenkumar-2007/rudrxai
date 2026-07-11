import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/effects/fade-in"
import { Badge } from "@/components/ui/badge"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  badge?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl mb-16", centered && "mx-auto text-center", className)}>
      {badge && (
        <FadeIn delay={0.1}>
          <Badge variant="surface" className="mb-6 font-mono text-xs uppercase tracking-wider text-primary border-primary/20">
            {badge}
          </Badge>
        </FadeIn>
      )}
      <FadeIn delay={0.2}>
        <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight mb-6 text-foreground leading-[1.1]">
          {title}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  )
}
