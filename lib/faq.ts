export type FaqItem = { question: string; answer: string }

// Single source of truth for the visible FAQ section AND its FAQPage schema —
// only facts already established elsewhere on the site (no invented hours,
// prices or payment methods).
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Comment prendre rendez-vous chez Halyd's Secret ?",
    answer:
      "Directement sur WhatsApp au +237 698 532 002, ou via le bouton « Prendre RDV » du site : choisissez un service, une date et une heure indicatives, puis vos coordonnées. La disponibilité exacte se confirme ensuite avec vous sur WhatsApp.",
  },
  {
    question: "Où se trouve le salon ?",
    answer: "À l'ancienne pharmacie Kotto, à Bonamoussadi, Douala, Cameroun.",
  },
  {
    question: "Quels services propose Halyd's Secret ?",
    answer:
      "La coiffure (pose de perruques, tissage, coupe, coiffage, pose de lace frontale), le maquillage (jour, soirée, mariée) et la manucure/pédicure.",
  },
  {
    question: "Vendez-vous des perruques et des produits lace ?",
    answer:
      "Oui, la boutique du salon propose des perruques lace ainsi que des produits d'entretien et de pose : adhésifs, sprays et kits d'outils.",
  },
  {
    question: "L'académie Halyd's Secret forme-t-elle aux métiers de la beauté ?",
    answer:
      "Oui, l'académie forme aux métiers de la coiffure, du maquillage et de la manucure/pédicure, directement au salon et au contact de professionnelles en exercice.",
  },
  {
    question: "Où suivre Halyd's Secret sur les réseaux sociaux ?",
    answer: "Sur Instagram, Facebook et Threads, au nom @halyd_secret, pour découvrir les dernières réalisations.",
  },
]
