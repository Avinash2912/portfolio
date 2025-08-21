import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      name: "PixLink",
      techStack: [ "Node.js", "Express","PostgreSQL","Drizzle ORM","JWT"],
description: "Developed a secure and scalable URL-shortening service with REST APIs, bcrypt-based password hashing, and JWT for authentication",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format",
      githubUrl: "https://github.com/Avinash2912/PixLink"
    },
    {
      id: 2,
      name: "CodeSync",
      techStack: ["Next.js", "Clerk", "TypeScript","ConvexDB","Monaco Editor"],
      description: " Remote Interview Platform , with live coding and video conferencing features.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&auto=format",
      githubUrl: "https://github.com/Avinash2912/CodeSync"
    },
    {
      id: 3,
      name: "NexaMeet",
      techStack: ["React", "WebRTC", "Express",'Node.js','Socket.io'],
      description: "Video conferencing application with screen sharing, recording capabilities, and virtual backgrounds.",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=250&fit=crop&auto=format",
      githubUrl: "https://github.com/Avinash2912/NexaMeet"
    },
    {
      id: 4,
      name: "Spoton",
      techStack: ["Express", "Leaflet.js", "Tailwind","Node.js"],
      description: "Tracking App for monitoring user activity and providing insights.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop&auto=format",
      githubUrl: "https://github.com/Avinash2912/Spoton"
    },
    {
      id: 5,
      name: "GithubFinder",
      techStack: ["React", "GitHub API", "Styled Components","Javascript"],
      description: "GitHub user search application with detailed profile analytics and repository visualization.",
      image: "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?w=400&h=250&fit=crop&auto=format",
      githubUrl: "https://github.com/Avinash2912/GithubFinder"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div id="projects" className="py-20 px-4">
      {/* Title Section */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-4"
        >
          My Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Discover my latest work and creative solutions
        </motion.p>
      </div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="relative group"
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Spotify-style Card */}
            <div className="relative bg-gray-900 rounded-2xl p-6 transition-all duration-500 hover:bg-gray-800 shadow-xl hover:shadow-2xl transform hover:scale-105 overflow-hidden">
              
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Project Image */}
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Info - Always Visible */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.name}
                </h3>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-orange-400 text-xs rounded-full border border-orange-500/30 group-hover:bg-orange-500/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description - Appears on Hover */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredCard === project.id ? 1 : 0,
                    height: hoveredCard === project.id ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-400 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    View Project
                  </motion.button>
                </motion.div>
              </div>

              {/* Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Text */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16"
      >
        <p className="text-gray-500 text-sm">
          More projects available on my{" "}
          <a 
            href="https://github.com/Avinash2912" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors underline"
          >
            GitHub profile
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Projects;
