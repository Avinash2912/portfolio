import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  if (isLoading) {
    return (
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
  }

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black p-6"
    >
      {/* Floating Background Circles */}
      <div className="absolute top-10 left-10 w-36 h-36 bg-gray-800 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-gray-800 opacity-10 rounded-full blur-3xl animate-ping"></div>

      <div className="relative bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-10 max-w-lg w-full transform transition duration-500 hover:scale-105 hover:shadow-gray-500/50">
        <h2 className="text-4xl font-extrabold text-center text-white drop-shadow-lg mb-6">
          Get in Touch ✨
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Let’s connect for collaborations, ideas, or just a friendly chat 💬
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="flex items-center border border-gray-600 rounded-lg px-3 py-2 bg-gray-800 focus-within:ring-2 focus-within:ring-gray-500">
            <span className="mr-2 text-gray-400">👤</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none text-gray-200"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-gray-600 rounded-lg px-3 py-2 bg-gray-800 focus-within:ring-2 focus-within:ring-gray-500">
            <span className="mr-2 text-gray-400">📧</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none text-gray-200"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div className="border border-gray-600 rounded-lg px-3 py-2 bg-gray-800 focus-within:ring-2 focus-within:ring-gray-500">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full bg-transparent outline-none text-gray-200"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gray-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:opacity-90 transition transform hover:scale-105"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
