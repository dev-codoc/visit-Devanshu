import React from 'react'
import { RiMailSendLine } from "react-icons/ri";
import { motion } from 'framer-motion';

const Navbar = ({ onResumeClick }) => {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const hoverVariants = {
    hover: {
      backgroundColor: "rgb(229, 231, 235)",
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  }

  return (
    <motion.div
      className='w-[80%] flex items-center justify-between p-4 flex-wrap gap-4'
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        href='mailto:dev2003.rajput@gmail.com'
        className='flex items-center space-x-7 px-4 py-2 rounded-full cursor-pointer transition duration-300'
        variants={itemVariants}
        whileHover="hover"
        whileTap="tap"
        custom={0}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <RiMailSendLine className='text-2xl' />
        </motion.div>
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          transition={{ delay: 0.2 }}
          className="hidden md:inline"
        >
          dev2003.rajput@gmail.com
        </motion.span>
      </motion.a>

      <motion.div className='flex space-x-4' variants={itemVariants}>
        {['Work', 'Resume', 'Services', 'Contact'].map((item, index) => (
          <motion.button
            key={item}
            onClick={() => item === 'Resume' && onResumeClick()}
            className='px-4 py-2 rounded-full font-medium'
            variants={hoverVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            {item}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Navbar