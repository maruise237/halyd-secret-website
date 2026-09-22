"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"
import { BookingDialog } from "./booking-dialog"
import { WHATSAPP_INTENTS } from "@/lib/contact"

const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "Boutique", id: "boutique" },
  { label: "Académie", id: "academie" },
  { label: "Réalisations", id: "realisations" },
  { label: "À propos", id: "apropos" },
  { label: "Contact", id: "contact" },
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4">
      <nav
        className="mx-auto max-w-[calc(100vw-1.5rem)] sm:max-w-fit px-3 sm:px-6 lg:px-8 backdrop-blur-md rounded-lg animate-scale-fade-in bg-[rgba(255,255,255,0.85)] border border-[rgba(255,255,255,0.32)]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}
      >
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-8 h-14 sm:h-[68px]">
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 -ml-2 text-foreground/80 hover:text-foreground boty-transition shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 min-w-0">
            <span className="font-serif text-base sm:text-xl lg:text-2xl tracking-wide text-foreground truncate">
              Halyd&apos;s Secret
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.id)
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center ml-auto">
            <BookingDialog intent={WHATSAPP_INTENTS.rdv} size="default">
              <MessageCircle className="w-4 h-4" />
              Prendre RDV
            </BookingDialog>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center ml-auto shrink-0">
            <BookingDialog intent={WHATSAPP_INTENTS.rdv} size="sm" className="text-xs px-3">
              <MessageCircle className="w-3.5 h-3.5" />
              RDV
            </BookingDialog>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden boty-transition ${
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition"
                onClick={(e) => {
                  e.preventDefault()
                  setIsMenuOpen(false)
                  scrollToSection(link.id)
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
