"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function AnimatedBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    // Cinematic slow zoom
    gsap.to(videoRef.current, {
      scale: 1.15,
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 80;
      const y = (e.clientY / window.innerHeight - 0.5) * 80;

      gsap.to(blobRef.current, {
        x,
        y,
        duration: 1.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden -z-10"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Aurora Gradient Blob */}
      <motion.div
        ref={blobRef}
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-162.5
          w-162.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-linear-to-r
          from-violet-500/20
          via-fuchsia-500/20
          to-cyan-500/20
          blur-[170px]
        "
      />

      {/* Top Light */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          top-0
          left-1/2
          h-75
          w-75
          -translate-x-1/2
          rounded-full
          bg-cyan-500/20
          blur-[120px]
        "
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          -bottom-30
          left-1/2
          h-112.5
          w-175
          -translate-x-1/2
          rounded-full
          bg-violet-600/20
          blur-[170px]
        "
      />

      {/* Grid Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.06]
          [bg-[linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)]]
          bg-size-[80px_80px]
        "
      />

      {/* Noise Texture */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
          bg-[url('https://www.transparenttextures.com/patterns/noise.png')]
        "
      />

      {/* Radial Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.85))]
        "
      />
    </div>
  );
}