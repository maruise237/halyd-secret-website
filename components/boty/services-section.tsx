"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { BookingDialog } from "./booking-dialog"
import { SectionHeading } from "./section-heading"
import { SALON_SERVICES, type SalonService } from "@/lib/salon-services"
import { cn } from "@/lib/utils"

const SERVICE_IMAGES: Record<string, string> = {
  coiffure: "/images/realisations/realisation-coiffure-glam-brune-01.jpg",
  makeup: "/images/realisations/realisation-maquillage-glam-bijoux-01.jpg",
  manucure: "/images/realisations/realisation-manucure-pedicure-fleurs-noir.jpg",
}

const SLIDE_COUNT = SALON_SERVICES.length

function ServiceSlide({ service, index }: { service: SalonService; index: number }) {
  return (
    <div className="relative aspect-[4/5] sm:aspect-[16/9] rounded-3xl overflow-hidden boty-shadow">
      <Image
        src={SERVICE_IMAGES[service.id]}
        alt={service.title}
        fill
        sizes="(max-width: 1024px) 100vw, 900px"
        priority={index === 0}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

      <span className="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-gold text-black text-sm sm:text-base font-semibold">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-10">
        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 backdrop-blur-sm mb-3 sm:mb-4">
          <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white mb-2 text-balance">{service.title}</h3>
        <p className="text-sm sm:text-base text-white/80 max-w-md mb-5 sm:mb-6">{service.description}</p>
        <BookingDialog intent={service.intent} variant="gold" size="default">
          <Calendar className="w-4 h-4" />
          Prendre RDV
        </BookingDialog>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const pinRef = useRef<HTMLDivElement>(null)

  // Keep the dots in sync however the slide changed (scroll-driven or clicked).
  useEffect(() => {
    if (!api) return
    setSelected(api.selectedScrollSnap())
    api.on("select", () => setSelected(api.selectedScrollSnap()))
  }, [api])

  // Vertical scroll through the pinned section advances the slides horizontally,
  // so it reads as "scrolling sideways" rather than requiring a manual swipe/click.
  useEffect(() => {
    if (!api) return

    const handleScroll = () => {
      const pin = pinRef.current
      if (!pin) return
      const rect = pin.getBoundingClientRect()
      const scrollableHeight = rect.height - window.innerHeight
      if (scrollableHeight <= 0) return

      const progress = Math.min(1, Math.max(0, -rect.top / scrollableHeight))
      const index = Math.min(SLIDE_COUNT - 1, Math.round(progress * (SLIDE_COUNT - 1)))
      if (index !== api.selectedScrollSnap()) {
        api.scrollTo(index)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [api])

  return (
    <section id="services" className="relative bg-background scroll-mt-20" style={{ height: `${SLIDE_COUNT * 100}vh` }}>
      <div ref={pinRef} className="absolute inset-0">
        <div className="sticky top-0 h-screen flex flex-col justify-center py-10 sm:py-16">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
            <SectionHeading
              eyebrow="Nos prestations"
              title="Services du salon"
              description="Un salon complet pour prendre soin de vous, sur rendez-vous."
            />

            <Carousel setApi={setApi} opts={{ loop: false, watchDrag: false }}>
              <CarouselContent>
                {SALON_SERVICES.map((service, index) => (
                  <CarouselItem key={service.id}>
                    <ServiceSlide service={service} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex justify-center gap-2 mt-6">
              {SALON_SERVICES.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  aria-label={`Aller au service ${service.title}`}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-2 rounded-full boty-transition",
                    selected === index ? "w-6 bg-gold" : "w-2 bg-border"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
