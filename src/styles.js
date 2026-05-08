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

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
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
  .nav-links li { display: flex; }
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
  .nav-mobile { 
    display: none; 
    background: none; 
    border: none; 
    color: var(--text); 
    cursor: pointer;
    padding: 0.5rem;
    line-height: 1;
  }

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
    font-size: 1.08rem;
    color: var(--text2);
    max-width: 620px;
    margin-top: 1.75rem;
    font-weight: 400;
    line-height: 1.8;
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
    transition: all 0.25s ease;
    border: 2px solid var(--accent);
  }
  .btn-primary:hover { background: transparent; color: var(--accent); transform: translateY(-2px); }
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
    transition: all 0.25s ease;
  }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }

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
    gap: 4rem; align-items: start; margin-top: 3.5rem;
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
  .skills-category-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .skill-card {
    border: 1px solid var(--border2);
    padding: 1.5rem;
    background: var(--surface2);
    transition: border-color 0.2s, transform 0.2s;
  }
  .skill-card:hover { border-color: var(--accent); transform: translateY(-3px); }
  .skill-category-card { min-height: 220px; }
  .skill-header {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 1rem;
  }
  .skill-category-title { margin-bottom: 1.2rem; }
  .skill-name {
    display: flex; align-items: center; gap: 0.6rem;
    font-size: 0.92rem; font-weight: 500;
    color: var(--text);
  }
  .skill-name svg { color: var(--accent); }
  .skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
  .skill-chip {
    padding: 0.32rem 0.75rem;
    font-size: 0.64rem;
    color: var(--text);
    border-color: var(--border2);
    background: rgba(255, 255, 255, 0.02);
  }

  /* ── CAPABILITIES ── */
  .capabilities-section {
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;
    background: linear-gradient(180deg, var(--bg) 0%, #0b0b0b 100%);
  }
  .capabilities-inner {
    border: 1px solid var(--border2);
    background: var(--surface2);
    padding: 1.75rem;
  }
  .capabilities-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 0.95;
    letter-spacing: 1.5px;
    margin-bottom: 1.3rem;
  }
  .capabilities-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
  .capability-item {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text2);
    border: 1px solid var(--border2);
    background: rgba(255, 255, 255, 0.015);
    padding: 0.38rem 0.68rem;
  }

  /* ── EXPERIENCE ── */
  .experience-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-top: 3rem;
  }
  .experience-card {
    border: 1px solid var(--border2);
    background: var(--surface2);
    padding: 1.8rem;
    position: relative;
    transition: border-color 0.2s, transform 0.2s;
  }
  .experience-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: var(--accent);
    opacity: 0.75;
  }
  .experience-card:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }
  .experience-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.9rem;
  }
  .experience-company {
    font-family: var(--font-display);
    font-size: clamp(1.7rem, 4.5vw, 2.35rem);
    line-height: 0.95;
    letter-spacing: 1px;
  }
  .experience-role {
    font-family: var(--font-mono);
    color: var(--text2);
    font-size: 0.75rem;
    letter-spacing: 1.3px;
    text-transform: uppercase;
    margin-top: 0.25rem;
  }
  .experience-badges {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.45rem;
  }
  .experience-period,
  .experience-status {
    font-family: var(--font-mono);
    font-size: 0.64rem;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    border: 1px solid var(--border2);
    color: var(--text2);
    padding: 0.32rem 0.58rem;
  }
  .experience-status.active {
    border-color: rgba(232,255,71,0.45);
    color: var(--accent);
  }
  .experience-status.in-progress {
    border-color: rgba(255,107,53,0.5);
    color: #ff9a72;
  }
  .experience-desc {
    font-size: 0.95rem;
    line-height: 1.78;
    color: var(--body-txt);
    margin-bottom: 1rem;
  }
  .experience-responsibilities {
    display: grid;
    gap: 0.55rem;
    margin-bottom: 1rem;
  }
  .experience-point {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    color: var(--text2);
    font-size: 0.84rem;
    line-height: 1.65;
  }
  .experience-point svg {
    margin-top: 0.15rem;
    color: var(--accent);
    flex-shrink: 0;
  }
  .experience-tech {
    margin-top: 0.9rem;
  }

  /* ── SERVICES ── */
  .services-section {
    background: var(--surface);
  }
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.25rem;
    margin-top: 3rem;
  }
  .service-card {
    border: 1px solid var(--border2);
    background: var(--surface2);
    padding: 1.55rem;
    transition: border-color 0.22s, transform 0.22s, background-color 0.22s;
  }
  .service-card:hover {
    border-color: var(--accent);
    transform: translateY(-3px);
    background: #171717;
  }
  .service-title-wrap {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    margin-bottom: 0.75rem;
  }
  .service-title-wrap svg {
    color: var(--accent);
  }
  .service-title {
    font-family: var(--font-display);
    letter-spacing: 1px;
    font-size: 1.45rem;
    line-height: 1;
  }
  .service-desc {
    color: var(--body-txt);
    font-size: 0.9rem;
    line-height: 1.75;
  }

  /* ── PROJECTS ── */
  .projects-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
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
  .project-card:hover { border-color: var(--accent); transform: translateY(-4px); }
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
    margin-bottom: 0;
  }
  .project-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    margin-bottom: 0.85rem;
  }
  .project-status {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    padding: 0.3rem 0.55rem;
    border: 1px solid var(--border2);
    color: var(--text2);
    white-space: nowrap;
  }
  .project-status.completed {
    border-color: rgba(232,255,71,0.45);
    color: var(--accent);
  }
  .project-status.in-progress {
    border-color: rgba(255,107,53,0.45);
    color: #ff9a72;
  }
  /* Project descriptions — properly readable */
  .project-desc {
    font-size: 0.9rem;
    color: var(--body-txt);
    line-height: 1.75;
    margin-bottom: 1rem;
  }
  .project-meta {
    display: grid;
    gap: 0.65rem;
    margin-bottom: 1rem;
  }
  .project-meta-item {
    font-size: 0.82rem;
    color: var(--text2);
    line-height: 1.7;
  }
  .project-meta-item strong {
    color: var(--text);
    font-weight: 600;
  }
  .project-feature-list {
    display: flex;
    gap: 0.45rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  .feature-pill {
    font-family: var(--font-body);
    font-size: 0.72rem;
    color: var(--text2);
    border: 1px solid var(--border);
    background: rgba(255,255,255,0.02);
    padding: 0.28rem 0.55rem;
  }
  .project-tags {
    display: flex; gap: 0.5rem; flex-wrap: wrap;
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
    font-size: 1.02rem;
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
    .nav-mobile { 
      display: flex; 
      align-items: center; 
      justify-content: center;
      z-index: 101;
    }
    .nav-links.open {
      display: flex; 
      flex-direction: column;
      position: fixed; 
      top: 0; 
      left: 0; 
      right: 0; 
      bottom: 0;
      background: rgba(8,8,8,0.98);
      backdrop-filter: blur(16px);
      padding: 7rem 2rem 2rem;
      gap: 0;
      z-index: 100;
      overflow-y: auto;
      animation: slideDown 0.3s ease-out;
      width: 100%;
      height: 100vh;
    }
    .nav-links.open li {
      display: flex;
      width: 100%;
    }
    .nav-links.open a { 
      display: flex;
      width: 100%;
      font-size: 0.9rem;
      padding: 1rem 0;
      border-bottom: 1px solid var(--border);
      transition: color 0.2s;
    }
    .nav-links.open a:hover { color: var(--accent); }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    section { padding: 4rem 1.5rem; }
    .hero { padding: 7rem 1.5rem 3rem; }
    .hero-sub { max-width: 100%; font-size: 1rem; }
    .hero-socials { display: none; }
    .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    .about-stats { grid-template-columns: 1fr 1fr; }
    .capabilities-section { padding-top: 4rem; padding-bottom: 4rem; }
    .capabilities-inner { padding: 1.25rem; }
    .capabilities-title { margin-bottom: 1rem; }
    .experience-card { padding: 1.35rem; }
    .experience-head { flex-direction: column; gap: 0.8rem; }
    .experience-badges { flex-direction: row; align-items: center; }
    .services-grid { grid-template-columns: 1fr; }
    .projects-grid { grid-template-columns: 1fr; }
    .project-card { padding: 1.5rem; }
    .project-head { align-items: flex-start; flex-direction: column; }
    .contact-email { letter-spacing: 1px; }
    footer { flex-direction: column; text-align: center; }
  }
`;

export default globalStyles;
