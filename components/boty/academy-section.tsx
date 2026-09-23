import { GraduationCap, MessageCircle } from "lucide-react"
import Image from "next/image"
import { BookingDialog } from "./booking-dialog"
import { WHATSAPP_INTENTS } from "@/lib/contact"

const PROGRAMS = ["Coiffure & pose de lace", "Makeup professionnel", "Manucure / Pédicure"]

export function AcademySection() {
  return (
    <section id="academie" className="py-16 sm:py-24 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto rounded-3xl overflow-hidden boty-shadow">
            <Image
              src="/images/fondatrice/academie-formation-pose-lace.jpg"
              alt="Formation pose de lace à l'académie Halyd's Secret"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
              <GraduationCap className="w-4 h-4 text-gold flex-shrink-0" />
              Formation en direct au salon
            </div>
          </div>

          <div className="flex flex-col justify-center">
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

            <div>
              <BookingDialog
                intent={WHATSAPP_INTENTS.academie}
                title="Rejoindre l'académie"
                description="Laissez vos coordonnées, on vous envoie le programme sur WhatsApp."
                size="lg"
              >
                <MessageCircle className="w-4 h-4" />
                Demander le programme
              </BookingDialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
