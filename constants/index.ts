import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";

export const SKILL_DATA = [
  
  // Add other uncategorized or extra skills here if needed
] as const;

export const SOCIALS = [
  {
  
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/indrayudh-saha/",
  },
  {
   name: "GitHub",
   icon: RxGithubLogo,
   link: "https://github.com/indrayudh-saha/indrayudh-saha",
 },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/_i.n.d.r.a.y.u.d.h_/",
  },
  {
  
    name: "Whatsapp",
    icon: FaWhatsapp,
    link: "https://wa.me/917439268181",
  },
  
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/Indrayudh_07",
  },
  
  

] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Framer Motion",
  //   image: "framer.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Stripe",
  //   image: "stripe.png",
  //   width: 80,
  //   height: 80,
  // },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C",
    image: "c.png",
    width: 80,
    height: 80,
  },
 
  {
    skill_name: "Convex",
    image: "convex.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "MySQL",
  //   image: "mysql.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "PostgreSQL",
  //   image: "postgresql.png",
  //   width: 80,
  //   height: 80,
  // },
] as const;

export const OTHER_SKILL = [
  
  {
    skill_name: "Git",
    image: "git.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Postman",
    image: "postman.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "REST APIs",
    image: "restapi.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [] as const;

export const PROJECTS = [
  {
    title: "Interviewer - Remote interview Platform",
    image: "/projects/image1.png",
    link: "https://interviewer-sigma-flax.vercel.app/",
  },
  {
    title: "EstateEase - Real Estate Platform",
    image: "/projects/image2.png",
    link: "" ,
  },
  
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/indrayudh-saha/indrayudh-saha",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/indrayudh-saha/",
      },
    ],
  },
  {
    title: "Contact Me",
    data: [
      {
        name: "indrayudhsaha@gmail.com",
        icon: null,
        link: "mailto:indrayudhsaha@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;
