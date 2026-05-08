import React from "react";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Large watermark text in background */}
      <span className="hero-bg-text">FULLSTACK</span>

      <p className="hero-tag">Fullstack Developer</p>

      {/* Main name display */}
      <h1 className="hero-name">
        Marvellous
        <br />
        <span>Divine</span>
      </h1>

      <p className="hero-sub">
        I build scalable web applications and business-focused digital products
        using modern JavaScript technologies, APIs, and product-driven UX.
      </p>

      {/* Call-to-action buttons */}
      <div className="hero-ctas">
        <a href="#projects" className="btn-primary">
          Explore Case Studies <ArrowUpRight size={16} />
        </a>
        <a href="#contact" className="btn-outline">
          Book a Collaboration Call <Mail size={16} />
        </a>
      </div>

      {/* Social icons on right side */}
      <div className="hero-socials">
        <a
          href="https://github.com/Marvydee"
          target="_blank"
          rel="noreferrer"
          aria-label="Open GitHub profile"
        >
          <Github size={18} />
        </a>
        <a
          href="https://linkedin.com/in/marvellousdivine"
          target="_blank"
          rel="noreferrer"
          aria-label="Open LinkedIn profile"
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
