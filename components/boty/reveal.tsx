"use client"

import type { HTMLAttributes } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  delayMs?: number
}

/**
 * Fades + slides children into place the first time they scroll into view.
 * Wrap each item that should reveal independently (e.g. a grid card); for
 * staggered grids, vary `delayMs` per item (index * 100-150ms is typical).
 */
export function Reveal({ children, className, delayMs = 0, style, ...props }: RevealProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delayMs}ms`, ...style }}
      {...props}
    >
      {children}
    </div>
  )
}
