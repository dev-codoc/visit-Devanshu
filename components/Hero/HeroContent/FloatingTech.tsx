"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiOpenai,
  SiPostgresql,
} from "react-icons/si";

const techStack = [
  {
    icon: SiReact,
    label: "React",
    x: -180,
    y: -130,
    color: "#61DAFB",
    duration: 5,
  },
  {
    icon: SiNextdotjs,
    label: "Next.js",
    x: 170,
    y: -120,
    color: "#ffffff",
    duration: 6,
  },
  {
    icon: SiTailwindcss,
    label: "Tailwind",
    x: -200,
    y: 70,
    color: "#38BDF8",
    duration: 7,
  },
  {
    icon: SiTypescript,
    label: "TypeScript",
    x: 180,
    y: 90,
    color: "#3178C6",
    duration: 5.5,
  },
  {
    icon: SiNodedotjs,
    label: "Node",
    x: -60,
    y: -200,
    color: "#3C873A",
    duration: 8,
  },
  {
    icon: SiMongodb,
    label: "MongoDB",
    x: 60,
    y: 190,
    color: "#4DB33D",
    duration: 6.5,
  },
  {
    icon: SiOpenai,
    label: "AI",
    x: -170,
    y: 180,
    color: "#8B5CF6",
    duration: 7,
  },
  {
    icon: SiPostgresql,
    label: "Postgres",
    x: 200,
    y: -10,
    color: "#336791",
    duration: 5,
  },
];

export default function FloatingTech() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {techStack.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [tech.x, tech.x + 12, tech.x - 10, tech.x],
              y: [tech.y, tech.y - 15, tech.y + 10, tech.y],
              rotate: [-4, 4, -4],
            }}
            transition={{
              repeat: Infinity,
              duration: tech.duration,
              ease: "easeInOut",
            }}
          >
            <div
              className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              backdrop-blur-xl
              shadow-xl
              hover:scale-110
              transition-all
              duration-300
              initial={{
                opacity: 0,
                scale: 0,
            }}
                whileInView={{
    opacity:1,
    scale:1,
}}
            "
            >
              <Icon size={22} color={tech.color} />

              <span className="text-sm text-white whitespace-nowrap">
                {tech.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
