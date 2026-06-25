"use client";

import AnimatedBackground from "./AnimatedBackground";
import CursorGlow from "./CursorGlow";
// import FloatingParticles from "./FloatingParticles";
import ScrollIndicator from "./ScrollIndicator";

import HeroText from "./HeroContent/HeroText";
import ProfileImage from "./HeroContent/ProfileImage";
import FloatingTech from "./HeroContent/FloatingTech";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black text-white">
      {/* Background Layers */}
      <AnimatedBackground />
      {/* <FloatingParticles /> */}

      {/* Cursor Glow (Desktop Only) */}
      <div className="hidden lg:block">
        <CursorGlow />
      </div>

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <HeroText />
          </div>

          {/* Right Side */}
          <div className="order-1 relative flex justify-center lg:order-2">
            <ProfileImage />

            {/* Floating Tech Icons */}
            <FloatingTech />
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-50
          bg-linear-to-t
          from-black
          via-black/60
          to-transparent
        "
      />

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}