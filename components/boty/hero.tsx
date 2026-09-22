"use client"

import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { WhatsAppButton } from "./whatsapp-button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Ambient blurred backdrop — the source photo is low-res, so it's used only
          as a soft, intentionally blurred atmosphere, never as a sharp focal image. */}
      <Image
        src="/images/realisations/realisation-coiffure-glam-brune-01.jpg"
        alt=""
        fill
        priority
        aria-hidden
        className="object-cover scale-125 blur-2xl opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-[#2a1f0f] z-[1]" />

      {/* Content */}
      <div className="relative z-10 w-full pt-28 pb-20 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
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
                className="flex justify-center lg:justify-start animate-blur-in opacity-0"
                style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
              >
                <WhatsAppButton message="Bonjour Halyd's Secret, je souhaite prendre rendez-vous." size="lg">
                  <MessageCircle className="w-4 h-4" />
                  Prendre RDV sur WhatsApp
                </WhatsAppButton>
              </div>
            </div>

            {/* Crisp framed photo — kept at a modest, near-native size so it stays sharp */}
            <div className="hidden lg:flex justify-end">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden boty-shadow ring-1 ring-white/10">
                <Image
                  src="/images/realisations/realisation-coiffure-glam-brune-01.jpg"
                  alt="Réalisation coiffure Halyd's Secret"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
