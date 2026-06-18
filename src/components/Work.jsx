import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Work = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "SymptomAI",
      description:
        "AI-powered health symptom checker with modern UI and real-time suggestions",
      image: "/assets/ai-checker.png",
      tags: ["React", "AI", "Tailwind CSS", "Node.js"],
      color: "from-blue-50 to-cyan-50",
      accentColor: "text-blue-600",
      link: "https://ai-powered-symptoms-checker-123.vercel.app/",
    },
    {
      id: 2,
      title: "Chatz",
      description:
        "Real-time chat application with dark theme and seamless messaging experience",
      image: "/assets/chatz.png",
      tags: ["React", "Socket.io", "Express", "MongoDB"],
      color: "from-slate-800 to-slate-900",
      accentColor: "text-orange-400",
      link: "https://chatz-gyef.onrender.com/",
    },
    {
      id: 3,
      title: "Coming Soon",
      description:
        "An innovative project that will showcase cutting-edge technologies and design patterns",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      color: "from-purple-50 to-pink-50",
      accentColor: "text-purple-600",
      link: "#",
      isComingSoon: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full min-h-[100vh] bg-gray-100 flex flex-col justify-center py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Header with GIF Background */}
        <motion.div
          className="text-center mb-16 relative"
          variants={itemVariants}
        >
          {/* GIF Background Container */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            {/* The actual GIF as background */}
            <img
              src="/assets/chromedino.gif"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay so text stays readable */}
            <div className="absolute inset-0  backdrop-blur-[1px]" />
          </div>

          {/* Heading text on top */}
          <div className="relative z-10 py-14 px-6 text-gray-700">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-700 mb-4 drop-shadow-lg"
              variants={itemVariants}
            >
              My Work
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl drop-shadow"
              variants={itemVariants}
            >
              Showcasing full-stack projects built with modern technologies
            </motion.p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Image / GIF area */}
              {project.isComingSoon ? (
                <motion.div
                  className="h-48 overflow-hidden relative bg-gradient-to-br from-purple-50 to-pink-50"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div
                    className="tenor-gif-embed"
                    data-postid="10284748528352541933"
                    data-share-method="host"
                    data-aspect-ratio="2.12821"
                    data-width="100%"
                    style={{ margin: 0 }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden relative`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}

              {/* Project Content */}
              <div className="p-6">
                <motion.h3
                  className={`text-2xl font-bold mb-2 ${project.accentColor}`}
                  variants={itemVariants}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 mb-4 text-sm md:text-base"
                  variants={itemVariants}
                >
                  {project.description}
                </motion.p>

                {/* Tags */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  variants={containerVariants}
                >
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* CTA Button */}
                {project.isComingSoon ? (
                  <motion.div className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold text-center opacity-60 cursor-not-allowed">
                    <motion.span className="block">Coming Soon</motion.span>
                  </motion.div>
                ) : (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-black text-white py-3 rounded-lg font-semibold overflow-hidden relative block text-center"
                    whileHover={{ backgroundColor: "#1a1a1a" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span
                      className="block"
                      initial={{ y: 0 }}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Project
                    </motion.span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Work;
