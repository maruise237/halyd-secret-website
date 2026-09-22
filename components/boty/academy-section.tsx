"use client"

import { GraduationCap, MessageCircle } from "lucide-react"
import Image from "next/image"
import { WhatsAppButton } from "./whatsapp-button"

const PROGRAMS = ["Coiffure & pose de lace", "Makeup professionnel", "Manucure / Pédicure"]

export function AcademySection() {
  return (
    <section id="academie" className="py-16 sm:py-24 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-secondary to-card p-8 sm:p-12 flex items-center justify-center min-h-[280px] sm:min-h-[360px]">
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden boty-shadow ring-1 ring-border rotate-[-3deg]">
              <Image
                src="/images/realisations/realisation-pose-perruque-frontale-01.jpg"
                alt="Formation pose de lace à l'académie Halyd's Secret"
                fill
                className="object-cover"
              />
            </div>
            <GraduationCap className="absolute top-6 right-6 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 text-gold" strokeWidth={1} />
          </div>

          <div>
            <span className="text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gold mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Académie
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground mb-5 sm:mb-6 text-balance">
              Devenez professionnelle de la beauté
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              L&apos;académie Halyd&apos;s Secret forme aux métiers de la coiffure, du maquillage et de la manucure,
              directement au sein du salon, au contact de professionnelles en exercice.
            </p>

            <ul className="space-y-3 mb-8 sm:mb-10">
              {PROGRAMS.map((program) => (
                <li key={program} className="flex items-center gap-3 text-foreground text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {program}
                </li>
              ))}
            </ul>

            <WhatsAppButton
              message="Bonjour Halyd's Secret, je souhaite avoir des informations sur les formations de l'académie."
              size="lg"
            >
              <MessageCircle className="w-4 h-4" />
              Demander le programme
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  )
}
