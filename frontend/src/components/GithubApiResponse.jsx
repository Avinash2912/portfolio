import React, { useState, useEffect } from "react";

const GitHubApiResponse = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(
          "https://api.github.com/users/Avinash2912"
        );
        const userData = await userResponse.json();

        // Fetch repositories data
        const reposResponse = await fetch(
          "https://api.github.com/users/Avinash2912/repos?sort=updated&per_page=5"
        );
        const reposData = await reposResponse.json();

        setGithubData({
          user: userData,
          repositories: reposData,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#0d1117] text-sm text-white font-mono rounded-lg shadow-lg overflow-hidden border border-gray-700 max-w-xl mx-auto my-6 ">
        <div className="flex items-center justify-between bg-[#161b22] px-4 py-2 border-b border-gray-700">
          <span className="text-green-400">GET</span>
          <span className="text-gray-300">/api/users/Avinash2912</span>
          <span className="bg-yellow-600 text-xs px-2 py-1 rounded-md text-white">
            Loading...
          </span>
        </div>
        <div className="p-4 text-center text-gray-400">
          Fetching GitHub data...
        </div>
      </div>
    );
  }

  if (!githubData) {
    return (
      <div className="bg-[#0d1117] text-sm text-white font-mono rounded-lg shadow-lg overflow-hidden border border-gray-700 max-w-xl mx-auto my-6">
        <div className="p-4 text-center text-red-400">
          Failed to load GitHub data
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0d1117] text-sm text-white font-mono rounded-lg shadow-lg overflow-hidden border border-gray-700 max-w-xl mx-auto my-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#0d131b] px-4 py-2 border-b border-gray-700">
        <span className="text-green-400">GET</span>
        <span className="text-gray-300">/api/users/Avinash2912</span>
        <span className="bg-green-700 text-xs px-2 py-1 rounded-md text-white">
          200 OK
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="text-gray-400">// GitHub Profile & Repository Data</p>
        <pre className="text-[13px] leading-6">
          <span className="text-purple-400">const</span>{" "}
          <span className="text-cyan-400">githubProfile</span>{" "}
          <span className="text-white">=</span>{" "}
          <span className="text-orange-400">{"{"}</span>
          {"\n"}
          &nbsp;&nbsp;<span className="text-green-400">"username"</span>:{" "}
          <span className="text-yellow-300">
            "{githubData.user.login}"
          </span>
          ,{"\n"}
          &nbsp;&nbsp;<span className="text-green-400">"name"</span>:{" "}
          <span className="text-yellow-300">
            "{githubData.user.name || "Avinash Jha"}"
          </span>
          ,{"\n"}
          &nbsp;&nbsp;<span className="text-green-400">"public_repos"</span>:{" "}
          <span className="text-orange-300">
            {githubData.user.public_repos}
          </span>
          ,{"\n"}
          &nbsp;&nbsp;<span className="text-green-400">"followers"</span>:{" "}
          <span className="text-orange-300">{githubData.user.followers}</span>
          ,{"\n"}
          &nbsp;&nbsp;<span className="text-green-400">"following"</span>:{" "}
          <span className="text-orange-300">{githubData.user.following}</span>
          ,{"\n"}
          &nbsp;&nbsp;<span className="text-green-400">"created_at"</span>:{" "}
          <span className="text-yellow-300">
            "{new Date(githubData.user.created_at).getFullYear()}"
          </span>
          ,{"\n"}
          &nbsp;&nbsp;<span className="text-green-400">"repositories"</span>: [
          {"\n"}
          {githubData.repositories
            .filter((repo) => repo.name !== "Avinash2912")
            .slice(0, 5)
            .map((repo, index, filteredArray) => (
              <span key={repo.id}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-yellow-300">"{repo.name}"</span>
                {index < filteredArray.length - 1 && ","}
                {"\n"}
              </span>
            ))}
          &nbsp;&nbsp;],{"\n"}
          &nbsp;&nbsp;<span className="text-green-400">"profile_url"</span>:{" "}
          <span className="text-yellow-300">
            "{githubData.user.html_url}"
          </span>
          {"\n"}
          <span className="text-orange-400">{"}"}</span>
        </pre>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2  justify-center">
          <a
            href={githubData.user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-xs transition-colors"
          >
            profile.visit()
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHubApiResponse;
