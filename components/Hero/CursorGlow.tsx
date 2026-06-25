"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;

    if (!glow || !ring || !dot) return;

    //----------------------------------
    // Mouse Move
    //----------------------------------

    const moveCursor = (e: MouseEvent) => {
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.45,
        ease: "power3.out",
      });

      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.22,
        ease: "power3.out",
      });

      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: "none",
      });
    };

    //----------------------------------
    // Hover Animation
    //----------------------------------

    const hoverEnter = () => {
      gsap.to(glow, {
        scale: 1.8,
        duration: 0.3,
      });

      gsap.to(ring, {
        scale: 1.5,
        borderColor: "rgba(255,255,255,0.7)",
        duration: 0.3,
      });

      gsap.to(dot, {
        scale: 1.4,
        duration: 0.3,
      });
    };

    const hoverLeave = () => {
      gsap.to(glow, {
        scale: 1,
        duration: 0.3,
      });

      gsap.to(ring, {
        scale: 1,
        borderColor: "rgba(255,255,255,0.2)",
        duration: 0.3,
      });

      gsap.to(dot, {
        scale: 1,
        duration: 0.3,
      });
    };

    //----------------------------------
    // Click Animation
    //----------------------------------

    const clickAnimation = () => {
      gsap.fromTo(
        glow,
        {
          scale: 1,
        },
        {
          scale: 2.3,
          duration: 0.18,
          yoyo: true,
          repeat: 1,
        }
      );

      gsap.fromTo(
        ring,
        {
          scale: 1,
        },
        {
          scale: 0.7,
          duration: 0.18,
          yoyo: true,
          repeat: 1,
        }
      );
    };

    //----------------------------------
    // Interactive Elements
    //----------------------------------

    const elements = document.querySelectorAll(
      "button,a,input,textarea,[data-cursor]"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", hoverEnter);
      el.addEventListener("mouseleave", hoverLeave);
    });

    //----------------------------------

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", clickAnimation);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", clickAnimation);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", hoverEnter);
        el.removeEventListener("mouseleave", hoverLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Large Glow */}
      <div
        ref={glowRef}
        className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-9997
        h-44
        w-44
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-linear-to-r
        from-white/5
via-slate-300/10
to-white/5
        blur-[110px]
        mix-blend-screen
      "
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-9998
        h-10
        w-10
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        border-white/20
        backdrop-blur-sm
      "
      />

      {/* Dot */}
      <div
        ref={dotRef}
        className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-9999
        h-2
        w-2
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-white
        shadow-[0_0_10px_white]
      "
      />
    </>
  );
}