export const WHATSAPP_NUMBER = "233245052539";

export function createWhatsAppUrl(message = "Hello DataGuard, I would like to discuss data protection support for my organisation.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
