import React, { useState, useEffect } from "react";

const Education = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = `Avinash@MacBook-Pro ~ % ls education

 B.Tech in Computer Science Engineering  
   — Guru Gobind Singh Indraprastha University (2021 – 2025)  
   CGPA: 8.69

 Senior Secondary (Class XII)  
   — CBSE Board (2019 – 2020)  
   Percentage: 75%

 Secondary (Class X)  
   — CBSE Board (2017 – 2018)  
   Percentage: 76.4%

# For transcripts or verification, email at avinashjha19@outlook.com

Avinash@MacBook-Pro ~ % echo "Code is poetry written in logic 💻"`;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, Math.random() * 50 + 30); // Random typing speed between 30-80ms

      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const formatText = (text) => {
    return text
      .replace(/Avinash@MacBook-Pro ~ % (.*)/g, '<span class="text-green-400">Avinash@MacBook-Pro ~ % <span class="text-yellow-400">$1</span></span>')
      .replace(/🎓 (.*)/g, '🎓 <span class="text-cyan-400">$1</span>')
      .replace(/📘 (.*)/g, '📘 <span class="text-cyan-400">$1</span>')
      .replace(/📗 (.*)/g, '📗 <span class="text-cyan-400">$1</span>')
      .replace(/CGPA: ([\d.]+)/g, 'CGPA: <span class="text-yellow-300">$1</span>')
      .replace(/Percentage: ([\d.%]+)/g, 'Percentage: <span class="text-yellow-300">$1</span>')
      .replace(/(avinashjha19@outlook.com)/g, '<span class="text-blue-400">$1</span>')
      .replace(/# (.*)/g, '<span class="text-gray-500"># $1</span>')
      .replace(/\n/g, '<br>');
  };
  return (
    <div id="education" className="w-full flex flex-col items-center pt-10">
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-orange-400 via-red-500 to-pink-400 bg-clip-text text-transparent">
          Education
        </h2>
      </div>
      
      <div className="bg-[#0d1117] text-sm text-white font-mono rounded-xl shadow-lg border border-gray-700 w-full max-w-3xl h-[32rem] mx-auto my-10 overflow-hidden">
      {/* MacOS Terminal Top Bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#1c1c1e] border-b border-gray-700">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <span className="ml-4 text-gray-400 text-xs">education-terminal</span>
      </div>

      {/* Terminal Body */}
      <div className="p-6 h-full relative">
        {/* Animated Terminal Output */}
        <div className="text-gray-200 leading-relaxed font-mono h-full overflow-hidden">
          <div 
            className="whitespace-pre-wrap min-h-full"
            dangerouslySetInnerHTML={{ 
              __html: formatText(displayedText) + '<span class="text-green-500 animate-pulse font-bold">|</span>'
            }}
          />
        </div>

        {/* Matrix-style background effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-5">
          <div className="text-green-500 text-xs leading-none animate-pulse">
            {Array.from({ length: 50 }, (_, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Education;
