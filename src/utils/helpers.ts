import uuid from "react-uuid";
import { FaGithub, FaAt } from "react-icons/fa6";

export const firebaseConfig = {
  apiKey: "AIzaSyDIPG_N0AUepzM3KZ4mG2IU-7Nuc1NOs4s",
  authDomain: "mayokun-areola.firebaseapp.com",
  projectId: "mayokun-areola",
  storageBucket: "mayokun-areola.appspot.com",
  messagingSenderId: "744227965855",
  appId: "1:744227965855:web:16e717449af6cbccd5cbaa",
  measurementId: "G-HZ63N933N2",
};

export const NavLinks = [
  {
    id: uuid(),
    name: "work",
    link: "/",
  },

  {
    id: uuid(),
    name: "resume",
    link: "/resume",
  },

  {
    id: uuid(),
    name: "contact",
    link: "/contact",
  },
];

export const ContactLinks = [
    {
    id: uuid(),
    title: "Choweazy",
    description:
      "A seamless online food delivery platform connecting customers with their favorite restaurants and local vendors. It focuses on delivering a smooth ordering experience, fast delivery, and access to a wide variety of delicious meals — all in one place.",
    isPrivate: true,
    liveLink: "https://choweazy.com",
    github: "",
    stack: "NextJS + TailwindCSS + Paystack + PostgreSQL",
    featured: false,
  },
  {
    id: uuid(),
    name: "github",
    link: "https://github.com/therealEmma",
    Icon: FaGithub,
  },
  {
    id: uuid(),
    name: "email",
    link: "mailto:eozegbe68@gmail.com",
    Icon: FaAt,
  },
];

export const projects = [
  {
    id: uuid(),
    title: "Ticketer",
    description:
      "A centralized event management platform where users can buy, resell, and manage tickets. The backend handles wallet funding, payment verification, ticket transactions, and payout flows. Built to support scalable and secure event experiences.",
    isPrivate: true,
    liveLink: "https://www.ticketer.africa/",
    github: "",
    stack: "NestJS + Prisma + PostgreSQL + NextJS",
    featured: true,
  },
  {
    id: uuid(),
    title: "GameHub",
    description:
      "GameHub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more.",
    isPrivate: true,
    liveLink: "https://game-project-eta-sepia.vercel.app/",
    github: "",
    stack: "NextJS + TailwindCSS + Tanstack Query + chakraUI ",
    featured: false,
  },
  {
    id: uuid(),
    title: "Cartesian Genetic Programming",
    description:
      "An AI agent for Snake using Cartesian Genetic Programming (CGP) and A* pathfinding. Combines evolution and search for smarter gameplay, with tools for training, visualization, and performance comparison.",
    isPrivate: true,
    liveLink: "https://snake-ai-gamma.vercel.app/",
    github: "https://github.com/therealEmma/Snake_AI",
    stack: "ReactJs + TailwindCSS + Flask",
    featured: true,
  },

  {
    id: uuid(),
    title: "Quiz Application",
    description:
      "A decentralized voting platform that enables transparent, secure, and tamper-proof elections using smart contracts. The frontend provides an intuitive interface for voters, admins, and election creators.",
    isPrivate: false,
    liveLink: "https://quiz-master-ultimate.vercel.app/",
    github: "https://github.com/therealEmma/-quizApp",
    stack: "ReactJS + TailwindCSS + charkaUI",
    featured: false,
  },
  {
    id: uuid(),
    title: "Emmanuel",
    description:
      "Explore the digital world through the lens of a passionate software engineer. Discover my projects, skills, and experiences",
    isPrivate: false,
    liveLink: "",
    github: "https://github.com/therealEmma",
    stack: "React + Typescript + Helmet + Styled Components",
    featured: false,
  },
];

export const resumeObj = {
  coreTechnologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
  ],

  familiarWith: [
    "React Query",
    "Styled-Components",
    "Shadcn",
    "Daisy UI",
    "Figma",
    "Prisma",
    "CharkaUI",
    "CI/CD",
    "Framer Motion",
    "REST API",
    "Vercel",
    "render",
    "git",
    "github",
    "Version Control",
  ],

  education: [
    {
      id: uuid(),
      school: "Covenant University, Ota, Nigeria.",
      startDate: "September 2021",
      endDate: "July 2025",
    },
  ],

  hobbies: ["Video Games", "Coding"],

  experience: [
    {
      id: uuid(),
      company: "Impulsecraft",
      position: "Backend Engineer",
      startDate: "January 2026",
      endDate: "March 2026",
      description:
        "Architected a real-time tour guide marketplace backend handling high-concurrency booking requests, admin dashboard infrastructure, and live geolocation tracking.",
      achievements: [
        "Built a secure, bidirectional GPS tracking system using Socket.io, utilizing isolated, room-based WebSocket channels (tourId) to broadcast live coordinate updates strictly between matched users.",
        "Engineered a high-performance caching layer using Redis to store frequently accessed tour location data, minimizing database lookups and optimizing endpoint latency during peak booking periods.",
        "Developed a dynamic pricing algorithm for a tour fare-calculation engine that computes trip costs based on server-side Google Maps route metrics (distance and duration), multi-stop itineraries, and travel-mode multipliers.",
        "Designed a custom security layer generating randomized, one-time start codes (OTP) sent via email, requiring validation at the REST endpoint before initiating tours and billing timers.",
      ],
    },
    {
      id: uuid(),
      company: "Choweazy",
      position: "Full-Stack Engineer",
      startDate: "October 2025",
      endDate: "January 2026",
      description:
        "Architected a hyper-local food delivery ecosystem connecting customers, local restaurants, and dispatch riders across the Warri metropolis.",
      achievements: [
        "Designed and deployed a Node.js/Express transactional backend on Railway that automates business logic, instantly calculating and splitting a 15% vendor commission and platform fee per order.",
        "Implemented a relational PostgreSQL schema with Prisma to model complex relationships (Users → Orders → Vendors), enforcing data integrity and Role-Based Access Control (RBAC) across distinct APIs.",
        "Engineered a dedicated React Native partner app featuring real-time order acceptance via WebSockets, menu CRUD management, and a live earnings dashboard.",
        "Integrated secure payment gateway infrastructure featuring automated transaction verification and robust failure-handling logic.",
      ],
    },
    {
      id: uuid(),
      company: "Ticketer-Africa",
      position: "Frontend Engineer",
      startDate: "August 2025",
      endDate: "October 2025",
      description:
        "Spearheaded client-side development for a digital ticketing and event management platform, transforming design concepts into high-fidelity user interfaces.",
      achievements: [
        "Integrated and optimized 10+ RESTful API endpoints, implementing proper error handling, retry logic, and request caching with Provider state management to improve app responsiveness by 35%.",
        "Engineered robust frontend-to-backend integrations and actively contributed to the backend codebase (NestJS, Prisma, PostgreSQL) to debug issues and optimize data fetching.",
        "Partnered with cross-functional teams to define the MVP roadmap, aligning technical frontend deliverables with marketing launch timelines.",
        "Championed a disciplined Git/GitHub workflow, managing branching strategies and conducting peer code reviews to maintain a clean, production-ready codebase.",
      ],
    },
    {
      id: uuid(),
      company: "SkySenx Limited",
      position: "Frontend Developer (Intern)",
      startDate: "June 2024",
      endDate: "August 2024",
      description:
        "Intensive internship focused on modern frontend architecture, collaborative team development, and industry-standard engineering workflows.",
      achievements: [
        "Developed responsive, component-based web prototypes to master React architecture, implementing reusable UI components across varying screen sizes.",
        "Optimized API consumption and backend communication using React Context for global state management and implementing request caching.",
        "Integrated into a fast-paced engineering team workflow, adopting professional practices for code organization, Git version control, and collaborative development.",
        "Mentored and taught programming fundamentals to junior learners through interactive coding sessions, fostering technical communication skills.",
      ],
    },
    {
      id: uuid(),
      company: "Happy Equipment Limited",
      position: "Frontend Developer (Intern)",
      startDate: "March 2024",
      endDate: "May 2024",
      description:
        "Designed and developed a high-performance corporate web platform serving as the central digital hub for industrial engineering operations and B2B client engagement.",
      achievements: [
        "Digitized a complex catalog of industrial services and heavy equipment inventory, implementing intuitive filtering and navigation patterns for technical specifications.",
        "Implemented advanced frontend optimization techniques, including image compression and lazy loading, achieving optimal load times and high Lighthouse performance scores.",
        "Collaborated closely with the Quality Assurance team to translate business requirements into technical deliverables, conducting rigorous cross-browser testing and debugging.",
        "Utilized HTML, CSS, JavaScript, and animations to create a fault-tolerant, bug-free production interface that visually communicates the brand's industrial identity.",
      ],
    },
  ],
};
