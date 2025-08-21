import { useState, useEffect } from "react";

const DecryptedText = () => {
  const [displayText, setDisplayText] = useState("");
  const targetText = "Hi! I'm Avinash Jha";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    let currentIndex = 0;
    const decryptInterval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        const decryptedPart = targetText.slice(0, currentIndex);
        const remainingLength = Math.max(0, targetText.length - currentIndex);

        // Generate random characters for undecrypted part
        const randomPart = Array.from(
          { length: remainingLength },
          () => characters[Math.floor(Math.random() * characters.length)]
        ).join("");

        setDisplayText(decryptedPart + randomPart);
        currentIndex += 0.5; // Slower decryption speed
      } else {
        setDisplayText(targetText);
        clearInterval(decryptInterval);
      }
    }, 100);

    return () => clearInterval(decryptInterval);
  }, []);

  return (
    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono tracking-wide">
      {displayText.split("").map((char, index) => {
        const isDecrypted =
          index <
          (displayText === targetText
            ? targetText.length
            : displayText.length -
              (targetText.length - Math.floor(displayText.length * 0.6)));
        const isNamePart =
          displayText === targetText && index >= 8 && index <= 18; // "Avinash Jha" part

        return (
          <span
            key={index}
            className={`${
              isNamePart
                ? "text-[#13AA52]" // Your preferred green color
                : isDecrypted
                  ? "text-white"
                  : "text-green-400 opacity-70"
            } transition-colors duration-200`}
            style={{
              textShadow: !isDecrypted
                ? "0 0 8px rgba(34, 197, 94, 0.5)"
                : isNamePart
                  ? "0 0 12px rgba(19, 170, 82, 0.3)" // Green glow matching #13AA52
                  : "none",
            }}
          >
            {char}
          </span>
        );
      })}
    </h1>
  );
};

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-gray-900/20 via-slate-900/30 to-gray-900/20 py-16 px-4 w-full">
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
      <h1 className="text-4xl md:text-5xl font-bold text-center mx-auto bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        About Me
      </h1>

      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-8 py-16">
        {/* Animated Background Blur */}
        <div className="size-[520px] rounded-full absolute blur-[200px] -z-10 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 animate-pulse"></div>

        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-30"></div>
          <img
            className="relative w-64 h-80 object-cover rounded-xl border border-cyan-500/30 shadow-2xl"
            src="/Avinash_Pic.jpeg"
            alt="Professional Portrait"
          />
        </div>

        {/* Content */}
        <div className="w-full md:flex-1 md:max-w-none">
          <DecryptedText />
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            Passionate about technology and design, I’m a MERN Stack Developer
            dedicated to creating intuitive and problem-solving web
            applications.
          </p>

          <div className="flex flex-col gap-8 mt-8">
            <div className="flex items-start gap-4">
              <div className="size-12 p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Scalable Web Solutions
                </h3>
                <p className="text-gray-300">
                  Building robust applications with clean code, modern
                  frameworks, and optimized performance.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-12 p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Modern UI/UX Design
                </h3>
                <p className="text-gray-300">
                  Creating intuitive, responsive designs with attention to user
                  experience.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-12 p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Full-Stack Expertise
                </h3>
                <p className="text-gray-300">
                  Comprehensive knowledge in React, Node.js, MongoDB, and modern
                  web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
