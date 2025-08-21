import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Card() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Avatar in top-right corner */}
      <motion.div
        className="fixed top-6 right-6 z-50 cursor-pointer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Small Glow Background */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #4ade80, #22d3ee, #a855f7, #f97316, #facc15, #4ade80)",
            filter: "blur(15px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        />

        {/* Avatar Container */}
        <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden">
          <img 
            src="/Pic.jpeg" 
            alt="Profile Avatar" 
            className="w-full h-full object-cover" 
          />
        </div>
      </motion.div>

      {/* Full Picture Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-80 h-80 rounded-2xl overflow-hidden flex items-center justify-center"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.3, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Large Glow Background */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, #4ade80, #22d3ee, #a855f7, #f97316, #facc15, #4ade80)",
                  filter: "blur(40px)",
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              />

              {/* Glass Effect Card */}
              <div className="relative z-10 w-72 h-72 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center p-6">
                <img 
                  src="/Pic.jpeg" 
                  alt="Profile Picture" 
                  className="w-full h-full object-cover rounded-xl shadow-lg" 
                />
              </div>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
