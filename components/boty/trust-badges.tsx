import { Sparkles, GraduationCap, ShieldCheck, Heart } from "lucide-react"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

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
    <section className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {badges.map((badge, index) => (
            <Reveal
              key={badge.title}
              delayMs={index * 100}
              className={cn(
                // translate-y-0 pins the reveal to a fade-only animation: this row sits
                // flush against the services section below it (no gap), so the default
                // slide-up-into-place transform would briefly poke into that section's
                // heading while animating, especially on a fast/momentum scroll.
                "flex flex-col items-start py-6 px-4 sm:px-6 lg:py-10 lg:px-8 border-border translate-y-0",
                index % 2 === 1 && "border-l",
                index >= 2 && "border-t lg:border-t-0",
                index === 2 && "lg:border-l"
              )}
            >
              <span className="flex items-center justify-center size-9 rounded-full bg-foreground text-background mb-4 sm:mb-5 shrink-0">
                <badge.icon className="size-4" strokeWidth={1.5} />
              </span>
              <h3 className="text-foreground font-medium mb-1.5 text-sm sm:text-base">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
