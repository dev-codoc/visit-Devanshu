"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

interface MagneticButtonProps {
  text: string;
  primary?: boolean;
  onClick?: () => void;
}

export default function MagneticButton({
  text,
  primary = false,
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1,0.4)",
    });
  };

  return (
    <motion.button
      ref={buttonRef}
      data-cursor
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 font-medium transition-all duration-300 ${
        primary
          ? "bg-linear-to-r from-dark-900 to-dark-200 text-white backdrop-blur-xl hover:from-dark-800 hover:to-dark-100"
          : "border border-white/15 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10"
      }`}
    >
      {/* Glow */}
      <span
        className="
          absolute
          inset-0
          opacity-0
          blur-2xl
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-linear-to-r
          from-dark-900/30
          to-light-500/30
        "
      />

      {/* Text */}
      <span className="relative z-10">{text}</span>

      {/* Icon */}
      <motion.span
        className="relative z-10"
        initial={{ x: 0 }}
        whileHover={{ x: 6 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowRight size={18} />
      </motion.span>
    </motion.button>
  );
}