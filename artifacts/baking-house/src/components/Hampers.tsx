import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { openInstagramDM } from "@/lib/whatsapp";

import hamper1 from "@assets/WhatsApp_Image_2026-06-20_at_10.03.03_PM_1782389413943.jpeg";
import hamper2 from "@assets/WhatsApp_Image_2026-06-20_at_10.03.04_PM_1782389413944.jpeg";
import hamper3 from "@assets/cupcake_1782389413937.jpeg"; // Reusing an asset that looks like a box

export default function Hampers() {
  const hampers = [
    {
      id: "hamper-birthday",
      title: "Birthday Hampers",
      description: "Make birthdays extra special with our curated boxes of treats, balloons, and personalized messages.",
      image: hamper1,
    },
    {
      id: "hamper-festive",
      title: "Festive Hampers",
      description: "Celebrate festivals and occasions with our beautiful hampers filled with assorted signature bakes.",
      image: hamper2,
    },
    {
      id: "hamper-personalised",
      title: "Personalised Gift Hampers",
      description: "Create your own hamper by choosing your favourite desserts and presentation style.",
      image: hamper3,
    }
  ];

  return (
    <section id="hampers" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Customised Dessert Hampers</h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Give the gift of sweetness. Our handcrafted hampers are perfectly curated for birthdays, anniversaries, corporate gifting, and everything in between.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hampers.map((hamper, index) => (
            <motion.div
              key={hamper.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-square w-full overflow-hidden">
                  <img 
                    src={hamper.image} 
                    alt={hamper.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="bg-card">
                  <CardTitle className="font-serif text-xl text-primary">{hamper.title}</CardTitle>
                </CardHeader>
                <CardContent className="bg-card">
                  <CardDescription className="text-sm text-foreground/70">
                    {hamper.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="bg-card pt-0 pb-6">
                  <Button 
                    className="w-full"
                    data-testid={`button-customise-${hamper.id}`}
                    onClick={() => openInstagramDM(hamper.name)}
                  >
                    Customise a Hamper
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
