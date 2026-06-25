"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Mouse } from "lucide-react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-10 left-1/2 z-40 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            {/* Mouse */}

            <div className="relative flex h-14 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-xl">
              {/* Wheel */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                }}
                className="h-2.5 w-1 rounded-full bg-white"
              />
            </div>

            {/* Text */}

            <motion.p
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="text-xs uppercase tracking-[0.4em] text-zinc-400"
            >
              Scroll to Explore
            </motion.p>

            {/* Arrow */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="text-white/60"
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}