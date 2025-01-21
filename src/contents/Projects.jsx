// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import logoimg from "../assets/Images/IMG_2455-removebg-preview__1_-removebg-preview.png";
import img1 from "../assets/Images/Screenshot 2025-01-20 at 14.01.51.png";
import img2 from "../assets/Images/IMG_8711.jpg";
import img3 from "../assets/Images/Screenshot 2025-01-21 at 13.59.07.png";
function Projects() {
  const projectList = [
    {
      title: "Callphone LTD Website",
      description:
        "I developed a corporate website for Callphone LTD. My role included designing and implementing the website's front-end using ReactJS and Tailwind, ensuring cross-browser compatibility, and optimizing performance.",
      link: "https://www.callphoneng.com/",
      image: img1,
    },
    {
      title: "GEminent E-commerce Web App",
      description:
        "A responsive e-commerce application developed using React, designed to facilitate daily user transactions and streamline order placement. The platform includes an integrated payment system directly connected to a banking institution for seamless and secure transactions.",
      link: "https://tiidelab-main.vercel.app/",
      image: img2,
    },
    {
      title: "My Portfolio Site",
      description:
        "A modern and interactive portfolio built with React, styled using Tailwind CSS and vanilla CSS, and powered by React Spring for smooth animations. This project demonstrates my ability to create responsive and visually appealing designs while effectively utilizing cutting-edge libraries and tools.",
      link: "https://github.com/example/task-manager",
      image: img3,
    },
  ];

  return (
    <div className="font-sans text-gray-900 bg-gray-100 min-h-screen p-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-deep-green text-black">
        <div className="flex">
          <img src={logoimg} alt="logo" className="w-10" />
          <p className="font-bold text-3xl p-1">Theo</p>
        </div>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-purple-500">
              Home
            </Link>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-500">
              Projects
            </a>
          </li>
        </ul>
      </nav>

      <h1 className="text-4xl font-bold text-center mb-6 text-purple-700">
        My Projects
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-deep-green mb-2">
              {project.title}
            </h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
