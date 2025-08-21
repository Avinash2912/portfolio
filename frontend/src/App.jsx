import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar  from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CodeBlock from './components/CodeBlock.jsx'
import Card from './components/Card.jsx'
import About from './components/About.jsx'
import GithubResponse from './components/GithubApiResponse.jsx'
import Education from './components/Education.jsx'  
import WorkExperience from './components/WorkExperience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'


import { 
  HeroSkeleton, 
  CodeBlockSkeleton, 
  GitHubApiSkeleton, 
  AboutSkeleton,
  EducationSkeleton,
  WorkExperienceSkeleton,
  ProjectsSkeleton,
  SkillsSkeleton,
  ContactSkeleton
} from './components/Skeleton.jsx'  
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show skeleton for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <Card />

      {/* Global Background Code Snippets */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        {/* Top corners - floating movement */}
        <motion.div
          className="absolute top-8 left-8 text-[12px] text-orange-400/70 font-mono"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          // portfolio.developer.avinash
        </motion.div>

        <motion.div
          className="absolute top-8 right-8 text-[12px] text-blue-400/65 font-mono"
          animate={{ 
            opacity: [0.45, 0.75, 0.45],
            x: [0, -15, 0],
            y: [0, 10, 0]
          }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
        >
          /* Building digital experiences */
        </motion.div>

        {/* Middle areas - sliding movement */}
        <motion.div
          className="absolute top-1/3 left-8 text-[11px] text-green-400/60 font-mono"
          animate={{ 
            opacity: [0.4, 0.7, 0.4],
            x: [0, 30, 0],
            y: [0, 15, 0]
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
        >
          console.log("Welcome to my world");
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-8 text-[11px] text-purple-400/65 font-mono"
          animate={{ 
            opacity: [0.45, 0.75, 0.45],
            x: [0, -25, 0],
            y: [0, -20, 0]
          }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
        >
          const skills = ["React", "Node.js", "Python"];
        </motion.div>

        {/* Bottom corners - wave movement */}
        <motion.div
          className="absolute bottom-8 left-8 text-[12px] text-cyan-400/70 font-mono"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            x: [0, 18, 0],
            y: [0, -12, 0]
          }}
          transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 3 }}
        >
          // Always learning, always growing
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-8 text-[12px] text-yellow-400/65 font-mono"
          animate={{ 
            opacity: [0.45, 0.75, 0.45],
            x: [0, -22, 0],
            y: [0, 8, 0]
          }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
        >
          {"function createInnovation() { return magic; }"}
        </motion.div>

        {/* Additional scattered - circular movement */}
        <motion.div
          className="absolute top-1/2 left-16 text-[10px] text-pink-400/60 font-mono"
          animate={{ 
            opacity: [0.4, 0.65, 0.4],
            x: [0, 15, 0, -15, 0],
            y: [0, -15, 0, 15, 0]
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2.5 }}
        >
          &lt;/creativity&gt;
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-16 text-[10px] text-teal-400/65 font-mono"
          animate={{ 
            opacity: [0.45, 0.7, 0.45],
            x: [0, -12, 0, 12, 0],
            y: [0, 12, 0, -12, 0]
          }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 3.5 }}
        >
          # Dreams.compile() → Reality
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen p-4 m-4 gap-8">
        {isLoading ? (
          <div className="w-full max-w-7xl mx-auto space-y-16">
            <HeroSkeleton />
            
            {/* Code Block and GitHub API skeletons side by side */}
            <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center w-full mb-16">
              <div className="flex-1 flex justify-center items-start">
                <CodeBlockSkeleton />
              </div>
              <div className="flex-1 flex justify-center items-start">
                <GitHubApiSkeleton />
              </div>
            </div>
            
            <AboutSkeleton />
            <EducationSkeleton />
            <WorkExperienceSkeleton />
            <ProjectsSkeleton />
            <SkillsSkeleton />
            <ContactSkeleton />

          </div>
        ) : (
          <>
            <Hero />
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {/* Code Block and GitHub API side by side */}
              <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center w-full max-w-9xl mx-auto mb-16">
                <div className="flex-1 flex justify-center items-start">
                  <CodeBlock />
                </div>
                <div className="flex-1 flex justify-end items-start ">
                  <GithubResponse />
                </div>
              </div>
              
              <div>
                <About />
              </div>
              
              <div>
                <Education />
              </div>

              <div>
                <WorkExperience />
              </div>

              <Projects />

              <Skills />

              <Contact />
            </motion.div>
          </>
        )}
      </div>
    </>
  )
}

export default App

