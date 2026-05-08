import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import { EXPERIENCE } from "../utils/data";

function Experience() {
  return (
    <section id="experience">
      <p className="section-label">Professional Experience</p>
      <h2 className="section-title">Experience</h2>

      <div className="experience-grid">
        {EXPERIENCE.map((item) => (
          <article className="experience-card" key={item.company}>
            <div className="experience-head">
              <div>
                <h3 className="experience-company">{item.company}</h3>
                <p className="experience-role">{item.role}</p>
              </div>
              <div className="experience-badges">
                <span className="experience-period">{item.period}</span>
                <span
                  className={`experience-status ${item.status === "In Development" ? "in-progress" : "active"}`}
                >
                  {item.status}
                </span>
              </div>
            </div>

            <p className="experience-desc">{item.description}</p>

            <div className="experience-responsibilities">
              {item.responsibilities.map((responsibility) => (
                <p className="experience-point" key={responsibility}>
                  <BriefcaseBusiness size={14} /> {responsibility}
                </p>
              ))}
            </div>

            <div className="project-tags experience-tech">
              {item.technologies.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
