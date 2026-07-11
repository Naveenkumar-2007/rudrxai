import * as React from "react"
import { cn } from "@/lib/utils"

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mx-auto w-full max-w-[1400px] px-4 md:px-8 lg:px-12",
      className
    )}
    {...props}
  />
))
Container.displayName = "Container"

export { Container }
