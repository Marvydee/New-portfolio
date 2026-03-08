import React from "react";
import { SKILLS } from "../utils/data";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <p className="section-label">What I Know</p>
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {SKILLS.map((skill) => {
          const Icon = skill.icon; // pull out the icon component
          return (
            <div className="skill-card" key={skill.name}>
              <div className="skill-header">
                <span className="skill-name">
                  <Icon size={16} /> {skill.name}
                </span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                {/* Width is set inline so each bar fills to its own level */}
                <div
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
