import { Scissors, Palette, Sparkles, MessageCircle } from "lucide-react"
import { BookingDialog } from "./booking-dialog"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

const SERVICES = [
  {
    icon: Scissors,
    title: "Coiffure Femme",
    description: "Pose de perruques, tissage, coupe, coiffage et pose de lace frontale.",
    intent: "Je souhaite prendre rendez-vous pour la coiffure.",
  },
  {
    icon: Palette,
    title: "Makeup",
    description: "Maquillage jour, soirée et mariée, réalisé par notre équipe.",
    intent: "Je souhaite prendre rendez-vous pour un maquillage.",
  },
  {
    icon: Sparkles,
    title: "Manucure / Pédicure",
    description: "Pose de vernis, nail art et soins des mains et des pieds.",
    intent: "Je souhaite prendre rendez-vous pour une manucure/pédicure.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nos prestations"
          title="Services du salon"
          description="Un salon complet pour prendre soin de vous, sur rendez-vous."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.title}
              delayMs={index * 150}
              className="bg-card border border-border rounded-3xl p-6 sm:p-8 boty-transition hover:scale-[1.02] boty-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-6">
                <service.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">{service.description}</p>
              <BookingDialog intent={service.intent} variant="gold-outline" size="sm">
                <MessageCircle className="w-4 h-4" />
                Prendre RDV
              </BookingDialog>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
