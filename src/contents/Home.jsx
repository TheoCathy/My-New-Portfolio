// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/Images/IMG_4926.JPG";
import img2 from "../assets/Images/IMG_6358.jpg";
import logoimg from "../assets/Images/IMG_2455-removebg-preview__1_-removebg-preview.png";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import ResumeButton from "./Resume";
import MyGallery from "./Gallery";
import AppText from "./Text";
import LandingText from "./Text";

function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-serif bg-gradient-to-r from-purple-900 via-green-950 to-teal-950  ">
      {/* Navbar */}
      <nav className="flex justify-around items-center p-6 bg-deep-green text-gray-200">
        <div className="flex">
          <img src={logoimg} alt="logo" className="w-10" />
          <p className="font-bold text-3xl p-1">Theo</p>
        </div>

        <ul className="flex space-x-6 text-lg">
          <li>
            <a href="#home" className="hover:text-purple-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-500">
              About
            </a>
          </li>
          <li>
            <Link to="/projects" className="hover:text-purple-500">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <div className="w-full md:w-2/3 mx-auto border-t border-gray-400 mt-1 mb-3 "></div>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-dvh bg-gradient-to-r from-purple-900 via-green-950 to-teal-950 flex flex-col justify-center items-center text-black p-2"
      >
        <div className="w-full mt-10">
          {/* Info Card */}
          <div className="bg-purple-100 w-full max-w-md shadow-lg rounded-lg py-2 px-4 mb-4 mx-auto">
            <LandingText />
            <h2 className="text-center font-semibold">
              Great to have you take a look at my portfolio! 😊
            </h2>
            <div className="flex items-center justify-center mt-2">
              <ResumeButton />
            </div>
          </div>
          <MyGallery />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center bg-deep-green text-neutral-950 p-6 bg-gray-200"
        style={{
          background:
            "linear-gradient(135deg, rgb(96, 72, 120) 15%, transparent 10%), linear-gradient(35deg, rgb(88, 100, 88) 15%, transparent 25%), linear-gradient(225deg, rgb(88, 100, 88) 5%, transparent 15%),linear-gradient(325deg, rgba(68, 52, 112, 0.7) 15%, rgba(255, 255, 255, 0.7) 5%)",

          backgroundPosition: "10px 0, 10px 0, 2 0, 0 0",
        }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg max-w-3xl text-center">
          Theodora Orji is a passionate software programmer with strong
          front-end development skills, specializing in creating functional and
          visually appealing digital experiences. Proficient in JavaScript,
          TypeScript, and libraries like ReactJS, NextJS and React Native, I
          excel at performance optimization, cross-browser compatibility, and
          user-centered design as well as mobile App designs. While advancing my
          expertise in backend frameworks such as Oracle SQL, PHP and JAVA, I
          remain committed to staying at the forefront of industry trends.
        </p>
        <p className="text-lg max-w-3xl text-center mt-4">
          Beyond my technical expertise, I possess a robust set of soft skills
          that have been instrumental in my journey. I am an accomplished
          communicator and presenter, with experience delivering engaging talks
          as a guest speaker at seminars and events. My ability to articulate
          complex ideas clearly and connect with diverse audiences has earned me
          recognition as an effective and inspiring speaker. I thrive in
          collaborative environments, fostering positivity and creativity among
          teams, and take pride in my leadership abilities. Alongside my
          professional pursuits, I am deeply passionate about empowering the
          next generation, particularly through mentoring, volunteering and
          advocating for greater representation of women in STEM fields.
        </p>
        {/* <h2 className="text-3xl font-bold mb-4">Projects</h2> */}
        <p className="mt-10 text-lg text-center">
          Have a look at my projects by clicking the link below.
        </p>
        <Link
          to="/projects"
          className="px-6 my-3 py-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition"
        >
          View Projects
        </Link>

        <h2 className="text-3xl font-bold mb-4 mt-10">Contact Me</h2>
        <p className="text-xl text-center mb-4">
          Feel free to contact me. Let’s work together.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
          {/* Email Button */}
          <a
            href="mailto:theodoranneoma@gmail.com"
            className="flex items-center justify-center px-6 py-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition text-center"
          >
            <MdEmail className="w-5 h-5 mr-2" />
            Email Me
          </a>

          {/* Phone Button */}
          <button className="flex items-center justify-center px-6 py-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition text-center">
            <MdPhone className="w-5 h-5 mr-2" />
            Call Me +44 7424346916
          </button>

          <a
            href="https://www.linkedin.com/in/theodora-orji-698625116/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition text-center"
          >
            <FaLinkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-deep-green text-center text-gray-50  bg-rgb(51, 50, 92) py-2"
        style={{ background: " rgb(51, 50, 92), rgb(88, 99, 88)" }}
      >
        <p className="text-xs">
          All rights reserved. Designed by Theodora <br></br>© {currentYear}
        </p>
      </footer>
    </div>
  );
}

export default Home;
