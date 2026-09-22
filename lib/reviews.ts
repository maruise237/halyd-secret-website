export type GoogleReview = {
  author: string
  rating: number
  relativeTime: string
  text: string
}

// Source : fiche Google Business "Halyd secret" (Institut de beauté, Douala).
export const GOOGLE_RATING = 5.0
export const GOOGLE_REVIEW_COUNT = 2
export const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Halyd+secret+Ancienne+pharmacie+Kotto+Douala"

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    author: "Emmeriault Leunang",
    rating: 5,
    relativeTime: "il y a 2 ans",
    text: "Votre pédicure est unique et assez spéciale. Jamais je n'ai été autant choyée. Merci beaucoup, je n'hésiterais pas à vous recommander. À très bientôt !",
  },
  {
    author: "Moube Othniel",
    rating: 5,
    relativeTime: "il y a 1 an",
    text: "Le niveau de professionnalisme est du jamais vu. Tous les appareils qu'ils sortent, rien que pour ma pédicure… Merci vraiment !",
  },
]
