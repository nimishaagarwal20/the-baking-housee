export const WHATSAPP_NUMBER = "917017099300";
export const INSTAGRAM_HANDLE = "@thebakinghousee";
export const INSTAGRAM_URL = "https://www.instagram.com/thebakinghousee";

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
