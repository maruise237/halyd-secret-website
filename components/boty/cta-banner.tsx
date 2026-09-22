"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { MapPin, Phone, MessageCircle } from "lucide-react"
import { ADDRESS, PHONE_DISPLAY, whatsappLink } from "@/lib/contact"

export function CTABanner() {
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (bannerRef.current) observer.observe(bannerRef.current)
    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current)
    }
  }, [])

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={bannerRef}
          className={`rounded-3xl p-12 md:p-16 flex flex-col justify-center relative overflow-hidden min-h-[400px] transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Image
            src="/images/realisations/realisation-coiffure-raide-glam-01.jpg"
            alt="Halyd's Secret"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0 backdrop-blur-[8px] bg-black/40"
            style={{
              maskImage: "linear-gradient(to right, black 0%, black 45%, transparent 65%)",
              WebkitMaskImage: "linear-gradient(to right, black 0%, black 45%, transparent 65%)",
            }}
          />

          <div className="relative z-10 text-left max-w-2xl">
            <h3 className="text-4xl md:text-5xl text-white mb-4 lg:text-5xl font-serif">Réservez votre moment</h3>
            <h3 className="text-2xl md:text-3xl text-white/80 mb-8 font-serif">chez Halyd&apos;s Secret</h3>

            <div className="flex flex-col items-start gap-4 mb-8">
              <div className="flex items-center gap-3 text-white/90">
                <MapPin className="w-5 h-5 flex-shrink-0" strokeWidth={1} />
                <span className="text-base">{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <Phone className="w-5 h-5 flex-shrink-0" strokeWidth={1} />
                <span className="text-base">{PHONE_DISPLAY}</span>
              </div>
            </div>

            <a
              href={whatsappLink("Bonjour Halyd's Secret, je souhaite prendre rendez-vous.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-black px-8 py-4 rounded-full text-sm tracking-wide boty-transition hover:bg-gold-hover"
            >
              <MessageCircle className="w-4 h-4" />
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
