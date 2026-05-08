import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../utils/data";

function Projects() {
  return (
    <section id="projects">
      <p className="section-label">Product Case Studies</p>
      <h2 className="section-title">Selected Projects</h2>

      <div className="projects-grid">
        {PROJECTS.map((proj, i) => (
          <article className="project-card" key={proj.title}>
            {/* Zero-padded project number */}
            <span className="project-num">0{i + 1}</span>
            <div className="project-head">
              <h3 className="project-title">{proj.title}</h3>
              <span
                className={`project-status ${proj.status === "In Development" ? "in-progress" : "completed"}`}
              >
                {proj.status}
              </span>
            </div>

            <p className="project-desc">{proj.summary}</p>

            <div className="project-meta">
              <p className="project-meta-item">
                <strong>Problem Solved:</strong> {proj.problemSolved}
              </p>
              <p className="project-meta-item">
                <strong>Challenge Solved:</strong> {proj.challengeSolved}
              </p>
            </div>

            <div
              className="project-feature-list"
              aria-label={`${proj.title} key features`}
            >
              {proj.keyFeatures.map((feature) => (
                <span key={feature} className="feature-pill">
                  {feature}
                </span>
              ))}
            </div>

            {/* Technologies used */}
            <div className="project-tags">
              {proj.technologies.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>

            {/* Links to live demo and source code */}
            <div className="project-links">
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${proj.title} live demo`}
              >
                <ExternalLink size={13} /> Live
              </a>
              <a
                href={proj.code}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${proj.title} source code`}
              >
                <Github size={13} /> Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
