import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdClose } from 'react-icons/md'
import { AiOutlineDownload } from 'react-icons/ai'

const ResumeModal = ({ isOpen, onClose }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-visible fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-[70%] h-screen flex flex-col"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <motion.h2 
                className="text-3xl font-bold text-gray-900"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                My Resume
              </motion.h2>
              
              <div className="flex items-center gap-3">
              <motion.a
                  href="/Devanshu-Singh-Resume.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AiOutlineDownload className="text-lg" />
                  Download
                </motion.a>
                
                <motion.button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MdClose className="text-2xl text-gray-600" />
                </motion.button>
              </div>
            </div>

            {/* PDF Content */}
            <motion.div 
              className="flex-1 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <iframe
                src="/Devanshu-Singh-Resume.pdf"
                className="w-full h-full"
                title="Resume"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ResumeModal
