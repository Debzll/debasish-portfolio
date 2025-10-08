import React from "react";

const Projects = ({ projects }) => (
  <section id="projects" className="projects container">
    <h4>Featured Projects</h4>
    <div className="project-grid">
      {projects.map((project, idx) => (
        <div key={idx} className="project-card">
          <h5>{project.title}</h5>
          <p>{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
