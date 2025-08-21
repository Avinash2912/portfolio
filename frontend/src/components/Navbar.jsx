import React, { useState } from 'react';



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleDownloadResume = () => {
    // Direct download from Google Drive
    const downloadUrl = `https://drive.google.com/file/d/1Xec6spJRhLUXGkFxL2omLR7iJqKco97l/view?usp=sharing`;
    
    // Create a temporary link element and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Avinash_Jha_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container bg-[#1fcdfc]">
      {/* Enhanced glass effect navbar */}
      <nav className="  fixed top-6 left-1/2 transform -translate-x-1/2 flex items-center border border-white/10 bg-white/10 backdrop-blur-xl rounded-full text-white text-sm w-full max-w-2xl mx-auto py-3 px-6 z-[9999] md:flex-row md:justify-between">
        {/* User image placed on the extreme left and shifted further upward */}
        <img 
          src='../public/pic.jpeg'
          alt="User" 
          className=" sm:hidden absolute left-4 top-0 w-10 h-10 rounded-full border-2 border-white md:left-6 md:top-0 md:w-12 md:h-12 z-[9998]" 
        />

        <div className="hidden md:flex items-center gap-5 mx-auto">
          <a href="#hero" className="relative overflow-hidden h-5 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300 text-xs">Home</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-xs">Home</span>
          </a>
          <a href="#about" className="relative overflow-hidden h-5 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300 text-xs">About</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-xs">About</span>
          </a>
          <a href="#education" className="relative overflow-hidden h-5 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300 text-xs">Education</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-xs">Education</span>
          </a>
          <a href="#experience" className="relative overflow-hidden h-5 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300 text-xs">Experience</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-xs">Experience</span>
          </a>
          <a href="#projects" className="relative overflow-hidden h-5 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300 text-xs">Projects</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-xs">Projects</span>
          </a>
          <a href="#skills" className="relative overflow-hidden h-5 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300 text-xs">Skills</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-xs">Skills</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3 ml-auto">
          <button className="border border-white/40 hover:bg-white/20 px-4 py-1.5 rounded-full text-xs font-medium transition">
            <a href="#contact">Contact</a>
          </button>
          <button 
            onClick={handleDownloadResume}
            className="bg-white/95 hover:bg-white text-black px-4 py-1.5 rounded-full text-xs font-medium transition duration-300 shadow-md cursor-pointer"
          >
            Resume
          </button>
        </div>
        
        <button 
          className="sm:hidden ml-auto text-white relative z-[9998] "
          onClick={toggleMenu}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      
      {/* Mobile menu with enhanced glass effect */}
      <div 
        className={`fixed top-24 left-1/2 transform -translate-x-1/2 ${isMenuOpen ? 'flex' : 'hidden'} w-11/12 max-w-md flex-col items-center gap-3 bg-black/70 backdrop-blur-2xl py-5 rounded-2xl border border-white/30 z-[9998]`}
      >
        <button 
          className="absolute top-4 right-4 text-white focus:outline-none hover:cursor-pointer"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <a className="hover:text-[#00ed64] text-xs py-2 text-white" href="#hero" onClick={handleLinkClick}>
          Home
        </a>
        <a className="hover:text-[#00ed64] text-xs py-2 text-white" href="#about" onClick={handleLinkClick}>
          About
        </a>
        <a className="hover:text-[#00ed64] text-xs py-2 text-white" href="#education" onClick={handleLinkClick}>
          Education
        </a>
        <a className="hover:text-[#00ed64] text-xs py-2 text-white" href="#experience" onClick={handleLinkClick}>
          Experience
        </a>
        <a className="hover:text-[#00ed64] text-xs py-2 text-white" href="#projects" onClick={handleLinkClick}>
          Projects
        </a>
        <a className="hover:text-[#00ed64] text-xs py-2 text-white" href="#skills" onClick={handleLinkClick}>
          Skills
        </a>
        <button className="border border-white/40 hover:text-[#00ed64] px-4 py-2 rounded-full text-xs font-medium transition mt-2 text-white" onClick={handleLinkClick}>
          <a href="#contact">Contact</a>
        </button>
        <button className="bg-white/95 hover:bg-[#00ed64] text-black px-4 py-2 rounded-full text-xs font-medium transition duration-300 shadow-md cursor-pointer"
          onClick={() => {
            handleDownloadResume();
            handleLinkClick();
          }}
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;