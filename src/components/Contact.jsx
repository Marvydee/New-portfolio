import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <p className="section-label">Let's Talk</p>
      <h2 className="section-title">Contact</h2>

      <div className="contact-inner">
        <p>
          I'm currently open to frontend developer roles — full-time, contract,
          or freelance. If you have a project in mind or just want to connect,
          my inbox is always open.
        </p>

        {/* Clickable email */}
        <a className="contact-email" href="mailto:divinemarvellous0@email.com">
          <Mail size={28} /> divinemarvellous0@email.com
        </a>

        {/* Social links */}
        <div className="contact-links">
          <a
            href="https://github.com/Marvydee"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/marvellousdivine"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
