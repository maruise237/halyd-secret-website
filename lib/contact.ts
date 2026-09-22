export const WHATSAPP_NUMBER = "237698532002"
export const PHONE_DISPLAY = "+237 698 532 002"
export const ADDRESS = "Ancienne pharmacie Kotto, Bonamoussadi, Douala"

// Trailing sentence appended after the caller's name + phone in the booking dialog.
export const WHATSAPP_INTENTS = {
  rdv: "Je souhaite prendre rendez-vous.",
  academie: "Je souhaite avoir des informations sur les formations de l'académie.",
}

export function buildBookingMessage(name: string, phone: string, intent: string) {
  return `Bonjour Halyd's Secret, je m'appelle ${name} (${phone}). ${intent}`
}

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
