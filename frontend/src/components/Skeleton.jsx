import React from 'react';

// Reusable Skeleton Component
export const Skeleton = ({ type }) => {
  const skeletonTypes = {
    title: "skeleton-title",
    list: "skeleton-list",
    item: "skeleton-item",
    input: "skeleton-input",
    textarea: "skeleton-textarea",
    button: "skeleton-button",
  };

  return <div className={skeletonTypes[type] || "skeleton-default"}></div>;
};

// Hero Skeleton
export const HeroSkeleton = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center space-y-8 py-40">
      {/* Background coding text skeleton */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="space-y-1 text-left p-4">
          <Skeleton className="h-4 w-64" />
          <Skeleton className="h-4 w-72" />
          <Skeleton className="h-4 w-56" />
          <Skeleton className="h-4 w-68" />
          <Skeleton className="h-4 w-60" />
        </div>
      </div>

      {/* Main name skeleton */}
      <div className="flex justify-center">
        <Skeleton className="h-32 w-[28rem] rounded-lg" />
      </div>

      {/* Role titles skeleton */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-6 w-1" />
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-6 w-1" />
        <Skeleton className="h-6 w-44" />
      </div>

      {/* Social media icons skeleton */}
      <div className="flex justify-center gap-6 mt-28">
        <Skeleton className="w-10 h-10 rounded" />
        <Skeleton className="w-10 h-10 rounded" />
        <Skeleton className="w-10 h-10 rounded" />
      </div>
    </div>
  );
};

// CodeBlock Skeleton
export const CodeBlockSkeleton = () => {
  return (
    <div className="relative w-full max-w-md rounded-xl p-0.5 mt-8">
      <div className="rounded-xl bg-[#181925] p-6 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between pb-4">
          <Skeleton className="h-4 w-28 bg-gray-600" />
        </div>
        
        {/* Code Lines - Reduced number and smaller spacing */}
        <div className="space-y-2">
          <Skeleton className="h-2 w-full bg-gray-600" />
          <Skeleton className="h-2 w-3/4 bg-gray-600" />
          <Skeleton className="h-2 w-5/6 bg-gray-600" />
          <Skeleton className="h-2 w-2/3 bg-gray-600" />
          <Skeleton className="h-2 w-full bg-gray-600" />
          <Skeleton className="h-2 w-4/5 bg-gray-600" />
          <Skeleton className="h-2 w-3/4 bg-gray-600" />
          <Skeleton className="h-2 w-5/6 bg-gray-600" />
          <Skeleton className="h-2 w-1/2 bg-gray-600" />
        </div>
      </div>
    </div>
  );
};

// GitHub API Skeleton
export const GitHubApiSkeleton = () => {
  return (
    <div className="w-full max-w-lg bg-[#0d1117] border border-gray-700 rounded-lg p-4 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 bg-[#161b22] px-3 py-2 rounded border-b border-gray-700">
        <Skeleton className="h-4 w-12 bg-green-600" />
        <Skeleton className="h-4 w-32 bg-gray-600" />
        <Skeleton className="h-4 w-16 bg-green-600" />
      </div>
      
      {/* Profile Section */}
      <div className="space-y-2 mb-4">
        <Skeleton className="h-3 w-full bg-gray-600" />
        <Skeleton className="h-3 w-3/4 bg-gray-600" />
        <Skeleton className="h-3 w-5/6 bg-gray-600" />
        <Skeleton className="h-3 w-2/3 bg-gray-600" />
        <Skeleton className="h-3 w-full bg-gray-600" />
        <Skeleton className="h-3 w-4/5 bg-gray-600" />
        <Skeleton className="h-3 w-3/4 bg-gray-600" />
      </div>
      
      {/* Repositories Section */}
      <div className="space-y-2 mb-4">
        <Skeleton className="h-3 w-1/2 bg-gray-600" />
        <div className="space-y-1 ml-4">
          <Skeleton className="h-2 w-3/4 bg-gray-600" />
          <Skeleton className="h-2 w-5/6 bg-gray-600" />
          <Skeleton className="h-2 w-2/3 bg-gray-600" />
          <Skeleton className="h-2 w-4/5 bg-gray-600" />
        </div>
      </div>
      
      {/* Single Profile Button */}
      <div className="mt-4">
        <Skeleton className="h-2 w-24 rounded-md bg-blue-600" />
      </div>
    </div>
  );
};

// About Skeleton
export const AboutSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 p-8">
      {/* Image Skeleton */}
      <div className="flex-shrink-0">
        <Skeleton className="w-64 h-28 rounded-lg" />
      </div>
      
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <Skeleton className="h-6 w-3/4" />
        <div className="space-y-3">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-3/4" />
        </div>
      </div>
    </div>
  );
};

// Education Skeleton
export const EducationSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Title Skeleton */}
      <div className="mb-8">
        <Skeleton className="h-12 w-48 rounded-lg" />
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
      <div className="p-6 h-full">
        {/* Terminal Lines */}
        <div className="space-y-3">
          {/* Command Line */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-6 bg-green-600" />
            <Skeleton className="h-3 w-40" />
          </div>
          
          {/* Empty Line */}
          <div className="h-3"></div>
          
          {/* Education Entries */}
          <div className="space-y-4">
            {/* B.Tech */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">🎓</span>
                <Skeleton className="h-3 w-80" />
              </div>
              <div className="ml-6 space-y-1">
                <Skeleton className="h-3 w-96" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
            
            {/* Class XII */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">📘</span>
                <Skeleton className="h-3 w-64" />
              </div>
              <div className="ml-6 space-y-1">
                <Skeleton className="h-3 w-72" />
                <Skeleton className="h-3 w-28" />
              </div>
            </div>
            
            {/* Class X */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">📗</span>
                <Skeleton className="h-3 w-56" />
              </div>
              <div className="ml-6 space-y-1">
                <Skeleton className="h-3 w-68" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
          </div>
          
          {/* Empty Line */}
          <div className="h-3"></div>
          
          {/* Comment Line */}
          <Skeleton className="h-3 w-96" />
          
          {/* Empty Line */}
          <div className="h-3"></div>
          
          {/* Final Command */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-6 bg-green-600" />
            <Skeleton className="h-3 w-64" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

// WorkExperience Skeleton
export const WorkExperienceSkeleton = () => {
  return (
    <div className="bg-black text-gray-100 font-mono min-h-screen flex flex-col items-center justify-center p-8">
      {/* Title Skeleton */}
      <div className="mb-8">
        <Skeleton className="h-12 w-64 rounded-lg bg-gray-600" />
      </div>
      
      <div className="w-full max-w-5xl bg-gray-950 rounded-lg shadow-2xl border border-gray-800 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between bg-gray-900 px-4 py-2 border-b border-gray-800">
          <Skeleton className="h-4 w-48 bg-orange-600" />
          <Skeleton className="h-6 w-16 rounded-md bg-green-600" />
        </div>

        {/* Query editor */}
        <div className="p-4 bg-gray-950 border-b border-gray-800">
          <div className="space-y-2">
            <Skeleton className="h-3 w-full bg-gray-600" />
            <Skeleton className="h-3 w-3/4 bg-gray-600" />
            <Skeleton className="h-3 w-5/6 bg-gray-600" />
            <Skeleton className="h-3 w-2/3 bg-gray-600" />
          </div>
        </div>

        {/* Query results */}
        <div className="p-4">
          <div className="border border-gray-800 rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="bg-gray-900 p-2 border-b border-gray-800">
              <div className="grid grid-cols-4 gap-4">
                <Skeleton className="h-4 w-12 bg-gray-600" />
                <Skeleton className="h-4 w-16 bg-gray-600" />
                <Skeleton className="h-4 w-16 bg-gray-600" />
                <Skeleton className="h-4 w-16 bg-gray-600" />
              </div>
            </div>
            
            {/* Table Row */}
            <div className="bg-gray-950 p-2">
              <div className="grid grid-cols-4 gap-4 items-start">
                <Skeleton className="h-4 w-24 bg-gray-600" />
                <Skeleton className="h-4 w-32 bg-yellow-600" />
                <div className="space-y-1">
                  <Skeleton className="h-3 w-16 bg-gray-600" />
                  <Skeleton className="h-2 w-4 bg-gray-500" />
                  <Skeleton className="h-3 w-16 bg-gray-600" />
                </div>
                <div className="space-y-1">
                  <Skeleton className="h-2 w-full bg-gray-600" />
                  <Skeleton className="h-2 w-full bg-gray-600" />
                  <Skeleton className="h-2 w-3/4 bg-gray-600" />
                  <Skeleton className="h-2 w-full bg-gray-600" />
                  <Skeleton className="h-2 w-5/6 bg-gray-600" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-2">
            <Skeleton className="h-3 w-48 bg-green-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Projects Skeleton
export const ProjectsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-4">
      {/* Title Section Skeleton */}
      <div className="text-center mb-16">
        <Skeleton className="h-12 w-64 rounded-lg mx-auto mb-4" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>

      {/* Projects Grid Skeleton */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="relative group">
            {/* Card Container */}
            <div className="relative bg-gray-900 rounded-2xl p-6 shadow-xl overflow-hidden">
              
              {/* Project Image Skeleton */}
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <Skeleton className="w-full h-48 bg-gray-700" />
              </div>

              {/* Project Info Skeleton */}
              <div className="relative z-10">
                {/* Project Name */}
                <Skeleton className="h-6 w-32 mb-2 bg-gray-700" />
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Skeleton className="h-6 w-16 rounded-full bg-gray-700" />
                  <Skeleton className="h-6 w-20 rounded-full bg-gray-700" />
                  <Skeleton className="h-6 w-18 rounded-full bg-gray-700" />
                </div>

                {/* Description Lines (Hidden initially to match hover behavior) */}
                <div className="space-y-2 mb-4 opacity-0">
                  <Skeleton className="h-3 w-full bg-gray-600" />
                  <Skeleton className="h-3 w-full bg-gray-600" />
                  <Skeleton className="h-3 w-3/4 bg-gray-600" />
                </div>

                {/* Action Button (Hidden initially) */}
                <Skeleton className="h-10 w-full rounded-lg bg-gray-700 opacity-0" />
              </div>

              {/* Bottom Border Skeleton */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 opacity-30" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Text Skeleton */}
      <div className="text-center mt-16">
        <Skeleton className="h-4 w-80 mx-auto" />
      </div>
    </div>
  );
};

// Contact Skeleton
export const ContactSkeleton = () => (
  <div className="contact-skeleton">
    <div className="skeleton-title"></div>
    <div className="skeleton-form">
      <div className="skeleton-input"></div>
      <div className="skeleton-input"></div>
      <div className="skeleton-textarea"></div>
      <div className="skeleton-button"></div>
    </div>
  </div>
);

// Skills Skeleton
export const SkillsSkeleton = () => (
  <div className="skills-skeleton">
    <div className="skeleton-title"></div>
    <div className="skeleton-list">
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
    </div>
  </div>
);
