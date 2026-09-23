// No custom domain was set at the time this was written. Set NEXT_PUBLIC_SITE_URL
// in Vercel's project env vars once a real domain is attached, or update the
// fallback below — everything (metadata, sitemap, robots.txt, schema.org) reads
// from this single constant.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://halydsecret.com"

export const SITE_NAME = "Halyd's Secret"
export const SITE_DESCRIPTION =
  "Salon de beauté et académie à Bonamoussadi, Douala : coiffure, makeup, manucure/pédicure, perruques et produits lace. Prenez rendez-vous sur WhatsApp."
