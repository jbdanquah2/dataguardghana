import type { ConsultationInput } from "./validation";

export const WHATSAPP_NUMBER = "233245052539";

export function createWhatsAppUrl(data: ConsultationInput) {
  const lines = [
    "Hello DataGuard Ghana,",
    "",
    "I would like to make a consultation enquiry.",
    "",
    `Full name: ${data.fullName}`,
    `Organisation: ${data.organisationName}`,
    data.email ? `Work email: ${data.email}` : null,
    `Phone: ${data.phone}`,
    `Organisation type: ${data.organisationType}`,
    data.employeeCount ? `Approximate employees: ${data.employeeCount}` : null,
    `Service required: ${data.service}`,
    "",
    "Message:",
    data.message,
  ].filter((line): line is string => line !== null);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
