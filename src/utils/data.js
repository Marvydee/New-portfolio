import { Terminal, Layers, Globe, Cpu } from "lucide-react";

const SKILLS = [
  {
    category: "Frontend",
    icon: Layers,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    icon: Terminal,
    items: ["Node.js", "Express.js", "REST APIs", "PHP", "Laravel"],
  },
  {
    category: "Database",
    icon: Cpu,
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    icon: Globe,
    items: ["Git", "GitHub", "Firebase", "Vercel", "Figma"],
  },
];

const PROJECTS = [
  {
    title: "Brandhypez",
    summary:
      "A scalable multi-vendor e-commerce and business management platform built for store owners who need to run online sales and operations from one system.",
    problemSolved:
      "Small and growing businesses needed a single platform to manage stores, products, invoices, and customer records without fragmented tools.",
    keyFeatures: [
      "Multi-store management",
      "Invoice system",
      "Product management",
      "Customer tracking",
      "Role-based dashboards",
      "Offline support concepts",
      "Business automation tools",
    ],
    technologies: ["Laravel", "JavaScript", "React", "MySQL"],
    challengeSolved:
      "Designed a modular structure for vendor-level operations and dashboard permissions while keeping workflows fast and understandable for non-technical users.",
    status: "Completed",
    link: "https://brandhypez.com",
    code: "https://brandhypez.com",
  },
  {
    title: "AI WhatsApp Customer Service Assistant",
    summary:
      "An AI-powered support assistant for businesses to automate customer conversations on WhatsApp and improve response quality at scale.",
    problemSolved:
      "Manual support operations created delays, inconsistent responses, and missed follow-ups in high-volume customer messaging channels.",
    keyFeatures: [
      "AI-generated replies",
      "WhatsApp integration concepts",
      "Voice note understanding",
      "Payment reminders",
      "Order assistance",
      "Multilingual support",
      "Business automation workflows",
    ],
    technologies: ["JavaScript", "Node.js", "APIs", "AI Integrations"],
    challengeSolved:
      "Building reliable intent handling and multilingual response flows while keeping automated interactions useful, context-aware, and business-safe.",
    status: "In Development",
    link: "#",
    code: "#",
  },
  {
    title: "Weather Dashboard",
    summary:
      "Real-time weather platform with city search and forecast insights for quick daily planning.",
    problemSolved:
      "Users needed a simpler way to compare local weather conditions without navigating bulky weather portals.",
    keyFeatures: [
      "Real-time city search",
      "Current conditions",
      "Forecast snapshots",
      "Fast-loading UI",
    ],
    technologies: ["React", "OpenWeatherMap API", "CSS"],
    challengeSolved:
      "Handled API latency and error states with clear feedback to keep the experience reliable.",
    status: "Completed",
    link: "https://weathertell.pages.dev/",
    code: "https://github.com/Marvydee/weather-dashboard",
  },
  {
    title: "GitHub Profile Finder",
    summary:
      "Developer intelligence tool that fetches GitHub profiles and repository activity for quick technical screening.",
    problemSolved:
      "Needed a faster way to evaluate developer profiles and public contribution history from one interface.",
    keyFeatures: [
      "Profile search",
      "Repository insights",
      "Follower visibility",
      "Activity snapshots",
    ],
    technologies: ["JavaScript", "GitHub API", "Fetch"],
    challengeSolved:
      "Optimized API request flow to reduce unnecessary calls and improve responsiveness.",
    status: "Completed",
    link: "https://githubfind.pages.dev/",
    code: "https://github.com/Marvydee/github-profile-finder",
  },
  {
    title: "E-commerce Product Page",
    summary:
      "A conversion-focused product experience with interactive media, sizing flows, and cart interactions.",
    problemSolved:
      "Shoppers needed a clearer buying flow that reduces friction from product discovery to checkout intent.",
    keyFeatures: [
      "Interactive image gallery",
      "Size selector",
      "Cart logic",
      "Quantity controls",
    ],
    technologies: ["React", "State Management", "UI/UX"],
    challengeSolved:
      "Built predictable cart state transitions for smooth interaction across multiple user actions.",
    status: "Completed",
    link: "https://ecomstore.pages.dev/",
    code: "https://github.com/Marvydee/ecommerce-store",
  },
  {
    title: "Task Manager App",
    summary:
      "Productivity app for managing daily work with persistent tasks and intuitive state-driven interactions.",
    problemSolved:
      "Users needed a lightweight workflow system to track priorities without relying on complex PM tools.",
    keyFeatures: [
      "Task CRUD",
      "Drag-and-drop prioritization",
      "Persistent local storage",
      "Status tracking",
    ],
    technologies: ["React", "CRUD", "LocalStorage"],
    challengeSolved:
      "Ensured reliable persistence and ordering logic after multiple drag operations and refresh cycles.",
    status: "Completed",
    link: "https://task-manager-5ao.pages.dev/",
    code: "https://github.com/Marvydee/task-manager",
  },
  {
    title: "Currency Converter",
    summary:
      "Exchange tool for cross-currency conversion with visual trend representation and precision-focused calculations.",
    problemSolved:
      "Users needed accurate conversion data and quick comparisons across multiple global currencies.",
    keyFeatures: [
      "18-currency conversion",
      "Live exchange rates",
      "SVG chart",
      "Cross-rate calculations",
    ],
    technologies: ["React", "Exchange Rate API", "SVG"],
    challengeSolved:
      "Handled precision rounding and conversion edge cases for consistent numeric outputs.",
    status: "Completed",
    link: "https://fxmatrix.pages.dev/",
    code: "https://github.com/Marvydee/fx-matrix",
  },
  {
    title: "Movie Search App",
    summary:
      "Movie discovery experience with high-speed browsing, personalized watchlists, and filter-driven exploration.",
    problemSolved:
      "Users needed a streamlined way to discover relevant content quickly from a very large movie catalog.",
    keyFeatures: [
      "Infinite scrolling",
      "Debounced search",
      "Genre filters",
      "Personal watchlist",
    ],
    technologies: ["React", "TMDB API", "IntersectionObserver"],
    challengeSolved:
      "Balanced performance and API usage while delivering a smooth endless-browse experience.",
    status: "Completed",
    link: "https://cinexl.pages.dev/",
    code: "https://github.com/Marvydee/cinex",
  },
];

const EXPERIENCE = [
  {
    company: "MDJ Forge",
    role: "Founder & Fullstack Developer",
    period: "Current",
    description:
      "Technology-focused startup building scalable digital products and business systems.",
    responsibilities: [
      "Building and managing scalable web applications",
      "Developing SaaS-oriented business solutions",
      "Designing modern frontend systems and user experiences",
      "Working on automation-focused digital products",
      "Managing product architecture and technical implementation",
    ],
    technologies: ["JavaScript", "React", "Node.js", "Laravel", "MySQL"],
    status: "Active",
  },
  {
    company: "Brandhypez",
    role: "Fullstack Developer",
    period: "Delivered",
    description:
      "Multi-vendor e-commerce and business management platform designed to help business owners create online stores and manage operations efficiently.",
    responsibilities: [
      "Built invoice and customer management systems",
      "Customized Laravel-based business workflows",
      "Developed responsive admin dashboards",
      "Worked on offline-first functionality concepts",
      "Improved product and store management systems",
      "Designed scalable UI components and layouts",
    ],
    technologies: ["Laravel", "JavaScript", "React", "MySQL"],
    status: "Completed",
  },
  {
    company: "AI WhatsApp Customer Service Assistant",
    role: "In Development",
    period: "Currently Building",
    description:
      "AI-powered business assistant designed to automate customer support and communication workflows on WhatsApp.",
    responsibilities: [
      "Building AI-powered response systems",
      "Designing customer support automation workflows",
      "Exploring multilingual support systems",
      "Implementing business-focused automation concepts",
      "Working on voice-note understanding and smart replies",
    ],
    technologies: ["JavaScript", "Node.js", "APIs", "AI Integrations"],
    status: "In Development",
  },
];

const SERVICES = [
  {
    title: "Fullstack Web Development",
    description:
      "Building scalable, responsive, and modern web applications using JavaScript technologies and clean architecture principles.",
  },
  {
    title: "SaaS & Business Platforms",
    description:
      "Developing business-focused systems including dashboards, invoicing tools, multi-vendor platforms, and automation-driven applications.",
  },
  {
    title: "API & System Integrations",
    description:
      "Integrating third-party services, APIs, payment systems, automation workflows, and external platforms into modern web applications.",
  },
  {
    title: "UI/UX-Focused Interfaces",
    description:
      "Designing intuitive, responsive, and conversion-focused user experiences with clean modern interfaces.",
  },
];

const CAPABILITIES = [
  "Multi-vendor architecture",
  "Invoice management systems",
  "Responsive dashboard systems",
  "Offline-first concepts",
  "AI-assisted workflows",
  "Role-based access systems",
  "API integrations",
  "Business automation systems",
];

export { SKILLS, PROJECTS, EXPERIENCE, SERVICES, CAPABILITIES };
