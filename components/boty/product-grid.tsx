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
    <section id="boutique" className="py-24 bg-card scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-gold mb-4 block">Boutique</span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-foreground mb-6 text-balance">
            Perruques &amp; produits lace
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Commandez directement sur WhatsApp — retrait au salon à Bonamoussadi.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className={`bg-background rounded-3xl overflow-hidden boty-shadow boty-transition hover:scale-[1.02] transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="relative aspect-square bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-foreground mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium text-foreground">
                    {product.price ?? "Prix sur demande"}
                  </span>
                  <WhatsAppButton
                    message={`Bonjour Halyd's Secret, je suis intéressé(e) par : ${product.name}.`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-gold hover:text-gold-hover boty-transition"
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
