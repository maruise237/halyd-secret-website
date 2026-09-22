import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { PRODUCTS } from "@/lib/products"
import { BookingDialog } from "./booking-dialog"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

export function ProductGrid() {
  return (
    <section id="boutique" className="py-16 sm:py-24 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Boutique"
          title="Perruques & produits lace"
          description="Commandez directement sur WhatsApp — retrait au salon à Bonamoussadi."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {PRODUCTS.map((product, index) => (
            <Reveal
              key={product.id}
              delayMs={(index % 5) * 60}
              className="bg-background rounded-2xl sm:rounded-3xl overflow-hidden boty-shadow boty-transition hover:scale-[1.02] flex flex-col"
            >
              <div className="relative aspect-square bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="p-3 sm:p-5 flex flex-col flex-1">
                <h3 className="font-serif text-sm sm:text-lg text-foreground mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">
                  {product.description}
                </p>
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-foreground text-sm sm:text-base">
                    {product.price ?? "Prix sur demande"}
                  </span>
                  <BookingDialog
                    intent={`Je suis intéressé(e) par : ${product.name}.`}
                    variant="gold-outline"
                    size="sm"
                    className="w-full text-xs sm:text-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Commander
                  </BookingDialog>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
