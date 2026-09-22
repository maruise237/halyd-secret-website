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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <Reveal
              key={badge.title}
              delayMs={index * 150}
              className="bg-card p-6 lg:p-8 text-center rounded-xl border border-border"
            >
              <badge.icon className="text-gold mb-4 mx-auto size-12" strokeWidth={1} />
              <h3 className="font-serif text-foreground mb-2 text-2xl">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
