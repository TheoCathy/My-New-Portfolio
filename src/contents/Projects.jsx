// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Gallery.module.css";
import logoimg from "../assets/Images/IMG_2455-removebg-preview__1_-removebg-preview.png";
import img1 from "../assets/Images/Screenshot 2025-01-20 at 14.01.51.png";
import img2 from "../assets/Images/MTC_ASSEMENT.png";
import img3 from "../assets/Images/Screenshot 2025-01-21 at 13.59.07.png";
import img4 from "../assets/Images/S.HI.NE.png";
import img5 from "../assets/Images/sodokuImage.jpeg";
import img6 from "../assets/Images/58516e36-2a1d-41bf-8203-d7a93b70c498.JPG";
import img7 from "../assets/Images/MbenScreenshot.png";
import img8 from "../assets/Images/TekkAISnap.png";
import img9 from "../assets/Images/JetandShineSnap.png";
import img10 from "../assets/Images/elvateImg.png";
import img11 from "../assets/Images/Peacewatch.png";
import { FaExternalLinkAlt, FaGithub, FaRocket } from "react-icons/fa";

function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  const projectList = [
   
   {
      title: "TekkAI",
      description:
      "An AI-powered product development platform that helps founders and product managers transform raw ideas into structured, investor-ready documentation. Built with React, TypeScript, and OpenAI API, the platform generates PRDs, FRDs, and visual HTML mockups from a single idea prompt. It also features a multi-stage Growth Planner that uses business context to deliver tailored growth strategies, a community hub, and a product health checklist tool  all wrapped in a responsive, modern interface.",
      link: "https://tekkdoseai.netlify.app/",
      image: img8,
      isLive: true,
      tags: ["React", "LLM", "Community", "AI App"],
    },
    {
      title: "S.HI.NE Website",
      description:
        "This website is live and currently maintained by me as I am affiliated with the organization. It is a platform that showcases the organization's mission, vision, and activities, built using ReactJS and Tailwind CSS.",
      link: "https://sistersshine.org/",
      image: img4,
      isLive: true,
      tags: ["React", "Tailwind CSS", "Non-Profit"],
    },
    {
      title: "Jet and Shine Website",
      description:
        "A service-oriented web platform built to streamline business operations and client interactions. Jet and Shine features modern UI design, seamless navigation, WordPress headless CMS integration for Blog management, and an emphasis on performance and scalability of a cleaning company based in Bristol.",
      link: "https://jetandshinebristol.co.uk/",
      image: img9,
      isLive: true,
      tags: ["React", "Business", "Scalable", "Wordpress headless CMS"],
    },
    {
      title: "Mben Health Services Website",
      description:
        "A health-focused digital platform designed to improve access to health information and services. Built with a user-centered approach, the application provides intuitive interfaces for health management and wellness tracking.",
      link: "https://mbenhealthservices.com/",
      image: img7,
      isLive: true,
      tags: ["Health Tech", "React", "User-Centered Design"],
    },
     
     {
      title: "Callphone LTD Website",
      description:
        "A corporate website for Callphone LTD. My role included designing and implementing the website's front-end using ReactJS and Tailwind, ensuring cross-browser compatibility, and optimizing performance.",
      link: "https://www.callphoneng.com/",
      image: img1,
      isLive: true,
      tags: ["React", "Tailwind CSS", "Corporate"],
    },
     {
      title: "Elev8Afrik",
      description:
        "Developed a corporate website for Elev8Afrik, focusing on African educational and entertainment content distribution in African languages for African adults, both on the continent and in the diaspora.",
      link: "https://www.elv8afrik.africa/",
      image: img10,
      isLive: true,
      tags: ["React", "Tailwind CSS", "Corporate"],
    },
     {
      title: "PeaceWatchers",
      description:
        "A corporate website for PeaceWatch, Peacewatch Tactical Nigeria Limited is Nigeria's first protection culture institution — training worship communities to protect themselves from within.",
      link: "http://peacewatch.ng/",
      image: img11,
      isLive: true,
      tags: ["React", "Tailwind CSS", "Corporate"],
    },
    {
      title: "Geminent",
      description:
        "An admin dashboard for GEminent E-commerce Web App, designed to provide a seamless experience for managing products, orders, and users. Built using React and Tailwind CSS, with Backend in PHP and Oracle SQL.",
      link: "https://github.com/TheoCathy",
      image: img6,
      isLive: false,
      tags: ["React", "PHP", "Oracle SQL", "E-commerce"],
    },
     {
      title: "MTC Trial Assessment",
      description:
        "A trial frontend assessment project designed by MTC and developed by Theodora, demonstrating practical frontend development skills, including responsive design, navigation, and component reuse using modern frontend libraries and frameworks.",
      link: "https://mtc-accessment-trial-uzoy.vercel.app/",
      image: img2,
      isLive: true,
      tags: ["React", "Frontend", "Assessment"],
    },
    {
      title: "My Portfolio Site",
      description:
        "A modern and interactive portfolio built with React, styled using Tailwind CSS and Vanilla CSS, and powered by React Spring for smooth animations. This project demonstrates my ability to create responsive and visually appealing designs.",
      link: "https://github.com/TheoCathy/My-New-Portfolio",
      image: img3,
      isLive: true,
      tags: ["React", "Tailwind CSS", "React Spring"],
    },
    {
      title: "Sudoku Game",
      description:
        "A fully functional Sudoku game using Java, featuring a user-friendly UI that allows players to interact with the grid easily based on difficulty level. Includes puzzle generation, number placement, and input validation.",
      link: "https://github.com/TheoCathy/Sudoku-Game",
      image: img5,
      isLive: true,
      tags: ["Java", "Game Dev", "Logic"],
    },
    
    // {
    //   title: "Horeb Project",
    //   description:
    //     "A community-driven web application developed for the Horeb organisation, enabling better digital engagement and outreach. The project focuses on clean design, accessibility, and responsive user experience.",
    //   link: "#",
    //   image: null,
    //   isLive: false,
    //   tags: ["React", "Community", "Web App"],
    // },
   
  ];

  return (
    <div className="font-serif text-gray-900 bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-obsidian-950/80 border-b border-obsidian-800/40">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <img src={logoimg} alt="logo" className="w-10" />
            <p className="font-bold text-3xl text-gray-100">Theo</p>
          </div>
          <ul className="flex space-x-8 text-lg text-gray-200">
            <li>
              <Link to="/" className="hover:text-obsidian-400 transition">
                Home
              </Link>
            </li>
            <li>
              <a href="#projects" className="hover:text-obsidian-400 transition">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-gray-900 via-obsidian-900 to-gray-950 py-16 px-6 text-center">
        <h1 className="text-5xl font-bold text-white mb-3">My Projects</h1>
        <div className="w-20 h-1 bg-obsidian-400 mx-auto mb-4 rounded-full"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A collection of projects that showcase my technical skills, creativity,
          and commitment to building impactful digital solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <div
              key={index}
              className={`relative group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-out flex flex-col ${styles["project-card"]}`}
            >
              {/* Project Image */}
              {project.image ? (
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              ) : (
                <div className="w-full h-52 bg-gradient-to-br from-obsidian-100 to-obsidian-50 flex items-center justify-center">
                  <div className="text-center text-obsidian-400">
                    <FaRocket className="w-10 h-10 mx-auto mb-2 opacity-50" />
                    <p className="text-sm font-medium opacity-60">
                      Image Coming Soon
                    </p>
                  </div>
                </div>
              )}

              {/* Overlay for non-live projects */}
              {!project.isLive && (
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl z-10 ${styles["project-card__overlay"]}`}
                >
                  <span
                    className={`text-white text-2xl font-bold transform -rotate-12 uppercase tracking-wider bg-obsidian-600/80 px-4 py-2 rounded-lg ${styles["project-card__overlay-text"]}`}
                  >
                    Launching Soon
                  </span>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-obsidian-50 text-obsidian-700 text-xs font-medium rounded-full border border-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-obsidian-700 transition-colors">
                  {project.title}
                </h2>

                {/* Project Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Project Link */}
                {project.isLive ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-obsidian-600 font-semibold text-sm hover:text-obsidian-800 transition-colors group/link"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    View Project
                    <span className="inline-block transition-transform group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                ) : (
                  <p className="inline-flex items-center gap-2 text-gray-400 font-medium text-sm italic">
                    <FaGithub className="w-3.5 h-3.5" />
                    Coming Soon
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center text-gray-50 py-4 bg-gray-900"
      >
        <p className="text-xs">
          All rights reserved. Designed by Theodora <br />©{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default Projects;
