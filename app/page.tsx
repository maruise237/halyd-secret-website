import { Header } from "@/components/boty/header"
import { Hero } from "@/components/boty/hero"
import { TrustBadges } from "@/components/boty/trust-badges"
import { ServicesSection } from "@/components/boty/services-section"
import { ProductGrid } from "@/components/boty/product-grid"
import { AcademySection } from "@/components/boty/academy-section"
import { GallerySection } from "@/components/boty/gallery-section"
import { AboutFounderSection } from "@/components/boty/about-founder-section"
import { CTABanner } from "@/components/boty/cta-banner"
import { Footer } from "@/components/boty/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />
      <ServicesSection />
      <ProductGrid />
      <AcademySection />
      <GallerySection />
      <AboutFounderSection />
      <CTABanner />
      <Footer />
    </main>
  )
}
