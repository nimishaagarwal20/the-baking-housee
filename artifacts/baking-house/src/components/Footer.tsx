import React from "react";
import { Instagram } from "lucide-react";
import logoPath from "@assets/logo_1782389310392.jpeg";
import { INSTAGRAM_HANDLE } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-[#5B2A86] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={logoPath} 
                alt="The Baking House Logo" 
                className="w-16 h-16 rounded-full object-cover bg-white p-1"
              />
              <div>
                <h3 className="font-serif font-bold text-2xl text-white">The Baking House</h3>
                <p className="text-white/70 text-sm tracking-wider uppercase">By Tanisha Agarwal</p>
              </div>
            </div>
            <p className="text-white/80 max-w-sm mb-6 leading-relaxed">
              100% Eggless Homegrown Bakery. Handcrafted with love, perfect for every celebration and everyday indulgence.
            </p>
            <div className="flex gap-4">
              <a 
                href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-[#5B2A86] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-white/80 hover:text-accent transition-colors">Our Menu</a></li>
              <li><a href="#custom-orders" className="text-white/80 hover:text-accent transition-colors">Custom Orders</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-accent">Our Products</h4>
            <ul className="space-y-3">
              <li className="text-white/80">Custom Cakes</li>
              <li className="text-white/80">Cupcakes & Muffins</li>
              <li className="text-white/80">Fudgy Brownies</li>
              <li className="text-white/80">Glazed Doughnuts</li>
              <li className="text-white/80">Gift Hampers</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © 2026 The Baking House by Tanisha Agarwal. All rights reserved.
          </p>
          <p className="text-white/60 text-sm text-center md:text-right">
            Made with love
          </p>
        </div>
      </div>
    </footer>
  );
}
