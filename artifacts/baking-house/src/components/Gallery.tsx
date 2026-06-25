import React from "react";
import { motion } from "framer-motion";

import img1 from "@assets/spiderman_cake_1782389413939.jpeg";
import img2 from "@assets/WhatsApp_Image_2026-06-20_at_10.01.08_PM_1782389413941.jpeg";
import img3 from "@assets/WhatsApp_Image_2026-06-20_at_10.01.09_PM_1782389413942.jpeg";
import img4 from "@assets/doughnut_1782389413938.jpeg";
import img5 from "@assets/cupcake_1782389413937.jpeg";
import img6 from "@assets/WhatsApp_Image_2026-06-20_at_10.03.03_PM_1782389413943.jpeg";
import img7 from "@assets/WhatsApp_Image_2026-06-20_at_10.03.04_PM_1782389413944.jpeg";
import img8 from "@assets/WhatsApp_Image_2026-06-20_at_10.07.39_PM_(3)_1782389413945.jpeg";

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">A Peek Into Our Bakes</h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with love and attention to detail. Every creation that leaves our kitchen is a little piece of art.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-primary/5 transition-all duration-300 group">
                <img 
                  src={src} 
                  alt={`Bakery creation ${index + 1}`} 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
