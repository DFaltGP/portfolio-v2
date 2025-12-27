export interface SkillIcon {
  iconName: string;
  skillName: string;
  category: "Frontend" | "Backend" | "Fullstack" | "DevOps";
  yearsOfExperience: number;
  level: number;
  description: string;
  howIUse: string;
  technicalTerms: string;
  simpleTerms: string;
  keyProjects: string[];
}

export const skillsIcons: SkillIcon[] = [
  {
    iconName: "typescript",
    skillName: "TypeScript",
    category: "Fullstack",
    yearsOfExperience: 3,
    level: 90,
    description:
      "A strongly typed superset of JavaScript that adds static typing and enhanced IDE support for building robust applications.",
    howIUse:
      "I use TypeScript across all my projects for type safety, better code documentation, and catching errors during development rather than runtime.",
    technicalTerms:
      "Static typing, interfaces, generics, type inference, union types, decorators, and advanced type manipulation for compile-time type checking.",
    simpleTerms:
      "It's like JavaScript with extra rules that help catch mistakes before your code runs, making your programs more reliable and easier to work with.",
    keyProjects: [
      "E-commerce Platform",
      "Portfolio Website",
      "Task Management App",
    ],
  },
  {
    iconName: "svelte",
    skillName: "Svelte",
    category: "Frontend",
    yearsOfExperience: 2,
    level: 90,
    description:
      "A modern JavaScript framework that compiles components into highly efficient vanilla JavaScript at build time, resulting in faster runtime performance.",
    howIUse:
      "I build reactive user interfaces with minimal boilerplate code. Svelte is my go-to for creating performant web applications with excellent developer experience.",
    technicalTerms:
      "Compile-time framework, reactive declarations, component scoped styles, stores for state management, transitions and animations, and ahead-of-time compilation.",
    simpleTerms:
      "A tool that helps build websites that are super fast and smooth because it does most of the heavy work before the site is published, not while users are browsing.",
    keyProjects: [
      "Portfolio Website",
      "Real-time Dashboard",
      "Interactive Data Visualizer",
    ],
  },
  {
    iconName: "react",
    skillName: "React JS",
    category: "Frontend",
    yearsOfExperience: 4,
    level: 90,
    description:
      "A powerful JavaScript library for building user interfaces with reusable components and efficient rendering through virtual DOM.",
    howIUse:
      "I develop complex single-page applications, create reusable component libraries, and leverage the React ecosystem including hooks, context, and state management.",
    technicalTerms:
      "Virtual DOM, JSX syntax, component lifecycle, hooks (useState, useEffect, useContext), reconciliation algorithm, one-way data binding, and HOCs.",
    simpleTerms:
      "A popular tool for building websites that makes it easy to create interactive pages that update quickly when you click buttons or fill in forms.",
    keyProjects: [
      "E-commerce Platform",
      "Social Media Dashboard",
      "Admin Panel System",
    ],
  },
  {
    iconName: "tailwindcss",
    skillName: "Tailwind CSS",
    category: "Frontend",
    yearsOfExperience: 3,
    level: 95,
    description:
      "A utility-first CSS framework that enables rapid UI development through pre-built classes without writing custom CSS.",
    howIUse:
      "I use Tailwind for all styling needs, creating responsive designs quickly with utility classes, and maintaining consistent design systems across projects.",
    technicalTerms:
      "Utility-first CSS, JIT compilation, responsive design utilities, custom configuration, purging unused styles, component extraction, and design tokens.",
    simpleTerms:
      "Instead of writing custom styling code from scratch, it provides ready-made building blocks to make websites look beautiful and work on any device size.",
    keyProjects: ["Portfolio Website", "Landing Pages", "E-commerce Platform"],
  },
  {
    iconName: "nodejs",
    skillName: "Node JS",
    category: "Backend",
    yearsOfExperience: 4,
    level: 85,
    description:
      "A JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run on servers, enabling full-stack JavaScript development.",
    howIUse:
      "I build RESTful APIs, real-time applications with WebSockets, microservices, and handle server-side logic for web applications.",
    technicalTerms:
      "Event-driven architecture, non-blocking I/O, npm ecosystem, Express.js middleware, streams, buffers, cluster module, and asynchronous programming patterns.",
    simpleTerms:
      "It lets programmers use the same language (JavaScript) to build both the visible parts of websites and the behind-the-scenes server parts that store and process data.",
    keyProjects: [
      "REST API Services",
      "Real-time Chat Application",
      "Microservices Architecture",
    ],
  },
  {
    iconName: "rust",
    skillName: "Rust",
    category: "Backend",
    yearsOfExperience: 2,
    level: 90,
    description:
      "A systems programming language focused on safety, speed, and concurrency without garbage collection.",
    howIUse:
      "I build high-performance backend services, CLI tools, and performance-critical components where memory safety and speed are paramount.",
    technicalTerms:
      "Ownership system, borrowing, lifetimes, zero-cost abstractions, trait system, pattern matching, memory safety without GC, and fearless concurrency.",
    simpleTerms:
      "A programming language that creates super fast and reliable programs by preventing common mistakes that cause crashes or security problems.",
    keyProjects: ["High-Performance API", "CLI Tools", "WebAssembly Modules"],
  },
  {
    iconName: "cs",
    skillName: "C#",
    category: "Backend",
    yearsOfExperience: 3,
    level: 85,
    description:
      "A modern, object-oriented programming language developed by Microsoft, widely used for enterprise applications and game development.",
    howIUse:
      "I develop enterprise-level applications, REST APIs with ASP.NET Core, and leverage the .NET ecosystem for building scalable backend systems.",
    technicalTerms:
      "Object-oriented programming, LINQ, async/await patterns, generics, delegates, events, reflection, dependency injection, and Entity Framework ORM.",
    simpleTerms:
      "A versatile programming language created by Microsoft that helps build professional business applications, games, and websites with powerful features.",
    keyProjects: [
      "Enterprise ERP System",
      "RESTful Web Services",
      "Background Job Processors",
    ],
  },
  {
    iconName: "dotnet",
    skillName: ".NET",
    category: "Backend",
    yearsOfExperience: 3,
    level: 85,
    description:
      "A free, cross-platform, open-source developer platform for building many different types of applications.",
    howIUse:
      "I use .NET Core for building cross-platform APIs, web applications with Blazor, and enterprise-grade backend services with excellent performance.",
    technicalTerms:
      "Cross-platform runtime, ASP.NET Core, Entity Framework, middleware pipeline, dependency injection container, Kestrel web server, and minimal APIs.",
    simpleTerms:
      "A complete toolkit from Microsoft that provides everything needed to build professional applications that work on Windows, Mac, and Linux computers.",
    keyProjects: [
      "Enterprise Web Applications",
      "Microservices Platform",
      "Admin Dashboard APIs",
    ],
  },
  {
    iconName: "postgresql",
    skillName: "PostgreSQL",
    category: "Backend",
    yearsOfExperience: 4,
    level: 90,
    description:
      "A powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance.",
    howIUse:
      "I design database schemas, write complex queries, implement stored procedures, handle data migrations, and optimize query performance for scalable applications.",
    technicalTerms:
      "ACID compliance, SQL queries, indexes, foreign keys, triggers, views, transactions, JSONB data type, full-text search, and query optimization.",
    simpleTerms:
      "A sophisticated system for storing and organizing large amounts of data safely and efficiently, like a very smart digital filing cabinet with powerful search capabilities.",
    keyProjects: [
      "E-commerce Database",
      "Analytics Platform",
      "User Management System",
    ],
  },
  {
    iconName: "redis",
    skillName: "Redis",
    category: "Backend",
    yearsOfExperience: 2,
    level: 80,
    description:
      "An in-memory data structure store commonly used as a database, cache, and message broker for high-performance applications.",
    howIUse:
      "I use Redis for caching frequently accessed data, managing sessions, implementing rate limiting, and handling real-time features like queues and pub/sub.",
    technicalTerms:
      "In-memory storage, key–value store, caching strategies, TTL, pub/sub, Redis data structures (strings, hashes, lists, sets), persistence (RDB, AOF).",
    simpleTerms:
      "It's a super-fast place to store data temporarily so apps can load things quicker and handle real-time features smoothly.",
    keyProjects: [
      "E-commerce Platform (Caching & Sessions)",
      "Real-time Chat App",
      "API Rate Limiting System",
    ],
  },
  {
    iconName: "docker",
    skillName: "Docker",
    category: "DevOps",
    yearsOfExperience: 3,
    level: 90,
    description:
      "A platform for developing, shipping, and running applications in containers, ensuring consistency across different environments.",
    howIUse:
      "I containerize applications for consistent deployment, create Docker Compose setups for local development, and build CI/CD pipelines with containerized workflows.",
    technicalTerms:
      "Containerization, images, Dockerfile, docker-compose, volumes, networking, multi-stage builds, container orchestration, and registry management.",
    simpleTerms:
      "A tool that packages your entire application with everything it needs into a container, so it runs exactly the same way on any computer, anywhere.",
    keyProjects: [
      "Microservices Deployment",
      "Development Environment Setup",
      "CI/CD Pipelines",
    ],
  },
  {
    iconName: "git",
    skillName: "Git",
    category: "DevOps",
    yearsOfExperience: 4,
    level: 80,
    description:
      "A distributed version control system for tracking changes in source code during software development.",
    howIUse:
      "I use Git for version control on all projects, manage branching strategies, conduct code reviews via pull requests, and maintain clean commit histories.",
    technicalTerms:
      "Distributed version control, branching/merging, commits, pull requests, rebasing, cherry-picking, stashing, remote repositories, and conflict resolution.",
    simpleTerms:
      "A tool that keeps track of every change made to your code, lets multiple people work together without conflicts, and allows you to undo mistakes easily.",
    keyProjects: [
      "All Projects",
      "Team Collaboration Workflows",
      "Open Source Contributions",
    ],
  },
];
