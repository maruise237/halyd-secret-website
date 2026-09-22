"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"
import { WhatsAppButton } from "./whatsapp-button"

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
    <header className="fixed top-0 left-0 z-50 px-4 pt-4">
      <nav
        className="w-fit px-6 lg:px-8 backdrop-blur-md rounded-lg py-0 my-0 animate-scale-fade-in bg-[rgba(255,255,255,0.7)] border border-[rgba(255,255,255,0.32)]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}
      >
        <div className="flex items-center gap-8 h-[68px]">
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground/80 hover:text-foreground boty-transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl tracking-wide text-foreground">Halyd&apos;s Secret</span>
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
          <div className="hidden lg:flex items-center gap-4">
            <WhatsAppButton
              message="Bonjour Halyd's Secret, je souhaite prendre rendez-vous."
              className="inline-flex items-center gap-2 bg-gold text-black px-5 py-2.5 rounded-full text-sm tracking-wide boty-transition hover:bg-gold-hover"
            >
              <MessageCircle className="w-4 h-4" />
              Prendre RDV
            </WhatsAppButton>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-4 ml-auto">
            <WhatsAppButton
              message="Bonjour Halyd's Secret, je souhaite prendre rendez-vous."
              className="inline-flex items-center gap-2 bg-gold text-black px-4 py-2 rounded-full text-xs tracking-wide boty-transition hover:bg-gold-hover"
            >
              <MessageCircle className="w-4 h-4" />
              RDV
            </WhatsAppButton>
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
