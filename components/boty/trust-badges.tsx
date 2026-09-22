import { Sparkles, GraduationCap, ShieldCheck, Heart } from "lucide-react"
import { Reveal } from "./reveal"

const badges = [
  {
    icon: Sparkles,
    title: "Équipe expérimentée",
    description: "Coiffure, makeup, manucure/pédicure",
  },
  {
    icon: GraduationCap,
    title: "Académie",
    description: "Formation professionnelle sur place",
  },
  {
    icon: ShieldCheck,
    title: "Produits de qualité",
    description: "Perruques et soins lace certifiés",
  },
  {
    icon: Heart,
    title: "Satisfaction client",
    description: "Un accueil soigné à chaque visite",
  },
]

export function TrustBadges() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {badges.map((badge, index) => (
            <Reveal
              key={badge.title}
              delayMs={index * 150}
              className="flex flex-col items-center justify-center text-center bg-card p-5 sm:p-6 lg:p-8 rounded-xl border border-border h-full"
            >
              <badge.icon className="text-gold mb-3 sm:mb-4 size-8 sm:size-12" strokeWidth={1} />
              <h3 className="font-serif text-foreground mb-1.5 sm:mb-2 text-base sm:text-2xl leading-snug text-balance">
                {badge.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground text-balance">{badge.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
