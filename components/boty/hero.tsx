"use client"

import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { WhatsAppButton } from "./whatsapp-button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background image */}
      <Image
        src="/images/realisations/realisation-coiffure-updo-bouclee-01.jpg"
        alt="Réalisation coiffure Halyd's Secret"
        fill
        priority
        className="object-cover object-top opacity-80"
      />

      {/* Dark gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 z-[5]" />

      {/* Content */}
      <div className="relative z-10 w-full pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="w-full lg:max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <span
              className="text-sm uppercase mb-6 block text-gold animate-blur-in opacity-0 tracking-[0.3em]"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Salon de beauté &amp; Académie
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-balance text-white">
              <span
                className="block animate-blur-in opacity-0 font-semibold"
                style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
              >
                Halyd&apos;s Secret
              </span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0 text-white/85 animate-blur-in opacity-0"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              Coiffure, makeup, manucure/pédicure, vente de perruques et produits lace. À Bonamoussadi, Douala.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-blur-in opacity-0"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <WhatsAppButton
                message="Bonjour Halyd's Secret, je souhaite prendre rendez-vous."
                className="inline-flex items-center justify-center gap-2 bg-gold text-black px-8 py-4 rounded-full text-sm tracking-wide boty-transition hover:bg-gold-hover"
              >
                <MessageCircle className="w-4 h-4" />
                Prendre RDV sur WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
