import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, ChefHat, Paintbrush, Gift, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "100% Eggless Bakery",
      description: "Pure vegetarian treats with zero compromise on taste, texture, or quality."
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary" />,
      title: "Homegrown With Love",
      description: "A small business pouring immense passion into every single bake."
    },
    {
      icon: <ChefHat className="w-8 h-8 text-primary" />,
      title: "Freshly Baked Goodness",
      description: "Made to order using the finest ingredients so you always get the freshest bakes."
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-secondary" />,
      title: "Customised Designs",
      description: "Personalised treats matching your themes, colors, and exact requirements."
    },
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: "Perfect for Gifting",
      description: "Thoughtfully curated hampers and boxes that make for unforgettable gifts."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-secondary" />,
      title: "Beautiful Presentation",
      description: "Because we believe you eat with your eyes first. Every treat looks as good as it tastes."
    }
  ];

  return (
    <section className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Why Choose The Baking Housee?</h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-primary/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
