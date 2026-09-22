"use client"

import { Star } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { SectionHeading } from "./section-heading"
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_MAPS_URL, GOOGLE_REVIEWS } from "@/lib/reviews"

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < count ? "fill-gold text-gold" : "text-border"}`} />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="avis" className="py-16 sm:py-24 bg-background scroll-mt-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Avis clients" title="Ce que disent nos clientes" />

        <div className="flex items-center justify-center gap-3 mb-10 -mt-4">
          <Stars count={Math.round(GOOGLE_RATING)} />
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground boty-transition"
          >
            {GOOGLE_RATING.toFixed(1)} sur Google · {GOOGLE_REVIEW_COUNT} avis
          </a>
        </div>

        <Carousel opts={{ align: "center", loop: true }} className="mx-auto max-w-xl">
          <CarouselContent>
            {GOOGLE_REVIEWS.map((review) => (
              <CarouselItem key={review.author}>
                <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 text-center boty-shadow h-full">
                  <Stars count={review.rating} />
                  <p className="text-foreground leading-relaxed my-5 text-balance">&quot;{review.text}&quot;</p>
                  <p className="text-sm text-muted-foreground">
                    {review.author} <span className="text-border">·</span> {review.relativeTime}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  )
}
