import { Header } from "@/components/boty/header"
import { Hero } from "@/components/boty/hero"
import { TrustBadges } from "@/components/boty/trust-badges"
import { ServicesSection } from "@/components/boty/services-section"
import { ProductGrid } from "@/components/boty/product-grid"
import { AcademySection } from "@/components/boty/academy-section"
import { GallerySection } from "@/components/boty/gallery-section"
import { AboutFounderSection } from "@/components/boty/about-founder-section"
import { Testimonials } from "@/components/boty/testimonials"
import { FaqSection } from "@/components/boty/faq-section"
import { CTABanner } from "@/components/boty/cta-banner"
import { LocationMap } from "@/components/boty/location-map"
import { Footer } from "@/components/boty/footer"
import { StructuredData } from "@/components/boty/structured-data"

export default function HomePage() {
  return (
    <main>
      <StructuredData />
      <Header />
      <Hero />
      <TrustBadges />
      <ServicesSection />
      <ProductGrid />
      <AcademySection />
      <GallerySection />
      <AboutFounderSection />
      <Testimonials />
      <FaqSection />
      <CTABanner />
      <LocationMap />
      <Footer />
    </main>
  )
}
