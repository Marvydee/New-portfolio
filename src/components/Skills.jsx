import React from "react";
import { SKILLS } from "../utils/data";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <p className="section-label">What I Know</p>
      <h2 className="section-title">Engineering Stack</h2>

      <div className="skills-grid skills-category-grid">
        {SKILLS.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <article
              className="skill-card skill-category-card"
              key={category.category}
            >
              <div className="skill-header skill-category-title">
                <span className="skill-name">
                  <CategoryIcon size={16} /> {category.category}
                </span>
              </div>

              <div
                className="skill-list"
                aria-label={`${category.category} technologies`}
              >
                {category.items.map((item) => (
                  <span className="tag skill-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
