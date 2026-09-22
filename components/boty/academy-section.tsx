"use client"

import { GraduationCap, MessageCircle } from "lucide-react"
import Image from "next/image"
import { WhatsAppButton } from "./whatsapp-button"

const PROGRAMS = ["Coiffure & pose de lace", "Makeup professionnel", "Manucure / Pédicure"]

export function AcademySection() {
  return (
    <section id="academie" className="py-24 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden boty-shadow">
            <Image
              src="/images/realisations/realisation-pose-perruque-frontale-01.jpg"
              alt="Formation pose de lace à l'académie Halyd's Secret"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-sm tracking-[0.3em] uppercase text-gold mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Académie
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground mb-6 text-balance">
              Devenez professionnelle de la beauté
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              L&apos;académie Halyd&apos;s Secret forme aux métiers de la coiffure, du maquillage et de la manucure,
              directement au sein du salon, au contact de professionnelles en exercice.
            </p>

            <ul className="space-y-3 mb-10">
              {PROGRAMS.map((program) => (
                <li key={program} className="flex items-center gap-3 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {program}
                </li>
              ))}
            </ul>

            <WhatsAppButton
              message="Bonjour Halyd's Secret, je souhaite avoir des informations sur les formations de l'académie."
              className="inline-flex items-center gap-2 bg-gold text-black px-8 py-4 rounded-full text-sm tracking-wide boty-transition hover:bg-gold-hover"
            >
              <MessageCircle className="w-4 h-4" />
              Demander le programme sur WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  )
}
