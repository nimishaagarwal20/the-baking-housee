import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getInstagramDMLink } from "@/lib/whatsapp";

import cakeImage from "@assets/WhatsApp_Image_2026-06-20_at_10.01.09_PM_1782389413942.jpeg";
import blackCakeImage from "@assets/WhatsApp_Image_2026-06-20_at_10.07.39_PM_(3)_1782389413945.jpeg";
import cupcakeImage from "@assets/cupcake_1782389413937.jpeg";
import hamperImage from "@assets/WhatsApp_Image_2026-06-20_at_10.03.03_PM_1782389413943.jpeg";

export default function FeaturedProducts() {
  const featured = [
    {
      id: "feat-cake",
      name: "Signature Custom Cakes",
      tagline: "Designed exclusively for your celebration",
      image: cakeImage
    },
    {
      id: "feat-brownie",
      name: "Classic B&W Celebration Cakes",
      tagline: "Elegant and timeless designs",
      image: blackCakeImage
    },
    {
      id: "feat-cupcakes",
      name: "Assorted Dessert Boxes",
      tagline: "The perfect mix of sweetness",
      image: cupcakeImage
    },
    {
      id: "feat-hamper",
      name: "Balloon Gift Hampers",
      tagline: "A grand gesture of love",
      image: hamperImage
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Customer Favourites</h2>
            <div className="w-20 h-1 bg-primary/30 rounded-full"></div>
          </div>
          <Button 
            asChild 
            variant="ghost" 
            className="text-primary hover:bg-primary/10"
            data-testid="button-view-all-favourites"
          >
            <a href="#menu">View Full Menu &rarr;</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-serif text-xl font-bold mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">{item.name}</h3>
                <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{item.tagline}</p>
                <Button 
                  asChild
                  size="sm"
                  className="w-full bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-sm border border-white/30 opacity-0 group-hover:opacity-100 transition-all delay-150"
                  data-testid={`button-order-${item.id}`}
                >
                  <a href={getInstagramDMLink()} target="_blank" rel="noopener noreferrer">
                    Order Now
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
