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
    liveLink: "",
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
    title: "Food delivery Platform",
    description:
      "A seamless online food delivery platform connecting customers with their favorite restaurants and local vendors. It focuses on delivering a smooth ordering experience, fast delivery, and access to a wide variety of delicious meals — all in one place.",
    isPrivate: true,
    liveLink: "https://food-ordering-appp.vercel.app/",
    github: "",
    stack: "NextJS + TailwindCSS + KoraPay + PostgreSQL",
    featured: false,
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
    "Python",
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
      company: "Ticketer",
      position: "Frontend Engineer",
      startDate: "August 2025",
      endDate: "October 2025",
      description:
        "Collaborated on the development of Ticketer, an event ticketing and management system integrating wallet services, ticket reselling, and secure payment verification.",
      achievements: [
        "Contributed to the backend development using NestJS, Prisma, PostgreSQL by occasionally implementing updates and optimizations",
        "Worked on the frontend implementation, ensuring smooth integration with backend APIs and responsive user experiences across web views.",
        "Collaborated on overall product strategy and rollout planning, contributing to discussions around frontend release and marketing direction.",
        "",
      ],
    },
    {
      id: uuid(),
      company: "SkySenx",
      position: "Intern",
      startDate: "June 2024",
      endDate: "August 2024",
      description:
        "Engaged in hands-on learning and project-based development while contributing to educational programs aimed at introducing kids to programming.",
      achievements: [
        "Focused on self-learning and mastering core frontend technologies including React, JavaScript, and modern UI design principles.",
        "Built small-scale web projects to strengthen understanding of component-based architecture, state management, and responsive design.",
        "Collaborated with mentors to understand real-world software development practices, code organization, and version control.",
        "Taught programming fundamentals to kids through interactive coding sessions, fostering creativity and logical thinking.",
        "Developed strong problem-solving, teamwork, and communication skills through both learning and teaching experiences.",
      ],
    },

    {
      id: uuid(),
      company: "Happy Equipment Limited",
      position: "Frontend Developer [intern]",
      startDate: "March 2024",
      endDate: "May 2024",
      description:
        "Built the official website for Happy Equipment Limited, an engineering company specializing in construction and heavy-duty equipment.",
      achievements: [
        "Designed a clean, professional interface that effectively showcases the company’s services, equipment categories, and contact channels.",
        "Utilized HTML, CSS, JavaScript, and GSAP to create smooth scroll animations, engaging transitions, and a dynamic homepage that visually communicates the brand’s industrial identity.",
        "Integrated product showcase sections to improve lead generation and client interaction.",
        "Ensured high performance and responsiveness of the application across a wide range of devices and browsers.",
      ],
    },
  ],
};
