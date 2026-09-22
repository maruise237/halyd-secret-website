"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { PRODUCTS } from "@/lib/products"
import { WhatsAppButton } from "./whatsapp-button"

export function ProductGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (gridRef.current) observer.observe(gridRef.current)
    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current)
    }
  }, [])

  return (
    <section id="boutique" className="py-16 sm:py-24 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gold mb-4 block">
            Boutique
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight text-foreground mb-4 sm:mb-6 text-balance">
            Perruques &amp; produits lace
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Commandez directement sur WhatsApp — retrait au salon à Bonamoussadi.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className={`bg-background rounded-2xl sm:rounded-3xl overflow-hidden boty-shadow boty-transition hover:scale-[1.02] transition-all duration-500 ease-out flex flex-col ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="relative aspect-square bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="p-3 sm:p-5 flex flex-col flex-1">
                <h3 className="font-serif text-sm sm:text-lg text-foreground mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">
                  {product.description}
                </p>
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-foreground text-sm sm:text-base">
                    {product.price ?? "Prix sur demande"}
                  </span>
                  <WhatsAppButton
                    message={`Bonjour Halyd's Secret, je suis intéressé(e) par : ${product.name}.`}
                    variant="gold-outline"
                    size="sm"
                    className="w-full text-xs sm:text-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Commander
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
