import React from "react";

const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p>
        © {currentYear} <span>Marvellous Divine</span>. All rights reserved.
      </p>
      <p>
        Built with <span>React</span> + Lucide Icons
      </p>
    </footer>
  );
}

export default Footer;
