import React from "react";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Large watermark text in background */}
      <span className="hero-bg-text">FRONTEND</span>

      <p className="hero-tag">Frontend Developer</p>

      {/* Main name display */}
      <h1 className="hero-name">
        Marvellous
        <br />
        <span>Divine</span>
      </h1>

      <p className="hero-sub">
        I build clean, fast, and accessible web interfaces — turning designs
        into real products people love to use.
      </p>

      {/* Call-to-action buttons */}
      <div className="hero-ctas">
        <a href="#projects" className="btn-primary">
          View Work <ArrowUpRight size={16} />
        </a>
        <a href="#contact" className="btn-outline">
          Get in Touch <Mail size={16} />
        </a>
      </div>

      {/* Social icons on right side */}
      <div className="hero-socials">
        <a href="https://github.com/Marvydee" target="_blank" rel="noreferrer">
          <Github size={18} />
        </a>
        <a
          href="https://linkedin.com/in/marvellousdivine"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={18} />
        </a>
        <a href="mailto:divinemarvellous0@email.com">
          <Mail size={18} />
        </a>
      </div>
    </section>
  );
}

export default Hero;
