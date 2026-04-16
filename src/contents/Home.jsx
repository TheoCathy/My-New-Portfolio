// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import logoimg from "../assets/Images/IMG_2455-removebg-preview__1_-removebg-preview.png";
import { MdEmail, MdPhone } from "react-icons/md";
import {
  FaLinkedin,
  FaBrain,
  FaMicrophone,
  FaHandsHelping,
  FaUsers,
  FaHeart,
  FaChild,
  FaLaptopCode,
  FaExternalLinkAlt 
} from "react-icons/fa";
import ResumeButton from "./Resume";
import MyGallery from "./Gallery";
import LandingText from "./Text";
import profileImg from "../assets/Images/Theodora_Image.jpeg";
import llmImg from "../assets/Images/IMG_8314.PNG";
import aiPolicyImg from "../assets/Images/IMG_8493.PNG";
import speakingImg from "../assets/Images/8df5cfde-3ea5-4565-905c-2d2b6fd4b9d1.jpg";
import volunteerImg from "../assets/Images/IMG_7388.jpg";
import mentorImg from "../assets/Images/IMG_7908.jpg";

function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-serif bg-gradient-to-r from-purple-900 via-green-950 to-teal-950">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-purple-950/80 border-b border-purple-800/40">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <img src={logoimg} alt="logo" className="w-10" />
            <p className="font-bold text-3xl text-gray-100">Theo</p>
          </div>

          <ul className="hidden md:flex space-x-8 text-lg text-gray-200">
            <li>
              <a href="#home" className="hover:text-purple-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#research" className="hover:text-purple-400 transition">
                Research
              </a>
            </li>
            <li>
              <a href="#community" className="hover:text-purple-400 transition">
                Community
              </a>
            </li>
            <li>
              <Link to="/projects" className="hover:text-purple-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile menu toggle */}
          <details className="md:hidden relative">
            <summary className="list-none cursor-pointer text-gray-200 text-2xl">
              ☰
            </summary>
            <ul className="absolute right-0 mt-2 w-48 bg-purple-950 rounded-lg shadow-xl border border-purple-800 py-2 text-gray-200">
              <li>
                <a href="#home" className="block px-4 py-2 hover:bg-purple-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block px-4 py-2 hover:bg-purple-800">
                  About
                </a>
              </li>
              <li>
                <a href="#research" className="block px-4 py-2 hover:bg-purple-800">
                  Research
                </a>
              </li>
              <li>
                <a href="#community" className="block px-4 py-2 hover:bg-purple-800">
                  Community
                </a>
              </li>
              <li>
                <Link to="/projects" className="block px-4 py-2 hover:bg-purple-800">
                  Projects
                </Link>
              </li>
              <li>
                <a href="#contact" className="block px-4 py-2 hover:bg-purple-800">
                  Contact
                </a>
              </li>
            </ul>
          </details>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-dvh bg-gradient-to-r from-purple-900 via-green-950 to-teal-950 flex flex-col justify-center items-center text-black p-2 overflow-hidden"
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

      {/* ===== ABOUT ME SECTION ===== */}
      <section
        id="about"
        className="relative py-20 px-6 overflow-hidden bg-gray-50"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2 text-purple-950">
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-10 rounded-full"></div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Profile image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-2xl border-4 border-purple-400 shadow-xl overflow-hidden">
                <img src={profileImg} alt="Theodora" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-neutral-900">
              <p className="text-lg leading-relaxed mb-4">
                I am a software developer and researcher with a passion for
                building user-centered, impactful digital solutions. With
                expertise in <strong>React, React Native, JavaScript, PHP,</strong>{" "}
                and <strong>SQL</strong>, I develop scalable web and mobile
                applications that balance functionality with great user
                experience.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                My work is driven by a strong interest in{" "}
                <strong>Artificial Intelligence</strong>, particularly in how it
                can be used responsibly to improve accessibility, usability, and
                everyday digital interactions.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond development, I am actively engaged in the tech community through speaking engagements where I share insights on AI, accessibility, and emerging technologies. I am passionate about mentorship, supporting aspiring developers particularly women and underrepresented groups by guiding them through their learning and career journeys.
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "React",
                  "React Native",
                  "JavaScript",
                  "PHP",
                  "SQL",
                  "Tailwind CSS",
                  "TypeScript",
                  "Next.js",
                  "Java",
                  "WCAG",
                  "AI Ethics And Policy",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESEARCH & AI FOCUS SECTION ===== */}
      <section
        id="research"
        className="py-20 px-6 bg-gradient-to-br from-purple-950 via-green-950 to-teal-950 text-gray-100"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <FaBrain className="text-purple-400 text-3xl" />
            <h2 className="text-4xl font-bold text-center">
              Research &amp; AI Focus
            </h2>
          </div>
          <div className="w-20 h-1 bg-purple-400 mx-auto mb-10 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Research Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-lg hover:border-purple-400/40 transition flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                LLMs &amp; Web Accessibility
              </h3>
              <p className="text-gray-300 leading-relaxed flex-grow">
                My research explores the use of

                Large Language Models (LLMs)

                to address web accessibility challenges. I investigate how
                factors such as context window size, prompting strategies, and
                error severity influence the effectiveness of AI in detecting
                and fixing accessibility issues.
              </p>
              {/* Research image */}
              <div className="mt-6 w-full h-56 rounded-xl overflow-hidden border border-purple-600/30 bg-purple-900/20">
                <img src={llmImg} alt="LLMs and Web Accessibility" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* AI Policy Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 shadow-lg hover:border-green-400/40 transition flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-green-300">
                AI Policy &amp; Governance
              </h3>
              <p className="text-gray-300 leading-relaxed flex-grow">
                Alongside this, I have a strong interest in

                AI policy and governance

                , advocating for ethical, transparent, and inclusive AI systems
                that benefit diverse user groups.
              </p>
              {/* AI policy image */}
              <div className="mt-6 w-full h-56 rounded-xl overflow-hidden border border-green-600/30 bg-green-900/20">
                <img src={aiPolicyImg} alt="AI Policy and Governance" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS TEASER SECTION ===== */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-2 text-purple-950">Projects</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-neutral-800 mb-4 leading-relaxed">
            My portfolio includes a variety of projects that demonstrate both
            technical depth and practical application. Some of these projects I worked on independently and some with a team, reflecting my
            ability to collaborate effectively and adapt to different project requirements. These experiences highlight my product architecture
            design skills, as well as my ability to develop and deploy solutions that solve
            real-world problems.
          </p>
          <Link
            to="/projects"
            className="inline-block px-8 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all font-semibold text-lg"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* ===== COMMUNITY / SPEAKING / MENTORSHIP / VOLUNTEERING ===== */}
      <section
        id="community"
        className="py-20 px-6 bg-gradient-to-br from-purple-950 via-green-950 to-teal-950 text-gray-100"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2">
            Community &amp; Impact
          </h2>
          <div className="w-20 h-1 bg-purple-400 mx-auto mb-12 rounded-full"></div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* 1. Speaking Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-lg hover:scale-[1.02] transition-transform flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/30 flex items-center justify-center">
                  <FaMicrophone className="text-purple-300 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-purple-300">
                  Speaking &amp; Engagement
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                I actively contribute to the tech community through speaking
                engagements where I share knowledge on AI, accessibility, and
                emerging technologies. These experiences allow me to connect with
                diverse audiences and promote inclusive innovation.
              </p>
              <a
                href="https://www.youtube.com/watch?v=k0q8J8bFVTA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 font-semibold mb-4 transition-colors"
              >
                <FaExternalLinkAlt className="text-sm" />
                Watch one of my session here
              </a>
              <div className="w-full h-56 rounded-xl overflow-hidden border border-purple-600/30 bg-purple-900/20">
                <img src={speakingImg} alt="Speaking engagement" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* 2. Professional Memberships Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-lg hover:scale-[1.02] transition-transform flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/30 flex items-center justify-center">
                  <FaUsers className="text-purple-300 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-purple-300">
                  Professional Memberships
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                I am an active member of professional organisations that allow me
                to stay connected with the tech community, access development
                opportunities, and contribute to initiatives that promote
                diversity and excellence in technology.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-purple-500/10">
                  <FaHeart className="text-purple-400" />
                  <span className="font-semibold">
                    BCS, The Chartered Institute for IT
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-purple-500/10">
                  <FaHeart className="text-purple-400" />
                  <span className="font-semibold">Coding Black Females</span>
                </div>
              </div>
            </div>

            {/* 3. Volunteering Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/20 shadow-lg hover:scale-[1.02] transition-transform flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-600/30 flex items-center justify-center">
                  <FaChild className="text-teal-300 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-teal-300">
                  Volunteering
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                Through my work with the{" "}
                <strong className="text-teal-300">Altitude Foundation</strong>, I
                teach children foundational technology skills, helping them build
                early interest in digital literacy and innovation. This role
                reflects my commitment to giving back and shaping the next
                generation of tech talent.
              </p>
              <div className="w-full h-56 rounded-xl overflow-hidden border border-teal-600/30 bg-teal-900/20">
                <img src={volunteerImg} alt="Volunteering" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* 4. Mentorship Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 shadow-lg hover:scale-[1.02] transition-transform flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600/30 flex items-center justify-center">
                  <FaHandsHelping className="text-green-300 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-green-300">
                  Mentorship
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                I am passionate about mentoring aspiring developers, especially
                women and individuals from underrepresented backgrounds in tech.
                I provide guidance on learning pathways, project building, and
                career development, helping others grow with confidence in the
                industry.
              </p>
              <div className="w-full h-56 rounded-xl overflow-hidden border border-green-600/30 bg-green-900/20">
                <img src={mentorImg} alt="Mentorship" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section
        id="contact"
        className="py-20 px-6 text-center bg-gray-50"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-2 text-purple-950">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-neutral-800 mb-8">
            Feel free to reach out. Let&apos;s work together!
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
            {/* Email Button */}
            <a
              href="mailto:theodoranneoma@gmail.com"
              className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all text-center font-medium"
            >
              <MdEmail className="w-5 h-5 mr-2" />
              Email Me
            </a>

            {/* Phone Button */}
            <button className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all text-center font-medium">
              <MdPhone className="w-5 h-5 mr-2" />
              Call Me +44 7424346916
            </button>

            <a
              href="https://www.linkedin.com/in/theodora-orji-698625116/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all text-center font-medium"
            >
              <FaLinkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        className="text-center text-gray-50 py-4"
        style={{ background: "rgb(51, 50, 92)" }}
      >
        <p className="text-xs">
          All rights reserved. Designed by Theodora <br />© {currentYear}
        </p>
      </footer>
    </div>
  );
}

export default Home;
