import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getWhatsAppLink } from "@/lib/whatsapp";
import cakeImage from "@assets/spiderman_cake_1782389413939.jpeg";
import pinkCakeImage from "@assets/WhatsApp_Image_2026-06-20_at_10.01.09_PM_1782389413942.jpeg";
import doughnutImage from "@assets/doughnut_1782389413938.jpeg";

export default function Hero() {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-background via-accent/20 to-muted/40">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">100% Eggless</Badge>
              <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">Homegrown Bakery</Badge>
              <Badge variant="secondary" className="bg-accent/50 text-foreground hover:bg-accent/60">Freshly Baked</Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Custom Orders Available</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-foreground leading-tight">
              Freshly Baked <span className="text-primary italic">100% Eggless</span> Treats for Every Celebration
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Handcrafted cakes, cupcakes, brownies, cookies, doughnuts, muffins, tea cakes, cookie dough cups, and customised hampers made with love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToMenu}
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base shadow-md"
                data-testid="button-hero-menu"
              >
                View Menu
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-primary/20 bg-background hover:bg-primary/5 text-primary h-14 px-8 text-base shadow-sm"
                data-testid="button-hero-whatsapp"
              >
                <a href={getWhatsAppLink("Hello The Baking Housee! I'd love to know more about your menu.")} target="_blank" rel="noopener noreferrer">
                  Order on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] w-full hidden md:block"
          >
            <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-background z-20 hover:scale-[1.02] transition-transform duration-500">
              <img src={cakeImage} alt="Custom themed cake" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-10 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-xl border-4 border-background z-30 hover:scale-[1.02] transition-transform duration-500">
              <img src={pinkCakeImage} alt="Pink aesthetic cake" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-20 left-10 w-2/5 h-2/5 rounded-full overflow-hidden shadow-lg border-4 border-background z-10 hover:scale-[1.02] transition-transform duration-500">
              <img src={doughnutImage} alt="Fresh doughnuts" className="w-full h-full object-cover" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
