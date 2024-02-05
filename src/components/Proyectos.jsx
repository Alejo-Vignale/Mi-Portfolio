import React from "react";
import "./CSS/Proyectos.css";

function Proyectos() {
  const projects = [
    {
      name: "Weather APp",
      description:
        "Html, Css, JS and the use of an API to have the weather information you need",
      url: "https://weather-app-rho-flame-43.vercel.app/",
    },
    {
      name: "Project 2",
      description: "Description of Project 2",
      url: "https://example.com/project2",
    },
  ];

  return (
    <div className="proyectos-padre">
      {projects.map((project, index) => (
        <div key={index} className="project-folder">
          <img src="/folder.png" alt="Folder Icon" />

          <h3>{project.name}</h3>
          {/* Render project description */}
          <p>{project.description}</p>
          {/* Render link to project URL */}
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
}

export default Proyectos;
