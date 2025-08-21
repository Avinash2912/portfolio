import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("avinashjha19@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.25,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      id="hero"
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center space-y-8 py-20"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Coding themed background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.15),_transparent_70%)]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      />
      <motion.div
        className="absolute -z-20 opacity-40 text-[12px] top-48 left-0 right-0 text-green-400 font-mono leading-snug whitespace-pre overflow-hidden px-4 pointer-events-none"
      >
        {`class Developer:
    def __init__(self, name, skills):
        self.name = name
        self.skills = skills
    
    def build(self):
        return "Beautiful Web Apps with AI ✨"

avinash = Developer("Avinash Jha", ["C++", "JavaScript", "Python", "MERN"])
print(f"Hi, I'm {avinash.name} and I build {avinash.build()}")
`}
       
      </motion.div>

      {/* Additional background code snippets */}
      <motion.div
        className="absolute -z-20 opacity-30 text-[11px] top-96 left-4 text-orange-400 font-mono pointer-events-none"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        // portfolio.projects.web_development
      </motion.div>

      <motion.div
        className="absolute -z-20 opacity-25 text-[11px] bottom-32 right-8 text-blue-400 font-mono pointer-events-none"
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
      >
        /* Building amazing experiences */
      </motion.div>

      <motion.div
        className="absolute -z-20 opacity-35 text-[10px] top-72 right-12 text-purple-400 font-mono pointer-events-none"
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
      >
        console.log("Welcome to my portfolio");
      </motion.div>

      {/* Name with gradient animation */}
      <motion.h1
        className="text-6xl md:text-7xl font-black tracking-tight relative"
        style={{
          fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
          background: 'linear-gradient(135deg, #10b981, #06b6d4, #3b82f6)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        }}
        variants={itemVariants}
        whileHover={{ 
          scale: 1.05,
        }}
        transition={{ duration: 0.3 }}
      >
        <span className="relative inline-block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Avinash Jha
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-emerald-400/30 via-cyan-400/30 to-blue-500/30 blur-xl rounded-full -z-10"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </span>
      </motion.h1>

      {/* Titles */}
      <div className="text-base mt-60 md:text-lg text-gray-300 font-normal flex flex-wrap justify-center gap-3">
        {[
          "Software Engineer",
          "MERN Stack Developer",
          "Ex-InfoEdge Intern",
        ].map((text, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <motion.span
                key={`divider-${i}`}
                className="text-cyan-400"
                variants={titleVariants}
                custom={i * 2 - 1}
              >
                |
              </motion.span>
            )}
            <motion.span
              key={text}
              className="relative bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent hover:from-cyan-300 hover:via-cyan-100 hover:to-cyan-300 transition-all duration-500"
              style={{
                backgroundSize: '200% 100%'
              }}
              variants={titleVariants}
              custom={i * 2}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
              whileHover={{
                scale: 1.02
              }}
            >
              {text}
            </motion.span>
          </React.Fragment>
        ))}
      </div>

      {/* Email Pill */}
      <motion.div 
        className="mt-8"
        variants={itemVariants}
      >
        <motion.button
          onClick={copyEmail}
          className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gray-900/70 hover:bg-gray-800/80 border border-gray-600 hover:border-cyan-400 rounded-full text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-cyan-400/25"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Email Icon */}
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium">
            avinashjha19@outlook.com
          </span>
          
          {/* Copy Icon */}
          <svg className={`w-4 h-4 transition-all duration-200 ${copied ? 'text-green-400' : 'text-gray-400 group-hover:text-blue-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {copied ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            )}
          </svg>

          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 border border-cyan-400/30 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {copied ? '✓ Copied!' : 'Click to copy email'}
          </span>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
        </motion.button>
      </motion.div>

      {/* Social Icons (SVGs, no react-icons needed) */}
      <motion.div
        className="flex gap-6 mt-4"
        variants={itemVariants}
      >
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/avinash-jha-46b969167/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 w-8 h-8 transition-transform transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.7v2.2h.1c.5-.9 1.7-2.2 3.5-2.2 3.7 0 4.4 2.4 4.4 5.6V24h-4v-7.9c0-1.9 0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z"/>
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Avinash2912"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white w-8 h-8 transition-transform transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.6-3.9-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.9 1.7.9 1.7.8 1.4 2.1 1 2.6.7.1-.6.4-1 .7-1.2-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C18 7.8 19 8.1 19 8.1c.6 1.7.2 2.9.1 3.2.7.9 1.2 1.9 1.2 3.2 0 4.7-2.7 5.7-5.3 6 .4.3.7.9.7 1.8v2.7c0 .3.2.7.8.6A10.9 10.9 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
          </svg>
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/Avinash_1912/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:text-yellow-300 w-8 h-8 transition-transform transform hover:scale-110"
        >
          <img 
            src="/leetcode.png" 
            alt="LeetCode" 
            className="w-8 h-8 object-contain"
          />
        </a>
      </motion.div>
    </motion.section>
  );
}
