const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:       #080808;
    --surface:  #0f0f0f;
    --surface2: #141414;
    --border:   #2a2a2a;
    --border2:  #333333;
    --accent:   #e8ff47;
    --accent2:  #ff6b35;
    --text:     #f5f5f5;
    --text2:    #c8c8c8;
    --body-txt: #a8a8a8;
    --muted:    #888888;
    --font-display: 'Bebas Neue', sans-serif;
    --font-body:    'DM Sans', sans-serif;
    --font-mono:    'DM Mono', monospace;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.6;
    cursor: none;
  }

  /* Custom cursor */
  .cursor {
    width: 10px; height: 10px;
    background: var(--accent);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    mix-blend-mode: difference;
  }
  .cursor-ring {
    width: 32px; height: 32px;
    border: 1.5px solid rgba(232,255,71,0.6);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9998;
    transition: all 0.2s ease;
    mix-blend-mode: difference;
  }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--accent); }

  /* ── NAV ── */
  nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 1.1rem 2.5rem;
    display: flex; align-items: center; justify-content: space-between;
    background: rgba(8,8,8,0.92);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
  }
  .nav-logo {
    font-family: var(--font-display);
    font-size: 1.5rem;
    color: var(--accent);
    letter-spacing: 3px;
  }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links a {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--muted);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--accent); }
  .nav-mobile { display: none; background: none; border: none; color: var(--text); cursor: none; }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex; flex-direction: column;
    justify-content: flex-end;
    padding: 8rem 2.5rem 5rem;
    position: relative;
    overflow: hidden;
  }
  /* Subtle radial glow behind the name */
  .hero::before {
    content: '';
    position: absolute;
    top: 30%; left: -10%;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(232,255,71,0.04) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-bg-text {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-family: var(--font-display);
    font-size: clamp(80px, 18vw, 240px);
    color: transparent;
    -webkit-text-stroke: 1px #1e1e1e;
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    letter-spacing: 8px;
  }
  .hero-tag {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 1rem;
    animation: fadeUp 0.6s ease both;
    display: flex; align-items: center; gap: 0.5rem;
  }
  .hero-tag::before {
    content: '';
    width: 24px; height: 1px;
    background: var(--accent);
  }
  .hero-name {
    font-family: var(--font-display);
    font-size: clamp(4rem, 11vw, 10rem);
    line-height: 0.88;
    letter-spacing: 3px;
    color: var(--text);
    animation: fadeUp 0.6s 0.1s ease both;
  }
  .hero-name span { color: var(--accent); }
  .hero-sub {
    font-size: 1.05rem;
    color: var(--text2);
    max-width: 500px;
    margin-top: 1.75rem;
    font-weight: 400;
    line-height: 1.75;
    animation: fadeUp 0.6s 0.2s ease both;
  }
  .hero-ctas {
    display: flex; gap: 1rem; flex-wrap: wrap;
    margin-top: 2.5rem;
    animation: fadeUp 0.6s 0.3s ease both;
  }
  .btn-primary {
    background: var(--accent);
    color: #080808;
    padding: 0.9rem 2rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: none;
    display: inline-flex; align-items: center; gap: 0.5rem;
    transition: all 0.2s;
    border: 2px solid var(--accent);
  }
  .btn-primary:hover { background: transparent; color: var(--accent); }
  .btn-outline {
    border: 1px solid var(--border2);
    color: var(--text2);
    padding: 0.9rem 2rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: none;
    display: inline-flex; align-items: center; gap: 0.5rem;
    transition: all 0.2s;
  }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); }

  .hero-socials {
    position: absolute; right: 2.5rem; bottom: 5rem;
    display: flex; flex-direction: column; gap: 1.25rem; align-items: center;
    animation: fadeUp 0.6s 0.4s ease both;
  }
  .hero-socials::before {
    content: ''; width: 1px; height: 60px;
    background: linear-gradient(to bottom, transparent, var(--border2));
  }
  .hero-socials a { color: var(--muted); transition: color 0.2s, transform 0.2s; }
  .hero-socials a:hover { color: var(--accent); transform: scale(1.2); }

  /* ── SECTIONS ── */
  section { padding: 7rem 2.5rem; }
  .section-label {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 0.75rem;
    display: flex; align-items: center; gap: 0.75rem;
  }
  .section-label::after {
    content: ''; flex: 1; max-width: 48px;
    height: 1px; background: var(--accent); opacity: 0.6;
  }
  .section-title {
    font-family: var(--font-display);
    font-size: clamp(2.8rem, 6vw, 5.5rem);
    line-height: 0.95;
    letter-spacing: 2px;
    color: var(--text);
    margin-bottom: 0.5rem;
  }

  /* ── ABOUT ── */
  .about-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 5rem; align-items: start; margin-top: 3.5rem;
  }
  .about-text p {
    color: var(--body-txt);
    font-size: 1rem;
    line-height: 1.9;
    margin-bottom: 1.5rem;
  }
  .about-text strong { color: var(--text); font-weight: 600; }
  .about-stats {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }
  .stat-box {
    border: 1px solid var(--border2);
    padding: 1.5rem;
    position: relative;
    overflow: hidden;
    background: var(--surface2);
    transition: border-color 0.2s;
  }
  .stat-box:hover { border-color: var(--accent); }
  .stat-box::before {
    content: ''; position: absolute;
    top: 0; left: 0; width: 3px; height: 100%;
    background: var(--accent);
  }
  .stat-num {
    font-family: var(--font-display);
    font-size: 3rem;
    color: var(--accent);
    line-height: 1;
  }
  /* Stat descriptions are clearly readable */
  .stat-desc {
    font-size: 0.82rem;
    color: var(--text2);
    margin-top: 0.4rem;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  /* ── SKILLS ── */
  .skills-section { background: var(--surface); }
  .skills-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.25rem; margin-top: 3rem;
  }
  .skill-card {
    border: 1px solid var(--border2);
    padding: 1.5rem;
    background: var(--surface2);
    transition: border-color 0.2s, transform 0.2s;
  }
  .skill-card:hover { border-color: var(--accent); transform: translateY(-3px); }
  .skill-header {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 1rem;
  }
  .skill-name {
    display: flex; align-items: center; gap: 0.6rem;
    font-size: 0.92rem; font-weight: 500;
    color: var(--text);
  }
  .skill-name svg { color: var(--accent); }
  /* Percentage is now clearly visible */
  .skill-pct {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--accent);
    font-weight: 500;
  }
  .skill-bar {
    height: 2px;
    background: var(--border2);
    overflow: hidden;
  }
  .skill-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    transition: width 1s ease;
  }

  /* ── PROJECTS ── */
  .projects-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem; margin-top: 3rem;
  }
  .project-card {
    border: 1px solid var(--border2);
    padding: 2rem;
    display: flex; flex-direction: column;
    transition: border-color 0.2s, transform 0.2s;
    position: relative; overflow: hidden;
    background: var(--surface2);
  }
  .project-card::after {
    content: ''; position: absolute;
    bottom: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    transform: scaleX(0);
    transition: transform 0.35s ease;
    transform-origin: left;
  }
  .project-card:hover { border-color: var(--border2); transform: translateY(-4px); }
  .project-card:hover::after { transform: scaleX(1); }
  /* Project number — subtle but visible */
  .project-num {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--accent);
    opacity: 0.6;
    margin-bottom: 1rem;
    letter-spacing: 1px;
  }
  .project-title {
    font-family: var(--font-display);
    font-size: 1.55rem; letter-spacing: 1px;
    color: var(--text);
    margin-bottom: 0.75rem;
  }
  /* Project descriptions — properly readable */
  .project-desc {
    font-size: 0.88rem;
    color: var(--body-txt);
    line-height: 1.75;
    flex: 1;
  }
  .project-tags {
    display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1.25rem;
  }
  .tag {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    border: 1px solid var(--border2);
    padding: 0.25rem 0.65rem;
    color: var(--text2);
    text-transform: uppercase; letter-spacing: 1px;
    background: rgba(255,255,255,0.03);
  }
  .project-links {
    display: flex; gap: 1rem; margin-top: 1.5rem;
    padding-top: 1.25rem; border-top: 1px solid var(--border);
  }
  .project-links a {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--text2);
    text-decoration: none;
    display: flex; align-items: center; gap: 0.35rem;
    text-transform: uppercase; letter-spacing: 1px;
    transition: color 0.2s;
  }
  .project-links a:hover { color: var(--accent); }

  /* ── CONTACT ── */
  .contact-section { background: var(--surface); }
  .contact-inner {
    max-width: 640px;
    margin-top: 3rem;
  }
  /* Contact paragraph — clearly readable */
  .contact-inner p {
    color: var(--body-txt);
    font-size: 1rem;
    margin-bottom: 2.5rem;
    line-height: 1.85;
  }
  .contact-email {
    font-family: var(--font-display);
    font-size: clamp(1.4rem, 3.5vw, 2.5rem);
    color: var(--accent);
    text-decoration: none;
    letter-spacing: 2px;
    display: flex; align-items: center; gap: 0.75rem;
    margin-bottom: 2rem;
    transition: opacity 0.2s, gap 0.2s;
  }
  .contact-email:hover { opacity: 0.75; gap: 1.1rem; }
  .contact-links { display: flex; gap: 1rem; flex-wrap: wrap; }
  .contact-links a {
    border: 1px solid var(--border2);
    padding: 0.75rem 1.25rem;
    color: var(--text2);
    text-decoration: none;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase; letter-spacing: 1.5px;
    display: flex; align-items: center; gap: 0.5rem;
    transition: all 0.2s;
    background: var(--surface2);
  }
  .contact-links a:hover { border-color: var(--accent); color: var(--accent); }

  /* ── FOOTER ── */
  footer {
    padding: 1.75rem 2.5rem;
    border-top: 1px solid var(--border);
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 1rem;
  }
  footer p {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--muted);
  }
  footer span { color: var(--accent); }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    nav { padding: 1rem 1.5rem; }
    .nav-links { display: none; }
    .nav-mobile { display: block; }
    .nav-links.open {
      display: flex; flex-direction: column;
      position: fixed; inset: 0;
      background: var(--bg);
      padding: 6rem 2rem; gap: 2rem;
    }
    .nav-links.open a { font-size: 1rem; }
    section { padding: 4rem 1.5rem; }
    .hero { padding: 7rem 1.5rem 3rem; }
    .hero-socials { display: none; }
    .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .about-stats { grid-template-columns: 1fr 1fr; }
    footer { flex-direction: column; text-align: center; }
  }
`;

export default globalStyles;
