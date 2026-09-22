import { MapPin, Phone, MessageCircle } from "lucide-react"
import { ADDRESS, PHONE_DISPLAY, WHATSAPP_MESSAGES } from "@/lib/contact"
import { WhatsAppButton } from "./whatsapp-button"
import { Reveal } from "./reveal"

export function CTABanner() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col justify-center relative overflow-hidden min-h-[360px] sm:min-h-[400px] bg-gradient-to-br from-black via-[#1a1410] to-[#3d2c12]">
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

            <WhatsAppButton message={WHATSAPP_MESSAGES.rdv} size="lg">
              <MessageCircle className="w-4 h-4" />
              Écrire sur WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
