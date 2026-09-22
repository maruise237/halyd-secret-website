import type { ReactNode } from "react"

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: ReactNode
  title: ReactNode
  description?: ReactNode
}) {
  return (
    <div className="text-center mb-10 sm:mb-12 md:mb-16">
      <span className="text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gold mb-4 block">
        {eyebrow}
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight text-foreground mb-4 sm:mb-6 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">{description}</p>
      )}
    </div>
  )
}
