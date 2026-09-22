"use client"

import { useEffect, useRef, useState } from "react"
import { Scissors, Palette, Sparkles, MessageCircle } from "lucide-react"
import { WhatsAppButton } from "./whatsapp-button"

const SERVICES = [
  {
    icon: Scissors,
    title: "Coiffure Femme",
    description: "Pose de perruques, tissage, coupe, coiffage et pose de lace frontale.",
    message: "Bonjour Halyd's Secret, je souhaite prendre rendez-vous pour la coiffure.",
  },
  {
    icon: Palette,
    title: "Makeup",
    description: "Maquillage jour, soirée et mariée, réalisé par notre équipe.",
    message: "Bonjour Halyd's Secret, je souhaite prendre rendez-vous pour un maquillage.",
  },
  {
    icon: Sparkles,
    title: "Manucure / Pédicure",
    description: "Pose de vernis, nail art et soins des mains et des pieds.",
    message: "Bonjour Halyd's Secret, je souhaite prendre rendez-vous pour une manucure/pédicure.",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section id="services" className="py-24 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-gold mb-4 block">Nos prestations</span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-foreground mb-6 text-balance">
            Services du salon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un salon complet pour prendre soin de vous, sur rendez-vous.
          </p>
        </div>

        <div ref={sectionRef} className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card border border-border rounded-3xl p-8 boty-transition hover:scale-[1.02] boty-shadow transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-6">
                <service.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <WhatsAppButton
                message={service.message}
                className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-hover boty-transition"
              >
                <MessageCircle className="w-4 h-4" />
                Prendre RDV sur WhatsApp
              </WhatsAppButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
