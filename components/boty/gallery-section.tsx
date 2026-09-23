"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GALLERY_ITEMS, type GalleryCategory } from "@/lib/gallery"
import { cn } from "@/lib/utils"
import { SectionHeading } from "./section-heading"

const FILTERS: { label: string; value: GalleryCategory | "tous" }[] = [
  { label: "Tous", value: "tous" },
  { label: "Coiffure", value: "coiffure" },
  { label: "Maquillage", value: "maquillage" },
  { label: "Manucure", value: "manucure" },
]

// On mobile, the masonry grid is capped to a short preview and only grows to
// its full height on request, so the page doesn't turn into an endless
// scroll of every photo by default. Desktop already has 3-5 columns, so the
// cap only applies below sm via CSS and never affects that layout.
const MOBILE_PREVIEW_COUNT = 6

export function GallerySection() {
  const [filter, setFilter] = useState<GalleryCategory | "tous">("tous")
  const [expanded, setExpanded] = useState(false)

  const items = filter === "tous" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter)
  const canCollapse = items.length > MOBILE_PREVIEW_COUNT

  return (
    <section id="realisations" className="py-16 sm:py-24 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Portfolio" title="Nos réalisations" />

        <div className="flex justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 flex-wrap">
          {FILTERS.map((f) => (
            <Button
              key={f.value}
              type="button"
              size="sm"
              variant={filter === f.value ? "gold" : "outline"}
              className="rounded-full"
              onClick={() => {
                setFilter(f.value)
                setExpanded(false)
              }}
            >
              {f.label}
            </Button>
          ))}
        </div>

        <div className="relative">
          <div
            className={cn(
              "columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3 sm:gap-4 space-y-3 sm:space-y-4",
              canCollapse && !expanded && "max-h-[720px] overflow-hidden sm:max-h-none sm:overflow-visible"
            )}
          >
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

          {canCollapse && !expanded && (
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent sm:hidden"
            />
          )}
        </div>

        {canCollapse && !expanded && (
          <div className="flex justify-center mt-6 sm:hidden">
            <Button type="button" variant="outline" onClick={() => setExpanded(true)}>
              Voir plus de réalisations
              <ChevronDown className="size-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
