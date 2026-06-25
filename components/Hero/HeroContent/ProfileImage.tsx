"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ProfileImage() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 150,
    damping: 15,
  });

  const springY = useSpring(rotateY, {
    stiffness: 150,
    damping: 15,
  });

  const glowX = useTransform(springY, [-15, 15], [-20, 20]);
  const glowY = useTransform(springX, [-15, 15], [20, -20]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateYValue = ((x - width / 2) / width) * 20;
    const rotateXValue = -((y - height / 2) / height) * 20;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className="relative perspective-distant"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
      }}
    >
      {/* Glow */}

      <motion.div
        style={{
          x: glowX,
          y: glowY,
        }}
        className="
        absolute
        inset-0
        rounded-[40px]
        bg-linear-to-r
        from-cyan-500/30
        via-violet-500/30
        to-pink-500/30
        blur-3xl
      "
      />

      {/* Card */}

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.04,
        }}
        className="
        relative
        h-80
        w-70
        rounded-[40px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        overflow-hidden
        shadow-2xl
      "
      >
        {/* Animated Border */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
          className="
          absolute
          -inset-0.5
          rounded-[40px]
          bg-linear-to-r
          from-cyan-500
          via-violet-500
          to-pink-500
          opacity-50
        "
        />

        {/* Card Background */}

        <div className="absolute inset-0.5 rounded-[38px] bg-[#070707]" />

        {/* Image */}

        <div
          className="
          absolute
          inset-0.5
          rounded-[38px]
          overflow-hidden
        "
        >
          <img
            src="/images/profile.png"
            alt="Devanshu Singh"
            className="
            h-full
            w-full
            object-cover
            object-center
          "
          />

          {/* Gradient Overlay */}

          <div
            className="
            absolute
            inset-0
            bg-linear-to-t
            from-black/70
            via-transparent
            to-transparent
          "
          />
        </div>

        {/* Name */}

        <div
          className="
          absolute
          bottom-6
          left-6
          z-20
        "
          style={{
            transform: "translateZ(60px)",
          }}
        >
          <h2 className="text-2xl font-bold text-white">
            Devanshu Singh
          </h2>

          <p className="text-sm text-zinc-400">
            Full Stack Developer
          </p>
        </div>

        {/* Online Badge */}

        <div
          className="
          absolute
          top-5
          right-5
          flex
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-black/40
          px-3
          py-1
          backdrop-blur-xl
        "
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
          </span>

          <span className="text-xs text-white">
            Available
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}