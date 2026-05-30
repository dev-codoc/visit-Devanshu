import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaJsSquare,
  FaPython,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiSolidity,
  SiC,
//   SiShadcn,
  SiCloudinary,
  SiGoogle,
} from 'react-icons/si'

const Skills = () => {
  const scrollContainerRef = useRef(null)
  const [isAutoScroll, setIsAutoScroll] = useState(true)

  const skillsData = [
    {
      name: 'JavaScript',
      icon: FaJsSquare,
      color: 'text-yellow-400',
      bg: 'from-yellow-50 to-yellow-100'
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: 'text-blue-600',
      bg: 'from-blue-50 to-blue-100'
    },
    {
      name: 'Python',
      icon: FaPython,
      color: 'text-blue-500',
      bg: 'from-blue-50 to-blue-100'
    },
    {
      name: 'C',
      icon: SiC,
      color: 'text-blue-700',
      bg: 'from-slate-50 to-slate-100'
    },
    {
      name: 'React',
      icon: FaReact,
      color: 'text-cyan-400',
      bg: 'from-cyan-50 to-cyan-100'
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      color: 'text-black',
      bg: 'from-slate-50 to-slate-100'
    },
    {
      name: 'Node.js',
      icon: FaNode,
      color: 'text-green-600',
      bg: 'from-green-50 to-green-100'
    },
    {
      name: 'Express.js',
      icon: SiExpress,
      color: 'text-gray-700',
      bg: 'from-gray-50 to-gray-100'
    },
    {
      name: 'TailwindCSS',
      icon: SiTailwindcss,
      color: 'text-cyan-500',
      bg: 'from-cyan-50 to-cyan-100'
    },
    {
      name: 'Shadcn',
      icon: SiExpress,
      color: 'text-black',
      bg: 'from-slate-50 to-slate-100'
    },
    {
      name: 'DaisyUI',
      icon: SiTailwindcss,
      color: 'text-orange-500',
      bg: 'from-orange-50 to-orange-100'
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: 'text-green-600',
      bg: 'from-green-50 to-green-100'
    },
    {
      name: 'MySQL',
      icon: SiMysql,
      color: 'text-blue-600',
      bg: 'from-blue-50 to-blue-100'
    },
    {
      name: 'Git',
      icon: FaGitAlt,
      color: 'text-orange-600',
      bg: 'from-orange-50 to-orange-100'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      color: 'text-gray-800',
      bg: 'from-gray-50 to-gray-100'
    },
    {
      name: 'Docker',
      icon: FaDocker,
      color: 'text-blue-500',
      bg: 'from-blue-50 to-blue-100'
    },
    {
      name: 'Postman',
      icon: SiPostman,
      color: 'text-orange-600',
      bg: 'from-orange-50 to-orange-100'
    },
    {
      name: 'Solidity',
      icon: SiSolidity,
      color: 'text-gray-700',
      bg: 'from-gray-50 to-gray-100'
    },
    {
      name: 'Cloudinary',
      icon: SiCloudinary,
      color: 'text-blue-600',
      bg: 'from-blue-50 to-blue-100'
    },
    {
      name: 'GCP',
      icon: SiGoogle,
      color: 'text-red-500',
      bg: 'from-red-50 to-red-100'
    },
  ]

  useEffect(() => {
    if (!isAutoScroll || !scrollContainerRef.current) return

    const interval = setInterval(() => {
      const container = scrollContainerRef.current
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += 2
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isAutoScroll])

  // Removed handleWheel to allow normal vertical scrolling

  const handleMouseEnter = () => {
    setIsAutoScroll(false)
  }

  const handleMouseLeave = () => {
    setIsAutoScroll(true)
  }

  return (
    <div className="w-full min-h-[80vh] bg-white flex flex-col justify-center py-20 px-4 overflow-visible">
      <style>{`
        .skills-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .skills-scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <motion.div
        className="max-w-7xl mx-auto w-full overflow-visible"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hover to pause, scroll down to continue to next section
          </motion.p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <motion.div
          ref={scrollContainerRef}
          className="skills-scroll-container flex gap-6 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Duplicate skills for infinite scroll illusion */}
          {[...skillsData, ...skillsData].map((skill, idx) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={idx}
                className={`flex-shrink-0 w-48 h-40 bg-gradient-to-br ${skill.bg} rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer shadow-lg border border-gray-200`}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon className={`text-5xl mb-3 ${skill.color}`} />
                <p className="text-lg font-bold text-gray-900 text-center">
                  {skill.name}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Skills
