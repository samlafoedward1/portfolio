import React from "react";

const projects = [
  {
    title: "Job Search Web Application",
    description:
      "A data-driven platform integrating AI for personalized job recommendations and job matching accuracy.",
    link: "https://mygit.th-deg.de/es01580/sas-en-test",
  },
  {
    title: "Inventory Management System",
    description:
      "Full-stack application for efficient inventory tracking and management with secure user authentication.",
    link: "https://github.com/samlafoedward1/pantry_tracker",
  },
  {
    title: "Finance Management Application",
    description:
      "A machine-learning-powered app for financial analysis and budget optimization.",
    link: "https://github.com/samlafoedward1/personal_finance_tool",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-center">
      <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-2xl p-10 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Edward Mawuko Samlafo-Adams
          </h1>
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
      </section>

      <section className="bg-white py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 shadow-md rounded-2xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
