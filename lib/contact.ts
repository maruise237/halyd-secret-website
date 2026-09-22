export const WHATSAPP_NUMBER = "237698532002"
export const PHONE_DISPLAY = "+237 698 532 002"
export const ADDRESS = "Ancienne pharmacie Kotto, Bonamoussadi, Douala"
export const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Halyd+secret+Ancienne+pharmacie+Kotto+Douala&z=16&output=embed"

// Trailing sentence appended after the caller's name + phone in the booking dialog.
export const WHATSAPP_INTENTS = {
  rdv: "Je souhaite prendre rendez-vous.",
  academie: "Je souhaite avoir des informations sur les formations de l'académie.",
}

export function buildBookingMessage(name: string, phone: string, intent: string, slot?: string) {
  const slotSentence = slot ? ` Créneau souhaité : ${slot}.` : ""
  return `Bonjour Halyd's Secret, je m'appelle ${name} (${phone}). ${intent}${slotSentence}`
}

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
