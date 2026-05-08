import React from "react";
function About() {
  return (
    <section id="about">
      <p className="section-label">Who I Am</p>
      <h2 className="section-title">About Me</h2>

      <div className="about-grid">
        {/* Left: text */}
        <div className="about-text">
          <p>
            I am <strong>Marvellous Divine</strong>, a fullstack developer who
            designs and ships practical digital products for real business
            problems. I build fast, maintainable systems with a strong focus on
            usability and measurable outcomes.
          </p>
          <p>
            My stack includes{" "}
            <strong>
              React, JavaScript, TypeScript, Node.js, APIs, and responsive UI
              engineering
            </strong>
            , with working familiarity in{" "}
            <strong>Laravel/PHP and database-backed applications</strong>. I
            enjoy building SaaS workflows, operational dashboards, and scalable
            product experiences from interface to backend logic.
          </p>
        </div>

        {/* Right: stat boxes */}
        <div className="about-stats">
          {[
            { num: "10+", desc: "Products & Projects Built" },
            { num: "8+", desc: "Business Workflows Implemented" },
            { num: "15+", desc: "API Integrations Delivered" },
            { num: "E2E", desc: "Frontend to Backend Ownership" },
          ].map((s) => (
            <div className="stat-box" key={s.desc}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
