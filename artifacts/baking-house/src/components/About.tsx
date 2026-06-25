import React from "react";
import { motion } from "framer-motion";
import { Heart, Leaf, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const highlights = [
    {
      icon: <Leaf className="w-6 h-6 text-primary" />,
      title: "100% Eggless",
      description: "Every single treat from our kitchen is completely eggless, without compromising on taste or texture."
    },
    {
      icon: <Star className="w-6 h-6 text-secondary" />,
      title: "Freshly Made",
      description: "We bake to order, ensuring that you receive the freshest, most delicious desserts every time."
    },
    {
      icon: <Heart className="w-6 h-6 text-accent" />,
      title: "Customised With Love",
      description: "Each order is handcrafted with personal attention, making your celebrations uniquely yours."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">About The Baking Housee</h2>
            <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to <strong className="text-primary font-medium">The Baking Housee by Tanisha Agarwal</strong>. 
              We are a premium homegrown bakery dedicated to creating beautiful, 100% eggless desserts. 
              What started as a passion project has grown into a small business built on love, quality ingredients, 
              and the joy of making your special moments even sweeter. From custom cakes to beautiful gift hampers, 
              every item is handcrafted to bring a smile to your face.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
