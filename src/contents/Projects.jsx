// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Gallery.module.css";
import logoimg from "../assets/Images/IMG_2455-removebg-preview__1_-removebg-preview.png";
import img1 from "../assets/Images/Screenshot 2025-01-20 at 14.01.51.png";
import img2 from "../assets/Images/MTC_ASSEMENT.png";
import img3 from "../assets/Images/Screenshot 2025-01-21 at 13.59.07.png";
import img4 from "../assets/Images/S.HI.NE.png";
import img5 from "../assets/Images/sodokuImage.jpeg";
import img6 from "../assets/Images/58516e36-2a1d-41bf-8203-d7a93b70c498.JPG";
function Projects() {
  const projectList = [
    {
      title: "Callphone LTD Website",
      description:
        "I developed a corporate website for Callphone LTD. My role included designing and implementing the website's front-end using ReactJS and Tailwind, ensuring cross-browser compatibility, and optimizing performance.",
      link: "https://www.callphoneng.com/",
      image: img1,
      isLive: true,
    },
    {
      title: "MTC Trial Assessment",
      description: `This is a trial frontend assessment project designed by MTC and developed by Theodora. The purpose of this project is to demonstrate practical frontend development skills, including responsive design, navigation, and component reuse using modern frontend libraries and frameworks.

`,
      link: "https://mtc-accessment-trial-uzoy.vercel.app/",
      image: img2,
      isLive: true,
    },
    {
      title: "My Portfolio Site",
      description:
        "A modern and interactive portfolio built with React, styled using Tailwind CSS and Vanilla CSS, and powered by React Spring for smooth animations. This project demonstrates my ability to create responsive and visually appealing designs while effectively utilizing cutting-edge libraries and tools.",
      link: "https://github.com/TheoCathy/My-New-Portfolio",
      image: img3,
      isLive: true,
    },
    {
      title: "S.HI.NE Website",
      description:
        "This website is live and currently maintained by me as I am affiliated with the organization. It is a platform that showcases the organization's mission, vision, and activities. The website is built using ReactJS and Tailwind CSS, ensuring a modern and responsive design.",
      link: "https://sistersshine.org/",
      image: img4,
      isLive: true,
    },
    {
      title: "GEminent E-commerce Web App Dashboard",
      description:
        "An admin dashboard for GEminent E-commerce Web App, designed to provide a seamless experience for managing products, orders, and users. The dashboard was built using React and Tailwind CSS, with Backend in PHP and Oracle SQL and it includes features such as data collection, product management, and order tracking.",
      link: "https://github.com/TheoCathy",
      image: img6,
      isLive: false,
    },
    {
      title: "Soduku Game",
      description:
        "I developed a fully functional Sudoku game using Java, showcasing my introductory Java programming skills. The game features a simple, user-friendly UI that allows players to interact with the grid easily, based on difficulty level selected. All core Sudoku functionalities are implemented, including puzzle generation, number placement, and validation of the player's inputs. The project highlights my ability to design and develop logical game mechanics while maintaining an intuitive user interface.",
      link: "https://github.com/TheoCathy/Sudoku-Game",
      image: img5,
      isLive: true,
    },
  ];

  return (
    <>
      {/* return ( */}
      <div
        className="font-serif text-gray-900 bg-indigo-50 min-h-screen p-6"
        style={{
          background:
            // "linear-gradient(135deg,rgb(68, 52, 22) 25%, transparent 25%), linear-gradient(225deg,rgb(54, 50, 4) 25%, transparent 25%), linear-gradient(315deg,rgb(37, 20, 8) 25%,rgba(75, 52, 2, 0.68) 25%)",
            "linear-gradient(135deg, rgb(96, 72, 130) 25%, transparent 25%), linear-gradient(225deg, rgb(88, 100, 88) 25%, transparent 25%),linear-gradient(315deg, rgba(68, 52, 112, 0.7) 25%, rgba(120, 130, 115, 0.6) 25%)",
          backgroundPosition: "10px 0, 10px 0, 2 0, 0 0",
        }}
      >
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 bg-deep-green text-gray-100">
          <div className="flex items-center">
            <img src={logoimg} alt="logo" className="w-10" />
            <p className="font-bold text-3xl p-1">Theo</p>
          </div>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/" className=" text-gray-100 hover:text-purple-500">
                Home
              </Link>
            </li>
            <li>
              <a
                href="#projects"
                className=" text-gray-100 hover:text-purple-500"
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>

        {/* Projects Section */}
        <h1 className="text-4xl font-bold text-center mb-6 text-purple-950">
          My Projects
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <div
              key={index}
              className={`relative bg-white shadow-lg rounded-lg p-6 ${styles["project-card"]}`}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-48 object-cover rounded-t-lg mb-4 `}
              />

              {/* Overlay for non-live projects */}
              {!project.isLive && (
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg ${styles["project-card__overlay"]}`}
                >
                  <span
                    className={`text-white text-4xl font-bold transform rotate-12 ${styles["project-card__overlay-text"]}`}
                  >
                    Launching Soon
                  </span>
                </div>
              )}

              {/* Project Title */}
              <h2 className="text-2xl font-bold text-deep-green mb-2">
                {project.title}
              </h2>

              {/* Project Description */}
              <p className="text-gray-700 mb-4">{project.description}</p>

              {/* Project Link */}
              {project.isLive ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:underline"
                >
                  View Project
                </a>
              ) : (
                <p className="text-gray-500 italic">Coming Soon</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
    // </div>
  );
}

export default Projects;
