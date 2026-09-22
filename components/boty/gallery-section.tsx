"use client"

import { useState } from "react"
import Image from "next/image"
import { GALLERY_ITEMS, type GalleryCategory } from "@/lib/gallery"

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
    <section id="realisations" className="py-24 bg-card scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-gold mb-4 block">Portfolio</span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-foreground mb-6 text-balance">
            Nos réalisations
          </h2>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm boty-transition border ${
                filter === f.value
                  ? "bg-gold text-black border-gold"
                  : "bg-background text-foreground/70 border-border hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {items.map((item) => (
            <div key={item.image} className="relative rounded-2xl overflow-hidden boty-shadow break-inside-avoid">
              <Image
                src={item.image}
                alt={item.alt}
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
