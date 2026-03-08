import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../utils/data";

function Projects() {
  return (
    <section id="projects">
      <p className="section-label">What I've Built</p>
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {PROJECTS.map((proj, i) => (
          <div className="project-card" key={proj.title}>
            {/* Zero-padded project number */}
            <span className="project-num">0{i + 1}</span>
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-desc">{proj.description}</p>

            {/* Tech tags */}
            <div className="project-tags">
              {proj.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>

            {/* Links to live demo and source code */}
            <div className="project-links">
              <a href={proj.link} target="_blank" rel="noreferrer">
                <ExternalLink size={13} /> Live
              </a>
              <a href={proj.code} target="_blank" rel="noreferrer">
                <Github size={13} /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
