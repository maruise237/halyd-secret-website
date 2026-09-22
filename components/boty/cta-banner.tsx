"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, MessageCircle } from "lucide-react"
import { ADDRESS, PHONE_DISPLAY } from "@/lib/contact"
import { WhatsAppButton } from "./whatsapp-button"

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
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          ref={bannerRef}
          className={`rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col justify-center relative overflow-hidden min-h-[360px] sm:min-h-[400px] bg-gradient-to-br from-black via-[#1a1410] to-[#3d2c12] transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative z-10 text-left max-w-2xl">
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 font-serif">
              Réservez votre moment
            </h3>
            <h3 className="text-xl sm:text-2xl md:text-3xl text-gold mb-6 sm:mb-8 font-serif">
              chez Halyd&apos;s Secret
            </h3>

            <div className="flex flex-col items-start gap-3 sm:gap-4 mb-8">
              <div className="flex items-center gap-3 text-white/90">
                <MapPin className="w-5 h-5 flex-shrink-0" strokeWidth={1} />
                <span className="text-sm sm:text-base">{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <Phone className="w-5 h-5 flex-shrink-0" strokeWidth={1} />
                <span className="text-sm sm:text-base">{PHONE_DISPLAY}</span>
              </div>
            </div>

            <WhatsAppButton message="Bonjour Halyd's Secret, je souhaite prendre rendez-vous." size="lg">
              <MessageCircle className="w-4 h-4" />
              Écrire sur WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  )
}
