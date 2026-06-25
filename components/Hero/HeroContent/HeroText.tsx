"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { motion } from "framer-motion";
import MagneticButton from "../MagneticButton";

export default function HeroText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const heading = new SplitType(".hero-heading", {
      types: "chars",
    });

    const subtitle = new SplitType(".hero-subtitle", {
      types: "words",
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    });

    tl.from(heading.chars, {
      opacity: 0,
      y: 120,
      rotateX: -90,
      stagger: 0.025,
      duration: 0.8,
    })

      .from(
        subtitle.words,
        {
          opacity: 0,
          y: 40,
          stagger: 0.04,
          duration: 0.7,
        },
        "-=0.4"
      )

      .from(
        ".hero-description",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
        },
        "-=0.4"
      )

      .from(
        ".hero-buttons",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
        },
        "-=0.5"
      );

    return () => {
      heading.revert();
      subtitle.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-w-4xl text-center lg:text-left z-20"
    >
      {/* Small Tag */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
        }}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl"
      >
        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

        <span className="text-sm tracking-widest uppercase text-zinc-300">
          Available for Freelance
        </span>
      </motion.div>

      {/* Heading */}

      <h1
        className="
        hero-heading
        mt-8
        text-6xl
        md:text-8xl
        xl:text-7xl
        font-black
        leading-none
        tracking-tight
      "
      >
        BUILDING
        <br />

        <span className="bg-linear-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text ">
          DIGITAL
        </span>

        <br />

        EXPERIENCES
      </h1>

      {/* Subtitle */}

      <h2
        className="
        hero-subtitle
        mt-3
        text-xl
        md:text-3xl
        font-light
        text-zinc-300
        leading-relaxed
      "
      >
        Hi, I'm{" "}
        <span className="font-semibold italic text-white">
          Devanshu Singh
        </span>{" "}
        — a Full Stack Developer crafting AI-powered products,
        scalable web applications, and memorable digital
        experiences.
      </h2>

      {/* Description */}

      <p
        className="
        hero-description
        mt-3
        max-w-2xl
        text-zinc-400
        text-lg
        leading-8
      "
      >
        I transform ambitious ideas into production-ready
        applications using modern technologies like Next.js,
        TypeScript, Node.js, AI, and motion-driven user
        experiences. Every project is built with performance,
        scalability, and thoughtful design in mind.
      </p>

      {/* Buttons */}

      <div className="hero-buttons mt-8 flex flex-wrap gap-5 justify-center lg:justify-start">
        <MagneticButton
          text="View Projects"
          primary
        />

        <MagneticButton
          text="Let's Talk"
        />
      </div>

      {/* Stats */}

      <div className="mt-8 flex flex-wrap gap-12 justify-center lg:justify-start">
        <div>
          <h3 className="text-4xl font-bold text-white">
            10+
          </h3>

          <p className="text-zinc-500">
            Projects Built
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-white">
            2+
          </h3>

          <p className="text-zinc-500">
            Years Learning
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-white">
            AI
          </h3>

          <p className="text-zinc-500">
            Product Focus
          </p>
        </div>
      </div>
    </div>
  );
}