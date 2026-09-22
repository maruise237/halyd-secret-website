export const WHATSAPP_NUMBER = "237698532002"
export const PHONE_DISPLAY = "+237 698 532 002"
export const ADDRESS = "Ancienne pharmacie Kotto, Bonamoussadi, Douala"

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
