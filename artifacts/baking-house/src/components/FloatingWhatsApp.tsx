import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink("Hello The Baking House! I'd like to place an order.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:bg-[#128C7E] animate-bounce hover:animate-none"
      aria-label="Order on WhatsApp"
      data-testid="floating-whatsapp-btn"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
