import { Scissors, Palette, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type SalonService = {
  id: string
  icon: LucideIcon
  title: string
  description: string
  intent: string
}

export const SALON_SERVICES: SalonService[] = [
  {
    id: "coiffure",
    icon: Scissors,
    title: "Coiffure Femme",
    description: "Pose de perruques, tissage, coupe, coiffage et pose de lace frontale.",
    intent: "Je souhaite prendre rendez-vous pour la coiffure.",
  },
  {
    id: "makeup",
    icon: Palette,
    title: "Makeup",
    description: "Maquillage jour, soirée et mariée, réalisé par notre équipe.",
    intent: "Je souhaite prendre rendez-vous pour un maquillage.",
  },
  {
    id: "manucure",
    icon: Sparkles,
    title: "Manucure / Pédicure",
    description: "Pose de vernis, nail art et soins des mains et des pieds.",
    intent: "Je souhaite prendre rendez-vous pour une manucure/pédicure.",
  },
]
