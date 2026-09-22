export const WHATSAPP_NUMBER = "237698532002"
export const PHONE_DISPLAY = "+237 698 532 002"
export const ADDRESS = "Ancienne pharmacie Kotto, Bonamoussadi, Douala"

export const WHATSAPP_MESSAGES = {
  rdv: "Bonjour Halyd's Secret, je souhaite prendre rendez-vous.",
}

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
