import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INSTAGRAM_DM_URL } from "@/lib/whatsapp";

export default function FloatingInstagram() {
  const [showLabel, setShowLabel] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 80 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center"
        >
          <motion.button
            onHoverStart={() => setShowLabel(true)}
            onHoverEnd={() => setShowLabel(false)}
            onFocus={() => setShowLabel(true)}
            onBlur={() => setShowLabel(false)}
            onClick={() => window.open(INSTAGRAM_DM_URL, "_blank")}
            aria-label="Order via Instagram DM"
            className="flex items-center gap-0 group"
            style={{ outline: "none" }}
          >
            <AnimatePresence>
              {showLabel && (
                <motion.span
                  key="label"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden whitespace-nowrap bg-primary text-primary-foreground text-sm font-semibold px-4 py-3 rounded-l-xl shadow-lg"
                >
                  Order via DM
                </motion.span>
              )}
            </AnimatePresence>
            <div
              className="w-14 h-14 rounded-l-2xl flex items-center justify-center shadow-xl cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
