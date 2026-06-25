import { motion } from "framer-motion";
import { Instagram, Heart, ExternalLink } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/whatsapp";

import cake1 from "@assets/WhatsApp_Image_2026-06-20_at_10.01.09_PM_1782389413942.jpeg";
import cake2 from "@assets/spiderman_cake_1782389413939.jpeg";
import cake3 from "@assets/WhatsApp_Image_2026-06-20_at_10.07.39_PM_(3)_1782389413945.jpeg";
import donut from "@assets/doughnut_1782389413938.jpeg";
import cupcakes from "@assets/cupcake_1782389413937.jpeg";
import hamper1 from "@assets/WhatsApp_Image_2026-06-20_at_10.03.04_PM_1782389413944.jpeg";
import hamper2 from "@assets/WhatsApp_Image_2026-06-20_at_10.03.03_PM_1782389413943.jpeg";
import miniCake from "@assets/WhatsApp_Image_2026-06-20_at_10.01.08_PM_1782389413941.jpeg";

const posts = [
  { img: cake1, caption: "Pink dream cake for a special celebration", likes: 142 },
  { img: donut, caption: "Assorted chocolate doughnuts — made fresh!", likes: 198 },
  { img: cake2, caption: "Custom Spiderman birthday cake", likes: 231 },
  { img: hamper1, caption: "Personalised balloon hamper for Father's Day", likes: 176 },
  { img: cupcakes, caption: "Box of fresh muffins & cupcakes", likes: 215 },
  { img: cake3, caption: "Black & white celebration cake with custom toppers", likes: 189 },
  { img: hamper2, caption: "Bobo balloon hamper — perfect for gifting", likes: 267 },
  { img: miniCake, caption: "Princess mini cake with florals", likes: 153 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-20 bg-gradient-to-b from-[#EBD7F4]/30 to-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2.5 rounded-2xl bg-gradient-to-br from-[#8E44AD] to-[#F2CDEB]">
              <Instagram className="w-6 h-6 text-white" />
            </div>
            <span className="font-['Poppins'] text-[#8E44AD] font-semibold text-lg tracking-wide">
              {INSTAGRAM_HANDLE}
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#2C1B35] mb-3">
            Follow Our Sweet Journey
          </h2>
          <p className="font-['Poppins'] text-[#8E44AD]/80 text-base max-w-xl mx-auto">
            From custom cakes to festive hampers — follow us on Instagram for daily bakes, behind-the-scenes moments, and sweet inspiration.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              data-testid={`instagram-post-${i}`}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-md cursor-pointer block"
            >
              <img
                src={post.img}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1B35]/80 via-[#2C1B35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Heart className="w-4 h-4 text-[#F2CDEB] fill-[#F2CDEB]" />
                  <span className="text-white font-['Poppins'] text-xs font-medium">{post.likes}</span>
                </div>
                <p className="text-white font-['Poppins'] text-xs leading-snug line-clamp-2">
                  {post.caption}
                </p>
              </div>
              {/* Instagram icon badge */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 rounded-full p-1">
                  <Instagram className="w-3 h-3 text-[#8E44AD]" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-instagram-follow"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-['Poppins'] font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #8E44AD 0%, #C8A2C8 50%, #F2CDEB 100%)",
            }}
          >
            <Instagram className="w-4 h-4" />
            Follow {INSTAGRAM_HANDLE} on Instagram
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
          <p className="font-['Poppins'] text-[#8E44AD]/60 text-xs mt-3">
            Tag us in your bakes — we love seeing your moments!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
