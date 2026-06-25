import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

// Assets
import cakeImage from "@assets/spiderman_cake_1782389413939.jpeg";
import cupcakeImage from "@assets/cupcake_1782389413937.jpeg";
import doughnutImage from "@assets/doughnut_1782389413938.jpeg";
import hamperImage from "@assets/WhatsApp_Image_2026-06-20_at_10.03.04_PM_1782389413944.jpeg";
import video1 from "@assets/WhatsApp_Video_2026-06-25_at_5.45.37_PM_1782390195355.mp4";
import video2 from "@assets/WhatsApp_Video_2026-06-25_at_5.45.39_PM_1782390195356.mp4";

export default function ProductMenu() {
  const products = [
    {
      id: "cakes",
      name: "Celebration Cakes",
      description: "Beautifully designed custom cakes for birthdays, anniversaries, and special moments.",
      image: cakeImage,
      hasRealImage: true
    },
    {
      id: "cupcakes",
      name: "Assorted Cupcakes",
      description: "Soft, fluffy cupcakes topped with creamy frosting in various delightful flavours.",
      image: cupcakeImage,
      hasRealImage: true
    },
    {
      id: "tea-cakes",
      name: "Classic Tea Cakes",
      description: "Perfectly baked soft tea cakes to accompany your evening brew.",
      image: null,
      video: video1,
      hasRealImage: false
    },
    {
      id: "cookies",
      name: "Gourmet Cookies",
      description: "Chunky, chewy, and loaded with chocolate chips or your favourite mix-ins.",
      image: null,
      video: video2,
      hasRealImage: false
    },
    {
      id: "doughnuts",
      name: "Glazed Doughnuts",
      description: "Soft, pillowy eggless doughnuts dipped in rich chocolate and glazes.",
      image: doughnutImage,
      hasRealImage: true
    },
    {
      id: "brownies",
      name: "Fudgy Brownies",
      description: "Intensely chocolatey, dense, and perfectly fudgy eggless brownies.",
      image: null,
      video: video1,
      hasRealImage: false
    },
    {
      id: "cookie-dough-cups",
      name: "Cookie Dough Cups",
      description: "Decadent edible cookie dough served in convenient individual cups.",
      image: null,
      video: video2,
      hasRealImage: false
    },
    {
      id: "hampers",
      name: "Customised Hampers",
      description: "Beautifully curated dessert hampers perfect for gifting loved ones.",
      image: hamperImage,
      hasRealImage: true
    },
    {
      id: "muffins",
      name: "Fresh Muffins",
      description: "Bakery-style muffins with beautiful domed tops and soft crumb.",
      image: cupcakeImage, // Reusing cupcake image as requested
      hasRealImage: true
    }
  ];

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Our Eggless Menu</h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Explore our range of freshly baked, 100% eggless treats prepared with the finest ingredients.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-muted to-accent/20 relative">
                  {product.hasRealImage && product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (product as any).video ? (
                    <video
                      src={(product as any).video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-primary/20 font-serif text-2xl italic">
                      {product.name}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-foreground/70">
                    {product.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-2 pb-6">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                    data-testid={`button-enquire-${product.id}`}
                  >
                    <a href={getWhatsAppLink(`Hi! I'm interested in your ${product.name}. Could you share the details and pricing?`)} target="_blank" rel="noopener noreferrer">
                      Enquire Now
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
