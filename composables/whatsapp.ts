import { CONTACT } from './siteData'

export function buildWhatsAppLink(message: string) {
  const phone = CONTACT.phoneE164.replace('+', '')
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

