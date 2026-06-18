import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Skills from './components/Skills'
import ResumeModal from './components/ResumeModal'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', handleMouseMove)

    // Detect hover on interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none mix-blend-multiply z-[9999]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        <div className="w-4 h-4 bg-black rounded-full" />
      </motion.div>

      {/* Outer glow ring */}
      <motion.div
        className="fixed pointer-events-none mix-blend-multiply z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.8
        }}
      >
        <div className="w-8 h-8 border-2 border-black rounded-full opacity-30" />
      </motion.div>
    </>
  )
}

const App = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <>
      <style>{`
        * {
          cursor: none;
        }
        .modal-visible * {
          cursor: auto;
        }
      `}</style>
      <CustomCursor />
      <div className='w-full bg-gray-100 flex flex-col items-center justify-start'>
        <Navbar onResumeClick={() => setIsResumeOpen(true)} />
        <Hero />
        <Work />
        <Skills />
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </div>
    </>
  )
}

export default App