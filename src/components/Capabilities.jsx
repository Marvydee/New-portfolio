import React from "react";
import { CAPABILITIES } from "../utils/data";

function Capabilities() {
  return (
    <section className="capabilities-section" id="capabilities">
      <div className="capabilities-inner">
        <p className="section-label">Capabilities</p>
        <h2 className="capabilities-title">Operational Strengths</h2>

        <div
          className="capabilities-strip"
          aria-label="Operational and technical capabilities"
        >
          {CAPABILITIES.map((capability) => (
            <span className="capability-item" key={capability}>
              {capability}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
