import React from "react";
import { MapPin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink, INSTAGRAM_HANDLE, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-card rounded-3xl overflow-hidden shadow-xl border border-primary/10">
          <div className="grid md:grid-cols-2">
            
            <div className="p-10 bg-primary text-primary-foreground flex flex-col justify-center">
              <h2 className="text-3xl font-bold font-serif mb-6">Order Fresh Eggless Bakes</h2>
              <p className="text-primary-foreground/80 mb-10 leading-relaxed">
                We'd love to bake for your next celebration. Get in touch with us to place an order or enquire about our menu!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">WhatsApp Us</p>
                    <p className="font-semibold text-lg">+{WHATSAPP_NUMBER}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">Follow Us</p>
                    <p className="font-semibold text-lg">{INSTAGRAM_HANDLE}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">Location</p>
                    <p className="font-semibold text-lg">Moradabad, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 flex flex-col justify-center items-center text-center bg-card">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <HeartIcon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4">Let's connect!</h3>
              <p className="text-muted-foreground mb-8">
                The quickest way to reach us is through WhatsApp or Instagram DMs. We try to respond as soon as possible!
              </p>
              
              <div className="flex flex-col w-full gap-4">
                <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                  <a href={getWhatsAppLink("Hello! I'd like to place an order.")} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Order on WhatsApp
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="w-full border-primary/20 text-primary hover:bg-primary/5">
                  <a href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5 mr-2" />
                    Follow on Instagram
                  </a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
