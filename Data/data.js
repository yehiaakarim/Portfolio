import { FaLinkedinIn, FaPhone, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { AiOutlineGithub, AiOutlineMail} from "react-icons/ai";
import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import javascript from "../public/assets/skills/javascript.png";
import tailwind from "../public/assets/skills/tailwind.png";
import react from "../public/assets/skills/react.png";
import next from "../public/assets/skills/nextjs.png";
import git from "../public/assets/skills/git.png";
import scss from "../public/assets/skills/Scss.jpg";
import typescript from "../public/assets/skills/typescript.png";
import bootstrap from "../public/assets/skills/Bootstrap.jpg";
import api from "../public/assets/skills/API.png";
import node from "../public/assets/skills/node.svg";
import express from "../public/assets/skills/express.svg";
import nest from "../public/assets/skills/nest.svg";
import postgresql from "../public/assets/skills/postgresql.svg";
import mongodb from "../public/assets/skills/mongodb.svg";
import redux from "../public/assets/skills/redux.svg";
import zustand from "../public/assets/skills/zustand.svg";

export const icons = [
  {
    icon: FaPhone,
    text: "01270006230",
    url: "tel:01270006230", 
    name: { en: "01270006230", ar: "٠١٢٧٠٠٠٦٢٣٠" }, 
    color: "text-green-500 hover:text-green-600"
  },
  {
    icon: FaFacebookMessenger,
    text: "Messenger",
    url: "https://m.me/yehiakarimsoliman",
    name: { en: "Messenger", ar: "ماسنجر" },
    color: "text-blue-500 hover:text-blue-600"
  },
  {
    icon: AiOutlineMail,
    text: "Gmail",
    url: "https://mail.google.com/mail/u/0/#search/yehiaabdelkarimsoliman%40gmail.com?compose=new",
    name: { en: "Gmail", ar: "جي ميل" },
    color: "text-red-500 hover:text-red-600"
  },
  {
    icon: FaLinkedinIn,
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/yehia-abdelkarim-29722b33a/",
    name: { en: "LinkedIn", ar: "لينكدإن" },
    color: "text-blue-600 hover:text-blue-700"
  },
  {
    icon: AiOutlineGithub,
    text: "GitHub",
    url: "https://github.com/yehiaakarim",
    name: { en: "GitHub", ar: "جيت هاب" },
    color: "text-blue-600 hover:text-blue-700"
  },
  {
    icon: FaWhatsapp,
    text: "WhatsApp",
    url: "https://wa.link/9afcky",
    name: { en: "WhatsApp", ar: "واتساب" },
    color: "text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400"
  }
];
export const skills = [
  {
    img: html,
    text: "HTML5",
  },
  {
    img: css,
    text: "CSS3",
  },
  {
    img: javascript,
    text: "JavaScript",
  },
  {
    img: react,
    text: "React.js",
  },
  {
    img: next,
    text: "Next.js",
  },
  {
    img: typescript,
    text: "TypeScript",
  },
  {
    img: redux,
    text: "Redux",
  },
  {
    img: zustand,
    text: "Zustand",
  },
  {
    img: tailwind,
    text: "Tailwind",
  },
  {
    img: scss,
    text: "SCSS",
  },
  {
    img: bootstrap,
    text: "BootStrap",
  },
  {
    img: api,
    text: "All APIs",
  },
  {
    img: git,
    text: "git",
  },
  {
    img: node,
    text: "Node.js",
  },
  {
    img: express,
    text: "Express.js",
  },
  {
    img: nest,
    text: "Nest.js",
  },
  {
    img: postgresql,
    text: "PostgreSQL",
  },
  {
    img: mongodb,
    text: "MongoDB",
  },
];
export const projects = [
  {
    id: 1,
    title: "project one",
  },
  {
    id: 2,
    title: "project two",
  },
  {
    id: 3,
    title: "project three",
  },
];
