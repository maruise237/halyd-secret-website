"use client"

import { useState } from "react"
import { PRODUCTS } from "@/lib/products"
import { ExpandableProductCard } from "./expandable-product-card"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

export function ProductGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="boutique" className="py-16 sm:py-24 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Boutique"
          title="Perruques & produits lace"
          description="Cliquez sur un produit pour plus de détails, puis commandez sur WhatsApp."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 items-start">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} delayMs={(index % 5) * 60}>
              <ExpandableProductCard
                product={product}
                isExpanded={expandedId === product.id}
                onToggle={() => setExpandedId((current) => (current === product.id ? null : product.id))}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
