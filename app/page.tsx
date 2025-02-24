import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Edward Mawuko Samlafo-Adams</h1>
        <p className="text-gray-600 text-lg mb-6">
          AI Student | Software Engineer | Data Enthusiast
        </p>
        <p className="text-gray-500 mb-4">
          Passionate about building AI-driven solutions, creating scalable web
          applications, and solving real-world problems with data.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/edward-mawuko-samlafo-adams-24b713199/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            LinkedIn
          </a>
          <a
            href="mailto:samlafoadamsedward@gmail.com"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
