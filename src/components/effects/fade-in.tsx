"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  fullWidth?: boolean
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
  fullWidth = false,
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const yOffset = direction === "up" ? 40 : direction === "down" ? -40 : 0
  const xOffset = direction === "left" ? 40 : direction === "right" ? -40 : 0

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: yOffset,
        x: xOffset
      }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : yOffset,
        x: isInView ? 0 : xOffset
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // custom ease-out
      }}
      className={cn(fullWidth ? "w-full" : "", className)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
}) {
  const yOffset = direction === "up" ? 30 : direction === "down" ? -30 : 0
  const xOffset = direction === "left" ? 30 : direction === "right" ? -30 : 0

  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0, 
          y: yOffset,
          x: xOffset
        },
        visible: { 
          opacity: 1, 
          y: 0,
          x: 0,
          transition: {
            duration: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98]
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
