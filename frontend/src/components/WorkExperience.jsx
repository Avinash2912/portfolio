import React, { useState, useEffect } from "react";

export default function WorkExperience() {
  const [displayedQuery, setDisplayedQuery] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQueryComplete, setIsQueryComplete] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);

  const sqlQuery = `SELECT wx.role, co.company_name, wx.duration, wx.details
FROM work_experience AS wx
JOIN companies AS co ON wx.company_id = co.id
WHERE wx.role = 'Developer Intern';`;

  const experiences = [
    {
      role: "Developer Intern",
      company: "Info Edge India Ltd.",
      duration: ["January 2025", "-", "July 2025"],
      details: [
        "Engineered a media screening tool (Python, OpenCV, Gemini 2.0 Flash) that cut duplicate detection effort by 60%.",
        "Built crawlers for 15 State RERA sites, structuring data in MySQL to improve accessibility and compliance.",
        "Automated sales productivity analytics, transforming raw data into actionable insights.",
        "Designed an AI-driven property review pipeline using LLM achieving 75% accuracy.",
        "Collaborated with operations to map projects to 13 banks, enhancing audit compliance."
      ]
    }
  ];

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < sqlQuery.length) {
      const timer = setTimeout(() => {
        setDisplayedQuery((prev) => prev + sqlQuery[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, Math.random() * 80 + 40); // Random typing speed between 40-120ms

      return () => clearTimeout(timer);
    } else if (currentIndex >= sqlQuery.length && !isQueryComplete) {
      setIsQueryComplete(true);
    }
  }, [currentIndex, sqlQuery, isQueryComplete]);

  // Handle run button click
  const handleRunQuery = () => {
    if (!isQueryComplete) return;
    
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setShowResults(true);
    }, 1500); // Simulate query execution time
  };

  const formatQuery = (text) => {
    return text
      .replace(/('Developer Intern')/g, '<span class="text-yellow-400">$1</span>')
      .replace(/\b(SELECT|FROM|JOIN|ON|WHERE|AS)\b/g, '<span class="text-blue-400">$1</span>')
      .replace(/\b(work_experience|companies)\b/g, '<span class="text-purple-400">$1</span>')
      .replace(/\b(wx|co)(?=\.)/g, '<span class="text-green-300">$1</span>')
      .replace(/\b(role|company_name|duration|details|company_id|id)\b/g, '<span class="text-cyan-300">$1</span>')
      .replace(/\n/g, '<br>');
  };

  return (
    <div id="experience" className="bg-black text-gray-100 font-mono min-h-screen flex flex-col items-center justify-center ">
      {/* Title */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-emerald-400 via-teal-500 to-green-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
      </div>
      
      <div className="w-full max-w-5xl bg-gray-950 rounded-lg shadow-2xl border border-gray-800 overflow-hidden">
        
        {/* Top bar (like SQL tab) */}
        <div className="flex items-center justify-between bg-gray-900 px-4 py-2 border-b border-gray-800">
          <span className="text-sm text-orange-600">SQL Editor – work_experience.db</span>
          <button 
            onClick={handleRunQuery}
            disabled={!isQueryComplete || isExecuting}
            className={`px-3 py-1 text-sm rounded-md transition-all ${
              isQueryComplete && !isExecuting
                ? 'bg-green-600 hover:bg-green-700 cursor-pointer' 
                : 'bg-gray-600 cursor-not-allowed'
            }`}
          >
            {isExecuting ? 'Executing...' : 'Run ▶'}
          </button>
        </div>

        {/* Query editor */}
        <div className="p-4 bg-gray-950 border-b border-gray-800 min-h-[120px]">
          <pre className="text-sm whitespace-pre-wrap font-mono">
            <code>
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: formatQuery(displayedQuery) + 
                    (currentIndex < sqlQuery.length ? '<span class="text-green-500 animate-pulse">|</span>' : '')
                }}
              />
            </code>
          </pre>
          
          {/* Prompt to click Run button */}
          {isQueryComplete && !showResults && !isExecuting && (
            <div className="mt-2 text-center">
              <div className="text-sky-400 animate-bounce text-sm">
                💡 Click the "Run ▶" button to execute the query!
              </div>
            </div>
          )}
        </div>

        {/* Query results - Always present but conditionally visible */}
        <div className="p-4">
          <div className="border border-gray-800 rounded-lg overflow-hidden">
            <table className="table-fixed w-full text-left text-sm border-collapse">
              <colgroup>
                <col className="w-1/6" />
                <col className="w-1/4" />
                <col className="w-1/6" />
                <col className="w-5/12" />
              </colgroup>
              <thead className="bg-gray-900 text-gray-100">
                <tr>
                  <th className="p-2 border-b border-gray-800 border-r  text-center">Role</th>
                  <th className="p-2 border-b border-gray-800 border-r  text-center">Company</th>
                  <th className="p-2 border-b border-gray-800 border-r  text-center">Duration</th>
                  <th className="p-2 border-b border-gray-800 text-center">Details</th>
                </tr>
              </thead>
              <tbody>
                {showResults ? experiences.map((exp, idx) => (
                  <tr
                    key={idx}
                    className="odd:bg-gray-950 even:bg-gray-900"
                  >
                    <td className="p-2 align-top border-b border-gray-800 border-r font-semibold text-white text-center">
                      {exp.role}
                    </td>
                    <td className="p-2 align-top border-b border-gray-800 border-r  text-yellow-400 text-center font-medium">
                      {exp.company}
                    </td>
                    <td className="p-2 align-top border-b border-gray-800 border-r  text-gray-200 text-center">
                      <div className="flex flex-col items-center justify-center text-sm">
                        <span>{exp.duration[0]}</span>
                        <span className="text-gray-400 my-1">{exp.duration[1]}</span>
                        <span>{exp.duration[2]}</span>
                      </div>
                    </td>
                    <td className="p-2 border-b border-gray-800 text-left">
                      <ul className="space-y-2">
                        {exp.details.map((d, i) => (
                          <li
                            key={i}
                            className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-green-400"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                )) : (
                  // Empty placeholder row to maintain table height
                  <tr className="bg-gray-950">
                    <td colSpan="4" className="p-2 border-b border-gray-800 text-center text-gray-600 h-48">
                      {isExecuting ? (
                        <div className="flex items-center justify-center h-full">
                          <div className="text-yellow-400 animate-pulse">
                            Executing query...
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="text-gray-500">
                            Execute query to see results...
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Footer - Always present */}
          <div className="mt-2 text-xs text-green-400">
            {showResults ? "Query OK. 1 row returned. (0.003 sec)" : "Ready to execute query."}
          </div>
        </div>
      </div>
    </div>
  );
}
