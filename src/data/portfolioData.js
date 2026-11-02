export const portfolioData = {
  personal: {
    fullName: "Karunakalage Kavindu Heshan De Silva",
    name: "Kavindu Heshan",
    firstName: "Kavindu",
    greeting: "Hi, I am",
    role: "Software Engineering Graduate",
    subRoles: [
      "BSc (Hons) Graduate • University of Plymouth",
      "Full-Stack Web Developer",
      "React & Node.js Developer",
      "Associate Software Engineer Candidate"
    ],
    tagline: "BSc (Hons) Software Engineering graduate from the University of Plymouth. Passionate about building robust full-stack applications, scalable backend systems, and modern web solutions with clean code principles.",
    location: "Colombo, Sri Lanka (Available for Remote & Onsite Roles Worldwide)",
    email: "kavindu.heshan.dev@gmail.com",
    phone: "+94 77 123 4567",
    whatsapp: "https://wa.me/94771234567",
    availableForHire: true,
    stats: [
      { number: "BSc", label: "Software Eng.", description: "BSc (Hons) - University of Plymouth" },
      { number: "10+", label: "Projects Built", description: "Capstone, group & individual software projects" },
      { number: "100%", label: "Ready to Work", description: "Open for Associate / Junior Software Engineer roles" }
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
    headline: "Transforming Engineering Principles Into Robust, Scalable Software",
    bio1: "I am a fresh BSc (Hons) Software Engineering graduate from the University of Plymouth (UK) with a solid academic foundation and practical project experience spanning modern full-stack web development, software design patterns, and developer tooling.",
    bio2: "Throughout my degree, I completed 360 credits across rigorous technical modules. A major highlight was my Final Year Computing Project (PUSL3190), where I achieved 71% in coursework report & source code. Having successfully delivered full-stack web applications, mobile projects, and collaborative group software, I am eager to contribute to production-grade engineering teams as an Associate / Junior Software Engineer.",
    highlights: [
      { title: "Strong Academic Foundations", desc: "Thorough grounding in OOP, Data Structures, Algorithms, Software Architecture, and Agile practices." },
      { title: "Full-Stack Web Proficiency", desc: "Hands-on experience building reactive React frontends and structured RESTful Node.js / Express APIs." },
      { title: "Agile Team Collaboration", desc: "Demonstrated teamwork in the Computing Group Project (achieved 75% coursework portfolio)." },
      { title: "Rapid Learner & Problem Solver", desc: "Driven to master new tech stacks, modern CI/CD pipelines, containerization, and cloud services." }
    ],
    details: [
      { label: "Full Name", value: "Karunakalage Kavindu Heshan De Silva" },
      { label: "Degree", value: "BSc (Hons) Software Engineering" },
      { label: "University", value: "University of Plymouth (UK)" },
      { label: "Awarded", value: "Second Class Honours (Lower Division)" },
      { label: "Enrolment Status", value: "Completed (2026)" },
      { label: "Target Roles", value: "Associate / Junior Software Engineer" },
      { label: "Languages", value: "English (Fluent), Sinhala (Native)" },
      { label: "Location", value: "Colombo, Sri Lanka (Available Remote / Onsite)" }
    ]
  },

  services: [
    {
      id: "fullstack",
      title: "Full-Stack Web Development",
      description: "Developing modern, reactive web applications using React, JavaScript/TypeScript, Node.js, and clean CSS styling.",
      icon: "Layers",
      deliverables: ["Modern Single Page Applications (SPAs)", "Responsive & Mobile-First UI Design", "Frontend State Management", "Clean, Modular Architecture"],
      popular: true
    },
    {
      id: "backend",
      title: "Backend & RESTful APIs",
      description: "Engineering secure, scalable server-side REST APIs with Node.js, Express, and modern middleware.",
      icon: "Server",
      deliverables: ["RESTful API Architecture & Endpoints", "JWT Authentication & Role Control", "Third-party API & Webhook Integration", "Data Validation & Error Handling"],
      popular: false
    },
    {
      id: "database",
      title: "Database Design & Management",
      description: "Relational and NoSQL database modeling, SQL queries, schema normalization, and integration.",
      icon: "Database",
      deliverables: ["Relational Databases (PostgreSQL / MySQL)", "NoSQL Databases (MongoDB)", "ORM / ODM Integration (Prisma / Mongoose)", "Schema Design & Normalization"],
      popular: false
    },
    {
      id: "mobile-tools",
      title: "Mobile & Software Tooling",
      description: "Mobile app development foundations, version control workflows, containerization basics, and testing.",
      icon: "Cpu",
      deliverables: ["Mobile Application Development", "Git & GitHub Version Control", "Docker Containerization Basics", "Agile & Scrum Project Workflows"],
      popular: false
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "HTML5 & Modern CSS", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS & Vanilla CSS", level: 88 },
      { name: "Responsive Web Design", level: 94 }
    ],
    backend: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "RESTful APIs", level: 92 },
      { name: "Python Basics", level: 75 },
      { name: "Java (OOP Foundations)", level: 78 }
    ],
    database: [
      { name: "PostgreSQL", level: 82 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Database Schema Design", level: 86 }
    ],
    devops: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker Basics", level: 75 },
      { name: "Postman / API Testing", level: 90 },
      { name: "Agile & Scrum Methodologies", level: 88 },
      { name: "Linux / Bash Basics", level: 78 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Final Year Capstone Computing Project",
      category: "Full Stack",
      featured: true,
      description: "University of Plymouth final year capstone software engineering project (PUSL3190). Scored 71% in project report & source code. Features complete end-to-end architecture, robust backend APIs, and modern responsive UI.",
      techStack: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "Git"],
      liveDemo: "#",
      github: "https://github.com/kavindu-heshan",
      stats: { courseworkScore: "71% First Class", overallModule: "66.2%" }
    },
    {
      id: 2,
      title: "Collaborative Computing Group Project",
      category: "Full Stack",
      featured: true,
      description: "Agile team project developed during Stage 2 at University of Plymouth (PUSL2021). Achieved 72% overall and 75% in the coursework portfolio. Engineered a modular system with team version control and sprint tracking.",
      techStack: ["React", "Node.js", "MongoDB", "Agile/Scrum", "Git"],
      liveDemo: "#",
      github: "https://github.com/kavindu-heshan",
      stats: { portfolioScore: "75%", moduleResult: "72%" }
    },
    {
      id: 3,
      title: "Mobile Application Development Project",
      category: "Frontend",
      featured: true,
      description: "Stage 2 mobile engineering project (PUSL2023) scored 65.58% (76% Proposal, 70% Final Report, 69.5% Presentation). Built a user-friendly mobile experience with offline data persistence and responsive layouts.",
      techStack: ["Mobile Tech", "Java / Android", "UI/UX", "REST APIs"],
      liveDemo: "#",
      github: "https://github.com/kavindu-heshan",
      stats: { proposal: "76%", finalReport: "70%" }
    },
    {
      id: 4,
      title: "NexusFlow - Task & Workflow Engine",
      category: "Full Stack",
      featured: false,
      description: "A workflow orchestrator with real-time job execution tracking, queue management, and modular architecture inspired by enterprise backend systems.",
      techStack: ["React", "Node.js", "Redis", "PostgreSQL", "TailwindCSS"],
      liveDemo: "#",
      github: "https://github.com/kavindu-heshan",
      stats: { tech: "Full Stack", architecture: "Clean Code" }
    },
    {
      id: 5,
      title: "IoT Sensor & Telemetry Dashboard",
      category: "DevOps & Cloud",
      featured: false,
      description: "Developed as part of the Introduction to IoT module (PUSL2022) with a 65% final report score. Aggregates telemetry data from connected sensors with real-time graphical visualization.",
      techStack: ["IoT Protocols", "Python", "JavaScript", "REST APIs"],
      liveDemo: "#",
      github: "https://github.com/kavindu-heshan",
      stats: { coursework: "65%", focus: "IoT & Visuals" }
    },
    {
      id: 6,
      title: "AuraStore - Modern E-Commerce Platform",
      category: "Frontend",
      featured: false,
      description: "Full-featured modern e-commerce storefront with intuitive product catalog filtering, interactive cart management, responsive design, and checkout workflow.",
      techStack: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Context API"],
      liveDemo: "#",
      github: "https://github.com/kavindu-heshan",
      stats: { responsiveness: "100%", performance: "Optimized" }
    }
  ],

  // Academic & Practical Milestones (Accurately reflects education journey with no fake jobs)
  experience: [
    {
      period: "2025 - 2026",
      role: "BSc (Hons) Software Engineering — Stage 3 (Final Year)",
      company: "University of Plymouth",
      description: "Completed Level 6 advanced curriculum comprising Full-Stack Development (PUSL3120), HCI & Computer Graphics (PUSL3122), AI & Machine Learning (PUSL3123), and Software Project Management (PUSL3134). Built an individual Capstone Computing Project (PUSL3190) scoring 71% in project report & source code.",
      highlights: ["71% in Capstone Project Report & Code", "Level 6 Full-Stack Development", "Agile Project Management"],
      tech: ["React", "Node.js", "PostgreSQL", "Full-Stack Dev", "AI/ML", "Agile SPM"]
    },
    {
      period: "2024 - 2025",
      role: "BSc (Hons) Software Engineering — Stage 2",
      company: "University of Plymouth",
      description: "Completed 120 credits across core practical engineering modules: Computing Group Project (72% overall, 75% coursework portfolio), Mobile App Development (65.58%), Software Engineering 2 (74% coursework & practical), Introduction to IoT (65% coursework), and Information Management & Retrieval.",
      highlights: ["75% in Group Project Portfolio", "74% in Software Engineering 2 Coursework", "Mobile App Development"],
      tech: ["Mobile Dev", "Group Computing", "Java", "Databases / SQL", "IoT", "Git"]
    },
    {
      period: "2023 - 2024",
      role: "Software Engineering Foundations — Stage 1",
      company: "University of Plymouth",
      description: "Achieved 120 Level 4 credits (AP standing) establishing core computing foundations in Object-Oriented Programming, Data Structures, Algorithms, Computer Architecture, and Modern Web Basics.",
      highlights: ["120 Credits Achieved", "Core Programming & OOP", "Algorithms & Data Structures"],
      tech: ["Java", "OOP", "Data Structures", "Algorithms", "Web Fundamentals"]
    }
  ],

  education: [
    {
      degree: "BSc (Hons) in Software Engineering",
      institution: "University of Plymouth (UK)",
      year: "2023 - 2026 (Completed)",
      classification: "Second Class Honours (Lower Division)",
      aggregate: "57.35%",
      totalCredits: "360 Credits Completed",
      achievement: "Awarded: Second Class Honours (Lower Division) • 360 Academic Credits",
      notableModules: [
        "Final Year Computing Project (71% Coursework Report & Code)",
        "Computing Group Project (75% Coursework Portfolio, 72% Overall)",
        "Mobile App Development (65.58%)",
        "Software Engineering 2 (74% Coursework & Practical)",
        "Full-Stack Development & Agile Software Project Management"
      ]
    }
  ]
};
