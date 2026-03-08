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
            I'm <strong>Marvellous Divine</strong>, a self-taught frontend
            developer with a passion for building interfaces that feel as good
            as they look. I transitioned into tech through curiosity, and I
            haven't stopped building since.
          </p>
          <p>
            My focus is on <strong>React, JavaScript, and CSS</strong> —
            creating performant, responsive, and accessible web experiences. I'm
            currently open to frontend roles where I can grow and contribute to
            meaningful products.
          </p>
        </div>

        {/* Right: stat boxes */}
        <div className="about-stats">
          {[
            { num: "7+", desc: "Projects Built" },
            { num: "2+", desc: "Years Learning" },
            { num: "5+", desc: "APIs Integrated" },
            { num: "100%", desc: "Self-Taught" },
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
