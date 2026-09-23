"use client"

import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { MessageCircle, MapPin, ChevronDown } from "lucide-react"
import type { Product } from "@/lib/products"
import { WhatsAppLinkButton } from "./whatsapp-link-button"
import { cn } from "@/lib/utils"

const CATEGORY_LABELS: Record<Product["category"], string> = {
  cheveux: "Cheveux & perruques",
  lace: "Produit lace",
  soin: "Soin",
}

export function ExpandableProductCard({
  product,
  isExpanded,
  onToggle,
}: {
  product: Product
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-background rounded-2xl sm:rounded-3xl overflow-hidden boty-shadow flex flex-col h-full"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-label={`${isExpanded ? "Réduire" : "Voir plus de détails sur"} ${product.name}`}
        className="flex flex-col flex-1 text-left"
      >
        <span className="relative block aspect-square bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
            className="object-cover"
          />
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] sm:text-xs px-2 py-1 rounded-full">
            {CATEGORY_LABELS[product.category]}
          </span>
        </span>

        <span className="p-3 sm:p-5 flex flex-col flex-1">
          <span className="flex items-start justify-between gap-2 mb-1">
            <span className="font-serif text-sm sm:text-lg text-foreground line-clamp-1">{product.name}</span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-muted-foreground shrink-0 mt-1 transition-transform duration-300",
                isExpanded && "rotate-180"
              )}
            />
          </span>

          <span className={cn("block text-xs sm:text-sm text-muted-foreground mb-3", !isExpanded && "line-clamp-2")}>
            {product.description}
          </span>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
              >
                <MapPin className="w-3.5 h-3.5 shrink-0 text-gold" />
                Retrait au salon à Bonamoussadi, Douala
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </button>

      <div className="px-3 pb-3 sm:px-5 sm:pb-5 flex flex-col gap-2">
        <span className="font-medium text-foreground text-sm sm:text-base">{product.price ?? "Prix sur demande"}</span>
        <WhatsAppLinkButton
          message={`Bonjour Halyd's Secret, je suis intéressé(e) par : ${product.name}.`}
          variant="gold-outline"
          size="sm"
          className="w-full text-xs sm:text-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Commander
        </WhatsAppLinkButton>
      </div>
    </motion.div>
  )
}
