"use client"

import { MapPin, Phone, MessageCircle } from "lucide-react"
import { ADDRESS, PHONE_DISPLAY } from "@/lib/contact"
import { BookingDialog } from "./booking-dialog"
import { SALON_SERVICES } from "@/lib/salon-services"

const QUICK_LINKS = [
  { label: "Services", id: "services" },
  { label: "Boutique", id: "boutique" },
  { label: "Académie", id: "academie" },
  { label: "Réalisations", id: "realisations" },
  { label: "À propos", id: "apropos" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-card pt-20 pb-10 relative overflow-hidden scroll-mt-24">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <span className="font-serif text-[120px] sm:text-[160px] md:text-[220px] font-bold text-black/5 whitespace-nowrap leading-none">
          Halyd&apos;s Secret
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="font-serif text-3xl text-foreground mb-4">Halyd&apos;s Secret</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Salon de beauté &amp; académie — coiffure, makeup, manucure/pédicure, perruques et produits lace.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-medium text-foreground mb-4">Le salon</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-muted-foreground hover:text-foreground boty-transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="font-medium text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                {ADDRESS}
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                {PHONE_DISPLAY}
              </li>
              <li className="pt-2">
                <BookingDialog services={SALON_SERVICES} size="sm">
                  <MessageCircle className="w-4 h-4" />
                  Écrire sur WhatsApp
                </BookingDialog>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border/50">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Halyd&apos;s Secret. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
