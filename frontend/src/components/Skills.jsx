import React, { useState, useEffect, useRef } from "react";

const skillsData = {
  "programming-languages": ["C/C++", "Java", "JavaScript", "Python"],
  "web-technologies": [
    "HTML", "CSS", "Tailwind", "React.js", "Node.js", 
    "Express", "Socket.io", "REST API", "WebRTC"
  ],
  "databases": ["MySQL", "MongoDB", "JWT", "PostgreSQL"],
  "core-skills": [
    "Data Structures & Algorithms",
    "Web Development", 
    "Object-Oriented Programming"
  ],
  "developer-tools": [
    "GitHub", "VS Code", "Cursor", "GitHub Copilot", "Postman"
  ]
};

const Skills = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "output", content: "Welcome to Avinash's Skills Terminal! 🚀" },
    { type: "output", content: "Type 'help' to see available commands or 'skills' to view all skills." },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (command) => {
    const cmd = command.toLowerCase().trim();
    let response = "";

    switch (cmd) {
      case "help":
        response = `Available commands:
• skills - Show all skills
• web - Show web technologies  
• programming - Show programming languages
• databases - Show database skills
• core - Show core skills
• tools - Show developer tools
• clear - Clear terminal
• whoami - About me
• contact - Contact information`;
        break;
      
      case "skills":
        response = Object.entries(skillsData)
          .map(([category, items]) => 
            `${category.replace('-', ' ').toUpperCase()}:\n${items.map(skill => `  • ${skill}`).join('\n')}`
          ).join('\n\n');
        break;
      
      case "web":
        response = `WEB TECHNOLOGIES:\n${skillsData["web-technologies"].map(skill => `  • ${skill}`).join('\n')}`;
        break;
      
      case "programming":
        response = `PROGRAMMING LANGUAGES:\n${skillsData["programming-languages"].map(skill => `  • ${skill}`).join('\n')}`;
        break;
      
      case "databases":
        response = `DATABASES & AUTH:\n${skillsData["databases"].map(skill => `  • ${skill}`).join('\n')}`;
        break;
      
      case "core":
        response = `CORE SKILLS:\n${skillsData["core-skills"].map(skill => `  • ${skill}`).join('\n')}`;
        break;

      case "tools":
        response = `DEVELOPER TOOLS:\n${skillsData["developer-tools"].map(skill => `  • ${skill}`).join('\n')}`;
        break;
      
      case "clear":
        setHistory([
          { type: "output", content: "Welcome to Avinash's Skills Terminal! 🚀" },
          { type: "output", content: "Type 'help' to see available commands." },
        ]);
        return;
      
      case "whoami":
        response = "Avinash Jha - Software Engineer & MERN Stack Developer\nEx-InfoEdge Intern | Building amazing web experiences! ✨";
        break;

      case "contact":
        response = "📧 Email: avinashjha19@outlook.com\n🔗 LinkedIn: linkedin.com/in/avinash-jha-46b969167\n💻 GitHub: github.com/Avinash2912";
        break;
      
      default:
        if (cmd === "") return;
        response = `Command '${command}' not found. Type 'help' for available commands.`;
    }

    setHistory(prev => [
      ...prev,
      { type: "command", content: `$ ${command}` },
      { type: "output", content: response }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  if (isLoading) {
    return (
      <div className="skills-skeleton">
        <div className="skeleton-title"></div>
        <div className="skeleton-list">
          <div className="skeleton-item"></div>
          <div className="skeleton-item"></div>
          <div className="skeleton-item"></div>
        </div>
      </div>
    );
  }

  return (
    <div id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Skills Terminal
          </h2>
          <p className="text-gray-400 text-lg">
            Interactive terminal to explore my technical skills
          </p>
        </div>

        {/* Terminal Window */}
        <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
          {/* Terminal Title Bar */}
          <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-300 text-sm ml-4 font-mono">
              avinash@portfolio:~/skills$
            </span>
          </div>

          {/* Terminal Content */}
          <div 
            ref={terminalRef}
            className="bg-black text-green-400 font-mono text-sm p-4 h-96 overflow-y-auto"
          >
            {history.map((item, index) => (
              <div key={index} className="mb-1">
                {item.type === "command" && (
                  <div className="text-cyan-400">{item.content}</div>
                )}
                {item.type === "output" && (
                  <div className="text-green-400 whitespace-pre-line">{item.content}</div>
                )}
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-cyan-400 mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent text-green-400 outline-none flex-1 font-mono"
                placeholder="Type a command..."
                autoFocus
              />
              <span className="text-green-400 animate-pulse">|</span>
            </form>
          </div>
        </div>

        {/* Quick Commands */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {["help", "skills", "web", "programming", "databases", "tools", "clear"].map(cmd => (
            <button
              key={cmd}
              onClick={() => {
                handleCommand(cmd);
              }}
              className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-xs font-mono border border-gray-600 transition-colors hover:border-green-400"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-4 text-center text-gray-500 text-sm">
          <p>💡 Click the buttons above or type commands directly in the terminal</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
