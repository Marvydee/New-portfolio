import React from "react";
import { useState, useEffect } from "react";
function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      // ring lags behind using setTimeout
      setTimeout(() => setRing({ x: e.clientX, y: e.clientY }), 80);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Dot */}
      <div className="cursor" style={{ left: pos.x - 6, top: pos.y - 6 }} />
      {/* Ring — slightly lagging */}
      <div
        className="cursor-ring"
        style={{ left: ring.x - 18, top: ring.y - 18 }}
      />
    </>
  );
}

export default Cursor;
