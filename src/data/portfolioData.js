export const portfolioData = {
  personal: {
    name: "Kavindu Heshan",
    firstName: "Kavindu",
    greeting: "Hi I am",
    role: "Software Engineer",
    subRoles: ["Full Stack Developer", "Backend Architect", "React & Node.js Specialist"],
    tagline: "I build robust, high-performance web applications and scalable backend systems with clean architecture and modern user experiences.",
    location: "Colombo, Sri Lanka (Available for Remote Work Worldwide)",
    email: "kavindu.heshan.dev@gmail.com",
    phone: "+94 77 123 4567",
    whatsapp: "https://wa.me/94771234567",
    availableForHire: true,
    stats: [
      { number: "3+", label: "Years Experience", description: "In software engineering & full-stack development" },
      { number: "25+", label: "Projects Completed", description: "Delivered on time with production-grade quality" },
      { number: "99%", label: "Happy Clients", description: "Positive client feedback and repeat collaborations" }
    ],
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com/in/kavindu-heshan", icon: "Linkedin" },
      { name: "GitHub", url: "https://github.com/kavindu-heshan", icon: "Github" },
      { name: "Globe / Portfolio", url: "#", icon: "Globe" },
      { name: "Code / LeetCode", url: "https://leetcode.com/u/kavinduheshan", icon: "Code2" },
      { name: "Instagram", url: "https://instagram.com/kavinduheshan", icon: "Instagram" }
    ]
  },

  about: {
    headline: "Transforming Complex Logic Into Elegant, Scalable Software",
    bio1: "I am a dedicated Software Engineer with a deep passion for writing clean, efficient, and maintainable code. With solid experience spanning modern frontend frameworks and high-throughput backend services, I bridge the gap between user experience and architectural robustness.",
    bio2: "Whether developing complex real-time applications with React and WebSockets, designing microservices architectures with Node.js/NestJS, or optimizing PostgreSQL queries for high concurrency, I take ownership of the end-to-end development cycle.",
    highlights: [
      { title: "Clean Code & Architecture", desc: "Committed to SOLID principles, design patterns, and maintainable codebases." },
      { title: "Full-Stack Proficiency", desc: "Seamless flow from responsive UI components to database schema design." },
      { title: "Performance Driven", desc: "Obsessed with fast load times, query optimization, and low-latency APIs." },
      { title: "Continuous Delivery", desc: "Automated testing, Docker containerization, and modern CI/CD pipelines." }
    ],
    details: [
      { label: "Full Name", value: "Kavindu Heshan" },
      { label: "Specialization", value: "Software Engineering & Full Stack" },
      { label: "Degree", value: "B.Sc. (Hons) in Software Engineering" },
      { label: "Status", value: "Open for Full-time / Freelance Contracts" },
      { label: "Languages", value: "English (Fluent), Sinhala (Native)" },
      { label: "Location", value: "Sri Lanka (UTC+05:30)" }
    ]
  },

  services: [
    {
      id: "fullstack",
      title: "Full-Stack Web Development",
      description: "End-to-end web applications built with React, Next.js, Node.js, and TypeScript. Fast, reactive, responsive, and SEO-optimized.",
      icon: "Layers",
      deliverables: ["Modern SPA & SSR Apps", "Responsive Mobile-First UI", "State Management (Redux/Zustand)", "Secure Authentication & Roles"],
      popular: true
    },
    {
      id: "backend",
      title: "Backend & API Architecture",
      description: "Robust RESTful & GraphQL microservices engineered for high concurrency, fault tolerance, and secure data flow.",
      icon: "Server",
      deliverables: ["REST & GraphQL APIs", "Microservices & Event-Driven Systems", "Third-party Integrations & Webhooks", "API Rate Limiting & Security"],
      popular: false
    },
    {
      id: "database",
      title: "Database Design & Optimization",
      description: "Relational and NoSQL database modeling, query tuning, indexing, and caching layers with PostgreSQL, MongoDB, and Redis.",
      icon: "Database",
      deliverables: ["Relational (PostgreSQL / MySQL)", "NoSQL (MongoDB)", "In-memory Caching (Redis)", "Data Migration & Schema Tuning"],
      popular: false
    },
    {
      id: "devops",
      title: "DevOps & Cloud Deployment",
      description: "Dockerized containerization, cloud hosting on AWS/Vercel/Render, and automated CI/CD deployment pipelines.",
      icon: "Cpu",
      deliverables: ["Docker & Multi-stage Builds", "CI/CD with GitHub Actions", "Cloud Provisioning (AWS / VPS)", "Monitoring & Health Checks"],
      popular: false
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "HTML5 & Modern CSS", level: 95 },
      { name: "Tailwind CSS & Vanilla CSS", level: 92 },
      { name: "Redux / Zustand", level: 88 }
    ],
    backend: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "NestJS", level: 84 },
      { name: "RESTful APIs", level: 96 },
      { name: "GraphQL", level: 80 },
      { name: "Python / FastAPI", level: 78 },
      { name: "Java / Spring Boot Basics", level: 75 }
    ],
    database: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "Redis", level: 84 },
      { name: "MySQL", level: 86 },
      { name: "Prisma / TypeORM / Mongoose", level: 89 }
    ],
    devops: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "CI/CD (GitHub Actions)", level: 82 },
      { name: "AWS (S3, EC2, IAM)", level: 78 },
      { name: "Linux / Bash", level: 85 },
      { name: "Postman / Swagger", level: 92 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "NexusFlow - Distributed Task & Workflow Engine",
      category: "Full Stack",
      featured: true,
      description: "A high-performance workflow orchestrator with real-time job execution tracking, queue management, and automated retries.",
      techStack: ["React", "Node.js", "Redis BullMQ", "PostgreSQL", "Docker", "TailwindCSS"],
      liveDemo: "https://nexusflow-demo.example.com",
      github: "https://github.com/kavindu-heshan/nexus-flow",
      stats: { throughput: "10k req/s", uptime: "99.98%" }
    },
    {
      id: 2,
      title: "PulsePay - Merchant Payment & Analytics Gateway",
      category: "Backend / API",
      featured: true,
      description: "Secure payment processing gateway integrating multiple payment providers with webhook verification, encrypted ledgers, and revenue dashboards.",
      techStack: ["TypeScript", "NestJS", "React", "Stripe API", "PostgreSQL", "Prisma"],
      liveDemo: "https://pulsepay-demo.example.com",
      github: "https://github.com/kavindu-heshan/pulse-pay",
      stats: { latency: "< 45ms", security: "PCI-DSS Compliant" }
    },
    {
      id: 3,
      title: "DevSphere - Collaborative Cloud Code Editor",
      category: "Full Stack",
      featured: true,
      description: "Browser-based collaborative development environment featuring real-time peer editing, live terminal emulation, and code execution sandboxes.",
      techStack: ["React", "WebSockets", "Monaco Editor", "Node.js", "Docker Sandbox"],
      liveDemo: "https://devsphere-demo.example.com",
      github: "https://github.com/kavindu-heshan/devsphere",
      stats: { concurrency: "50+ peers/room", sync: "Sub-10ms" }
    },
    {
      id: 4,
      title: "CloudGuard - Serverless Infrastructure Monitor",
      category: "DevOps & Cloud",
      featured: false,
      description: "Automated telemetry monitor that aggregates cloud metrics, detects abnormal spikes, and sends alerts via Slack/Discord webhooks.",
      techStack: ["React", "FastAPI", "Python", "AWS CloudWatch", "Redis", "Chart.js"],
      liveDemo: "https://cloudguard-demo.example.com",
      github: "https://github.com/kavindu-heshan/cloud-guard",
      stats: { metrics: "500k data points/day", alerts: "Instant" }
    },
    {
      id: 5,
      title: "AuraStore - Ultra-Fast Headless E-Commerce",
      category: "Frontend",
      featured: false,
      description: "Blazing fast headless e-commerce storefront with instant client-side filtering, cart sync, sleek micro-animations, and Stripe checkout.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Zustand", "Stripe Checkout"],
      liveDemo: "https://aurastore-demo.example.com",
      github: "https://github.com/kavindu-heshan/aura-store",
      stats: { lighthouse: "100/100", bundle: "< 95kb" }
    },
    {
      id: 6,
      title: "HealthSync - Smart Telemedicine & Clinic SaaS",
      category: "Full Stack",
      featured: false,
      description: "Multi-tenant clinic management system with encrypted patient history, prescription generator, WebRTC video consultation, and SMS notifications.",
      techStack: ["React", "Node.js", "MongoDB", "WebRTC", "Twilio API"],
      liveDemo: "https://healthsync-demo.example.com",
      github: "https://github.com/kavindu-heshan/health-sync",
      stats: { doctors: "120+ active", consultations: "5,000+" }
    }
  ],

  experience: [
    {
      period: "2024 - Present",
      role: "Software Engineer",
      company: "InnovateX Solutions",
      description: "Lead developer on core web platforms and microservices. Architected API gateways, reduced server response times by 38%, and mentored junior engineers.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"]
    },
    {
      period: "2023 - 2024",
      role: "Associate Software Engineer",
      company: "Apex Technologies",
      description: "Engineered scalable REST APIs and modern React frontends. Implemented automated testing suites increasing test coverage from 45% to 88%.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Jest", "Git"]
    },
    {
      period: "2022 - 2023",
      role: "Software Engineering Intern",
      company: "CodeGen Labs",
      description: "Collaborated in an Agile Scrum team building internal dashboard tools, client portals, and responsive UI components with clean design standards.",
      tech: ["JavaScript", "React", "CSS3", "REST APIs", "PostgreSQL"]
    }
  ],

  education: [
    {
      degree: "B.Sc. (Hons) in Software Engineering",
      institution: "Faculty of Computing & Technology",
      year: "2020 - 2024",
      achievement: "First Class Honours | Dean's List for Academic Excellence"
    }
  ],

  testimonials: [
    {
      quote: "Kavindu is an exceptional software engineer. His ability to translate complex backend workflows into seamless, bulletproof systems was pivotal to our platform launch.",
      author: "Ruwan Jayasinghe",
      role: "Engineering Director",
      company: "InnovateX Solutions"
    },
    {
      quote: "Working with Kavindu was effortless. He has a rare combination of rock-solid coding principles and keen design sense. Delivered well ahead of schedule!",
      author: "Sarah Jenkins",
      role: "Product Manager",
      company: "CloudScale Inc."
    }
  ]
};
