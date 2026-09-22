"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GALLERY_ITEMS, type GalleryCategory } from "@/lib/gallery"
import { cn } from "@/lib/utils"

const FILTERS: { label: string; value: GalleryCategory | "tous" }[] = [
  { label: "Tous", value: "tous" },
  { label: "Coiffure", value: "coiffure" },
  { label: "Maquillage", value: "maquillage" },
  { label: "Manucure", value: "manucure" },
]

export function GallerySection() {
  const [filter, setFilter] = useState<GalleryCategory | "tous">("tous")

  const items = filter === "tous" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter)

  return (
    <section id="realisations" className="py-16 sm:py-24 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gold mb-4 block">
            Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight text-foreground mb-4 sm:mb-6 text-balance">
            Nos réalisations
          </h2>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 flex-wrap">
          {FILTERS.map((f) => (
            <Button
              key={f.value}
              type="button"
              size="sm"
              variant={filter === f.value ? "gold" : "outline"}
              className="rounded-full"
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </Button>
          ))}
        </div>

        <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {items.map((item) => (
            <div
              key={item.image}
              className={cn(
                "relative rounded-xl sm:rounded-2xl overflow-hidden boty-shadow break-inside-avoid bg-muted"
              )}
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={206}
                height={206}
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 20vw"
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
