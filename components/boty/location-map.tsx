import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ADDRESS, GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_URL } from "@/lib/contact"
import { SectionHeading } from "./section-heading"

export function LocationMap() {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Nous trouver" title="Le salon à Bonamoussadi" />

        <div className="rounded-3xl overflow-hidden boty-shadow border border-border">
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            title="Localisation de Halyd's Secret sur Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-72 sm:h-96 border-0"
          />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-background p-5 sm:p-6">
            <div className="flex items-start gap-2 text-sm text-foreground">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
              {ADDRESS}
            </div>
            <Button asChild variant="gold-outline" size="sm">
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                <Navigation className="w-4 h-4" />
                Itinéraire
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
