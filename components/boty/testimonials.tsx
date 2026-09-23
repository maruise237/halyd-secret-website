"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS } from "@/lib/reviews"
import { GOOGLE_MAPS_URL } from "@/lib/contact"
import { GoogleLogo } from "./google-logo"

type Card = {
  quote: string
  highlight: string
  name: string
  role: string
}

// Presentation-only split of the real Google review text (lib/reviews.ts) into
// a lead quote + a short emphasized closing phrase, for the hanging-card layout.
const CARDS: Card[] = [
  {
    quote: "Votre pédicure est unique et assez spéciale. Jamais je n'ai été autant choyée. Merci beaucoup,",
    highlight: "je n'hésiterais pas à vous recommander.",
    name: GOOGLE_REVIEWS[0].author,
    role: `Avis Google · ${GOOGLE_REVIEWS[0].relativeTime}`,
  },
  {
    quote: "Le niveau de professionnalisme est du jamais vu. Tous les appareils qu'ils sortent, rien que pour ma pédicure…",
    highlight: "Merci vraiment !",
    name: GOOGLE_REVIEWS[1].author,
    role: `Avis Google · ${GOOGLE_REVIEWS[1].relativeTime}`,
  },
]

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

const CARD_WIDTH = 420
const CARD_SPACING = [-2, 3, -1, 2]

export function Testimonials() {
  const scrollX = useRef(0)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [dimensions, setDimensions] = useState({ w: 1920, cx: 960 })

  // Tripled so the strip wraps seamlessly regardless of viewport width.
  const duplicated = useMemo(() => [...CARDS, ...CARDS, ...CARDS], [])

  useEffect(() => {
    const handleResize = () => setDimensions({ w: window.innerWidth, cx: window.innerWidth / 2 })
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let animationFrameId: number
    let lastTime = performance.now()
    const speed = 55 // px/sec
    const totalWidth = CARD_WIDTH * duplicated.length

    const animate = (time: number) => {
      const delta = time - lastTime
      lastTime = time
      scrollX.current -= (speed * delta) / 1000

      cardsRef.current.forEach((card, idx) => {
        if (!card) return

        let x = (idx * CARD_WIDTH + scrollX.current) % totalWidth
        if (x < -CARD_WIDTH) x += totalWidth

        const cardCenter = x + CARD_WIDTH / 2
        const dipDepth = 90
        // Clamped so a card whose center has drifted past the viewport edge
        // (still partly visible, since it's wider than the leftover margin)
        // settles flat at the rope's end instead of the quadratic blowing up
        // into an extreme rotation that swings it into the neighboring card.
        // That blow-up was most visible on tablet widths, where the fixed
        // 420px card width is a large fraction of the viewport.
        const normalizedX = Math.max(-1, Math.min(1, (cardCenter - dimensions.cx) / dimensions.cx))
        const y = dipDepth * (1 - Math.pow(normalizedX, 2))

        const slope = ((-2 * dipDepth) / dimensions.cx) * normalizedX
        const physicsAngle = Math.atan(slope) * (180 / Math.PI)
        const finalAngle = physicsAngle + CARD_SPACING[idx % CARD_SPACING.length]

        card.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${finalAngle}deg)`
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [dimensions.cx, duplicated.length])

  return (
    <section id="avis" className="relative overflow-hidden bg-card py-16 sm:py-24 scroll-mt-20">
      <div className="pointer-events-none absolute -left-12 -top-12 h-96 w-96 rounded-full bg-gold/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-12 -bottom-12 h-96 w-96 rounded-full bg-black/5 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gold mb-4 block">
            Avis clients
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight text-foreground mb-6 text-balance">
            Ce que disent nos clientes
          </h2>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground hover:border-gold boty-transition"
          >
            <GoogleLogo className="w-4 h-4" />
            {GOOGLE_RATING.toFixed(1)} sur Google · {GOOGLE_REVIEW_COUNT} avis
          </a>
        </div>

        <div className="relative left-1/2 w-screen -translate-x-1/2 h-[400px] sm:h-[460px] overflow-hidden">
          <svg className="pointer-events-none absolute top-0 left-0 z-10 h-[420px] w-full" preserveAspectRatio="none">
            <path
              d={`M 0 10 Q ${dimensions.cx} 200 ${dimensions.w} 10`}
              fill="none"
              className="stroke-border"
              strokeWidth="2.5"
            />
          </svg>

          <div className="absolute top-0 left-0 w-full h-full">
            {duplicated.map((card, idx) => {
              const isGold = idx % 2 === 1
              return (
                <div
                  key={`${card.name}-${idx}`}
                  ref={(el) => {
                    cardsRef.current[idx] = el
                  }}
                  className="will-change-transform pointer-events-auto absolute top-0 left-0 flex w-[420px] origin-[50%_15px] flex-col items-center"
                >
                  {/* Hanging clip */}
                  <div
                    className={cn(
                      "relative -mb-3 z-20 flex h-10 w-6 flex-col items-center rounded-md pt-2 shadow-md",
                      isGold ? "bg-black" : "bg-gold"
                    )}
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-background" />
                    <div className="absolute bottom-2 h-[2px] w-4 rounded-full bg-white/30" />
                  </div>

                  {/* Card */}
                  <div
                    className={cn(
                      "relative z-10 flex min-h-[280px] w-[320px] sm:w-[360px] flex-col justify-between rounded-3xl border p-6 sm:p-7 boty-shadow",
                      isGold ? "bg-gold text-black border-gold" : "bg-background text-foreground border-border"
                    )}
                  >
                    <p className="text-base leading-relaxed">
                      &ldquo;{card.quote} <span className="font-semibold">{card.highlight}</span>&rdquo;
                    </p>

                    <div
                      className={cn(
                        "mt-6 flex items-center gap-3 border-t pt-5",
                        isGold ? "border-black/15" : "border-border"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                          isGold ? "bg-black/10 text-black" : "bg-secondary text-gold"
                        )}
                      >
                        {initialsOf(card.name)}
                      </div>
                      <div>
                        <p className="font-medium leading-snug">{card.name}</p>
                        <p className={cn("text-xs uppercase tracking-wide", isGold ? "text-black/70" : "text-muted-foreground")}>
                          {card.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
