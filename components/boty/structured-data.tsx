import { ADDRESS, GOOGLE_MAPS_URL, PHONE_DISPLAY, WHATSAPP_INTENTS, WHATSAPP_NUMBER } from "@/lib/contact"
import { FAQ_ITEMS } from "@/lib/faq"
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS } from "@/lib/reviews"
import { SALON_SERVICES } from "@/lib/salon-services"
import { SITE_NAME, SITE_URL } from "@/lib/site-config"
import { SOCIAL_LINKS } from "@/lib/social-links"

// One JSON-LD graph for the whole (single-page) site: a BeautySalon business
// entity — carrying the real Google rating/reviews and service list already
// shown on the page — plus the FAQPage that mirrors the visible FAQ section
// word for word, as Google's structured-data guidelines require.
function buildStructuredData() {
  const business = {
    "@type": "BeautySalon",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/images/logo/halyds-secret-logo.jpg`,
    telephone: PHONE_DISPLAY,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS,
      addressLocality: "Douala",
      addressRegion: "Littoral",
      addressCountry: "CM",
    },
    hasMap: GOOGLE_MAPS_URL,
    sameAs: SOCIAL_LINKS.map((social) => social.href),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GOOGLE_RATING,
      reviewCount: GOOGLE_REVIEW_COUNT,
    },
    review: GOOGLE_REVIEWS.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.author },
      reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: 5 },
      reviewBody: review.text,
    })),
    makesOffer: [
      ...SALON_SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Académie Halyd's Secret",
          description: WHATSAPP_INTENTS.academie,
          serviceType: "Formation professionnelle en coiffure, maquillage et manucure/pédicure",
        },
      },
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: `https://wa.me/${WHATSAPP_NUMBER}`,
      name: "Prendre rendez-vous sur WhatsApp",
    },
  }

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  return {
    "@context": "https://schema.org",
    "@graph": [business, faqPage],
  }
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData()) }}
    />
  )
}
