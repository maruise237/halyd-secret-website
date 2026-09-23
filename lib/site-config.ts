// No custom domain is attached yet, so this falls back to the live Vercel URL
// (real and reachable, unlike a placeholder). Set NEXT_PUBLIC_SITE_URL in
// Vercel's project env vars once a custom domain is attached, or update the
// fallback below — everything (metadata, sitemap, robots.txt, schema.org)
// reads from this single constant.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://halyd-secret-website.vercel.app"

export const SITE_NAME = "Halyd's Secret"
export const SITE_DESCRIPTION =
  "Salon de beauté et académie à Bonamoussadi, Douala : coiffure, makeup, manucure/pédicure, perruques et produits lace. Prenez rendez-vous sur WhatsApp."
