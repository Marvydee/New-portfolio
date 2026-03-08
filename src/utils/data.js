import { Code2, Terminal, Layers, Globe, Cpu, Zap } from "lucide-react";

const SKILLS = [
  { name: "HTML & CSS", icon: Code2, level: 90 },
  { name: "JavaScript", icon: Terminal, level: 82 },
  { name: "React", icon: Layers, level: 75 },
  { name: "REST APIs", icon: Globe, level: 70 },
  { name: "Responsive Design", icon: Cpu, level: 88 },
  { name: "Performance", icon: Zap, level: 72 },
];

const PROJECTS = [
  {
    title: "Weather Dashboard",
    description:
      "Live weather app using OpenWeatherMap API. Search any city and get real-time conditions, temperature, and forecasts.",
    tags: ["React", "API", "CSS"],
    link: "https://weathertell.pages.dev/",
    code: "https://github.com/Marvydee/weather-dashboard",
  },
  {
    title: "GitHub Profile Finder",
    description:
      "Search any GitHub user and view their repos, followers, and activity using the GitHub REST API.",
    tags: ["JavaScript", "GitHub API", "Fetch"],
    link: "https://githubfind.pages.dev/",
    code: "https://github.com/Marvydee/github-profile-finder",
  },
  {
    title: "E-commerce Product Page",
    description:
      "A fully interactive product page with image gallery, size selector, cart logic and quantity controls.",
    tags: ["React", "State", "UI/UX"],
    link: "https://ecomstore.pages.dev/",
    code: "https://github.com/Marvydee/ecommerce-store",
  },
  {
    title: "Task Manager App",
    description:
      "Create, edit, complete, and delete tasks. Drag-and-drop reordering with localStorage persistence.",
    tags: ["React", "CRUD", "LocalStorage"],
    link: "https://task-manager-5ao.pages.dev/",
    code: "https://github.com/Marvydee/task-manager",
  },
  {
    title: "Currency Converter",
    description:
      "Live exchange rates via open.er-api.com. Convert between 18 currencies with a hand-built SVG rate chart and cross-rate math.",
    tags: ["React", "API", "SVG"],
    link: "https://fxmatrix.pages.dev/",
    code: "https://github.com/Marvydee/fx-matrix",
  },
  {
    title: "Movie Search App",
    description:
      "Full movie discovery platform using the TMDB API. Infinite scroll, debounced search, genre filters, and a personal watchlist.",
    tags: ["React", "TMDB API", "IntersectionObserver"],
    link: "https://cinexl.pages.dev/",
    code: "https://github.com/Marvydee/cinex",
  },
];

export { SKILLS, PROJECTS };
