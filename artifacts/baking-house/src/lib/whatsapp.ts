export const WHATSAPP_NUMBER = "919876543210"; // Replace with real number
export const INSTAGRAM_HANDLE = "@thebakinghousee";

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
