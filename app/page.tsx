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
    <div className="min-h-screen bg-white text-center font-sans">
      <header className="py-20">
        <h1 className="text-5xl font-bold">Edward Mawuko Samlafo-Adams</h1>
        <h2 className="text-2xl text-gray-600 mt-2">
          AI Student | Software Engineer | Data Enthusiast
        </h2>
      </header>

      <section className="max-w-3xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed">
          Passionate about building AI-driven solutions, creating scalable web
          applications, and solving real-world problems with data. I thrive in
          collaborative environments and love continuous learning.
        </p>
        <div className="mt-8 space-x-4">
          <a
            href="https://www.linkedin.com/in/edward-mawuko-samlafo-adams-24b713199/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:samlafoadamsedward@gmail.com"
            className="text-blue-500 hover:underline"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section className="mt-20">
        <h3 className="text-3xl font-bold">Projects</h3>
        <ul className="list-none mt-8">
          {projects.map((project) => (
            <li key={project.title} className="mt-8">
              <h4 className="text-2xl font-semibold">{project.title}</h4>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;
