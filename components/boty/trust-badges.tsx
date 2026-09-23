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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-8 sm:gap-y-10 lg:gap-x-0 lg:gap-y-0 divide-y divide-border sm:divide-y-0">
          {badges.map((badge, index) => (
            <Reveal
              key={badge.title}
              delayMs={index * 100}
              className={cn(
                "flex flex-col items-start py-8 sm:py-0 lg:py-10 lg:px-8",
                index > 0 && "lg:border-l lg:border-border"
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
