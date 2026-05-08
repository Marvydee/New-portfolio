import React from "react";
import { Layers2 } from "lucide-react";
import { SERVICES } from "../utils/data";

function Services() {
  return (
    <section className="services-section" id="services">
      <p className="section-label">How I Contribute</p>
      <h2 className="section-title">Services</h2>

      <div className="services-grid">
        {SERVICES.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-title-wrap">
              <Layers2 size={16} />
              <h3 className="service-title">{service.title}</h3>
            </div>
            <p className="service-desc">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
