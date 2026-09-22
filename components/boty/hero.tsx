"use client"

import { Calendar } from "lucide-react"
import { BookingDialog } from "./booking-dialog"
import { GridMotion, type GridMotionItem } from "./grid-motion"
import { SALON_SERVICES } from "@/lib/salon-services"

const BRAND_TILE = (text: string) => (
  <span className="font-serif text-gold text-lg sm:text-xl tracking-wide">{text}</span>
)

const GRID_ITEMS: GridMotionItem[] = [
  "/images/realisations/realisation-coiffure-longue-lisse-01.jpg",
  "/images/produits/produit-perruque-lace-bob-brune.jpg",
  "/images/realisations/realisation-coiffure-raide-lunettes-01.jpg",
  BRAND_TILE("Halyd's Secret"),
  "/images/produits/produit-perruque-lace-bob-frange.jpg",
  "/images/realisations/realisation-pose-perruque-frontale-01.jpg",
  "/images/produits/produit-hair-wax-stick.jpg",

  "/images/realisations/realisation-coiffure-glam-brune-01.jpg",
  "/images/produits/produit-lace-cleaner.jpg",
  BRAND_TILE("Coiffure & Makeup"),
  "/images/realisations/realisation-maquillage-coiffure-updo-01.jpg",
  "/images/produits/produit-lace-cleaner-glue-remover-duo.jpg",
  "/images/realisations/realisation-coiffure-bouclee-cuivree-01.jpg",
  "/images/produits/produit-kit-outils-pose-lace.jpg",

  "/images/realisations/realisation-coiffure-meches-lunettes-01.jpg",
  BRAND_TILE("Manucure & Pédicure"),
  "/images/produits/produit-etui-logo-halyds-secret.jpg",
  "/images/realisations/realisation-manucure-vernis-fonce-01.jpg",
  "/images/produits/produit-gamme-soins-cheveux.jpg",
  "/images/realisations/realisation-coiffure-bouclee-afro-01.jpg",
  "/images/produits/produit-adhesive-skin-protector.jpg",

  BRAND_TILE("Perruques & Lace"),
  "/images/realisations/realisation-coiffure-raide-lunettes-02.jpg",
  "/images/produits/produit-application-lace-spray.jpg",
  "/images/realisations/realisation-maquillage-mariee-duo-01.jpg",
  "/images/produits/produit-perruque-longue-ombree-01.jpg",
  "/images/realisations/realisation-coiffure-raide-glam-01.jpg",
  "/images/produits/produit-perruque-longue-ombree-02.jpg",
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <GridMotion items={GRID_ITEMS} gradientColor="black" />
      </div>

      {/* Dark gradient — darkest behind the title (bottom on mobile, left on
          desktop) so the heading stays legible over the moving grid. */}
      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/80 to-black/40 z-[5] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full pt-28 pb-20 sm:pt-32 sm:pb-24 pointer-events-none">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center lg:text-left lg:mx-0 lg:ml-16 xl:ml-24">
          <span
            className="text-xs sm:text-sm uppercase mb-5 sm:mb-6 block text-gold animate-blur-in opacity-0 tracking-[0.25em] sm:tracking-[0.3em]"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Salon de beauté &amp; Académie
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.1] mb-6 text-balance text-white">
            <span
              className="block animate-blur-in opacity-0 font-semibold"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Halyd&apos;s Secret
            </span>
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto lg:mx-0 text-white/85 animate-blur-in opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Coiffure, makeup, manucure/pédicure, vente de perruques et produits lace. À Bonamoussadi, Douala.
          </p>
          <div
            className="flex justify-center lg:justify-start animate-blur-in opacity-0 pointer-events-auto"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <BookingDialog services={SALON_SERVICES} size="lg">
              <Calendar className="w-4 h-4" />
              Prendre RDV sur WhatsApp
            </BookingDialog>
          </div>
        </div>
      </div>
    </section>
  )
}
