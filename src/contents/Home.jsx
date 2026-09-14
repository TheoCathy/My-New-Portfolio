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
import CaThYImg from "../assets/Images/IMG_9970.jpg";

function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-serif bg-gradient-to-r from-gray-900 via-obsidian-900 to-gray-950">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-obsidian-950/80 border-b border-obsidian-800/40">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <img src={logoimg} alt="logo" className="w-10" />
            <p className="font-bold text-3xl text-gray-100">Theo</p>
          </div>

          <ul className="hidden md:flex space-x-8 text-lg text-gray-200">
            <li>
              <a href="#home" className="hover:text-obsidian-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-obsidian-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#research" className="hover:text-obsidian-400 transition">
                Research
              </a>
            </li>
            <li>
              <a href="#community" className="hover:text-obsidian-400 transition">
                Community
              </a>
            </li>
            <li>
              <Link to="/projects" className="hover:text-obsidian-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <a href="#contact" className="hover:text-obsidian-400 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile menu toggle */}
          <details className="md:hidden relative">
            <summary className="list-none cursor-pointer text-gray-200 text-2xl">
              ☰
            </summary>
            <ul className="absolute right-0 mt-2 w-48 bg-obsidian-950 rounded-lg shadow-xl border border-obsidian-800 py-2 text-gray-200">
              <li>
                <a href="#home" className="block px-4 py-2 hover:bg-obsidian-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block px-4 py-2 hover:bg-obsidian-800">
                  About
                </a>
              </li>
              <li>
                <a href="#research" className="block px-4 py-2 hover:bg-obsidian-800">
                  Research
                </a>
              </li>
              <li>
                <a href="#community" className="block px-4 py-2 hover:bg-obsidian-800">
                  Community
                </a>
              </li>
              <li>
                <Link to="/projects" className="block px-4 py-2 hover:bg-obsidian-800">
                  Projects
                </Link>
              </li>
              <li>
                <a href="#contact" className="block px-4 py-2 hover:bg-obsidian-800">
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
        className="min-h-dvh bg-gradient-to-r from-gray-900 via-obsidian-900 to-gray-950 flex flex-col justify-center items-center text-black p-2 overflow-hidden"
      >
        <div className="w-full mt-10">
          {/* Info Card */}
          <div className="bg-purple-100 w-full max-w-md shadow-lg rounded-lg py-2 px-4 mb-4 mx-auto">
            <LandingText />
            <h2 className="text-center font-semibold">
              Great to have you take a look at my portfolio!
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
          <h2 className="text-4xl font-bold text-center mb-2 text-gray-950">
            About Me
          </h2>
          <div className="w-20 h-1 bg-obsidian-500 mx-auto mb-10 rounded-full"></div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Profile image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-2xl border-4 border-dark shadow-xl overflow-hidden">
                <img src={profileImg} alt="Theodora" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-neutral-900">
              <p className="text-lg leading-relaxed mb-4">
                I am a full-stack developer and AI researcher with a passion for
                building user-centered, impactful digital solutions. With
                expertise in <strong>TypeScript, JavaScript, React, Next.js, Node.js, PHP,</strong>{" "}
                and <strong>SQL</strong>, I develop scalable web and mobile
                applications that balance functionality with great user
                experience as well as DevOp practices to ensure smooth deployment and maintenance.  Expertise in <strong>AWS </strong>
              </p>
              <p className="text-lg leading-relaxed mb-4">
                My work is driven by a strong interest in{" "}
                <strong>Artificial Intelligence</strong>, particularly in how it
                can be used responsibly to improve accessibility, usability, and
                everyday digital interactions. My MSc research explored this
                directly, building an LLM-powered system to detect and optimize
                WCAG accessibility shortcomings in web interfaces, work that
                continues to shape how I think about building inclusive
                technology.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Beyond development, I am actively engaged in the tech community
                through speaking engagements where I share insights on AI,
                accessibility, and emerging technologies. As a technical trainer
                at TekkLab, I teach AI-focused product managers developer
                workflows and responsible AI governance, and I founded Catch Them
                Young (CaThY), a girls-in-STEM initiative introducing children
                aged 8 to 14 to technology.
              </p>
              <p className="text-lg leading-relaxed">
                I am passionate about mentorship, supporting aspiring developers,
                particularly women and underrepresented groups, through my
                involvement with Women in Tech North East and ongoing bootcamp
                mentoring, guiding them through their learning and career
                journeys.
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
                  "AWS",
                  "WCAG",
                  "AI Ethics And Policy",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark text-white text-sm rounded-full shadow"
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
        className="py-20 px-6 bg-gradient-to-br from-gray-900 via-obsidian-900 to-gray-950 text-gray-100"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <FaBrain className="text-obsidian-400 text-3xl" />
            <h2 className="text-4xl font-bold text-center">
              Research &amp; AI Focus
            </h2>
          </div>
          <div className="w-20 h-1 bg-obsidian-400 mx-auto mb-10 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Research Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-dark shadow-lg hover:border-dark/60 transition flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-obsidian-300">
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
              <div className="mt-6 w-full h-56 rounded-xl overflow-hidden border border-dark bg-obsidian-900/20">
                <img src={llmImg} alt="LLMs and Web Accessibility" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* AI Policy Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-dark shadow-lg hover:border-dark/60 transition flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-obsidian-300">
                AI Policy &amp; Governance
              </h3>
              <p className="text-gray-300 leading-relaxed flex-grow">
                Alongside this, I have a strong interest in

                AI policy and governance

                , advocating for ethical, transparent, and inclusive AI systems
                that benefit diverse user groups.
              </p>
              {/* AI policy image */}
              <div className="mt-6 w-full h-56 rounded-xl overflow-hidden border border-dark bg-obsidian-900/20">
                <img src={aiPolicyImg} alt="AI Policy and Governance" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS TEASER SECTION ===== */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-2 text-gray-950">Projects</h2>
          <div className="w-20 h-1 bg-obsidian-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-neutral-800 mb-4 leading-relaxed">
            My portfolio includes a variety of projects that demonstrate both
            technical depth and practical application. Some of these projects I worked on independently and some with a team, reflecting my
            ability to collaborate effectively and adapt to different project requirements. These experiences highlight my product architecture
            design skills, as well as my ability to develop and deploy solutions that solve
            real-world problems.
          </p>
          <Link
            to="/projects"
            className="inline-block px-8 py-3 bg-dark text-white rounded-full shadow-lg hover:bg-dark/90 hover:shadow-xl transition-all font-semibold text-lg"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* ===== COMMUNITY / SPEAKING / MENTORSHIP / VOLUNTEERING ===== */}
      <section
        id="community"
        className="py-20 px-6 bg-gradient-to-br from-gray-900 via-obsidian-900 to-gray-950 text-gray-100"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2">
            Community &amp; Impact
          </h2>
          <div className="w-20 h-1 bg-obsidian-400 mx-auto mb-12 rounded-full"></div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* 1. Speaking Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-dark shadow-lg hover:scale-[1.02] transition-transform flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-obsidian-600/30 flex items-center justify-center">
                  <FaMicrophone className="text-obsidian-300 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-obsidian-300">
                  Speaking &amp; Engagement
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                I actively contribute to the tech community through speaking
                engagements where I share knowledge on AI, accessibility, and
                emerging technologies. These experiences allow me to connect with
                diverse audiences and promote inclusive innovation. <br /> <br /> 
                I have also had the opportunity to attend and represent my company at the UN Global Dialogue on AI Governance. 
                Established by the General Assembly within the United Nations, the dialogue provides an inclusive platform for Member States 
                and relevant stakeholders to discuss international cooperation, share best practices and lessons learned, and support open,
                 transparent, and inclusive discussions around AI governance.
              </p>
              <a
                href="https://www.youtube.com/watch?v=k0q8J8bFVTA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-obsidian-300 hover:text-obsidian-100 font-semibold mb-4 transition-colors"
              >
                <FaExternalLinkAlt className="text-sm" />
                Watch one of my session here
              </a>
              <div className="w-full h-56 rounded-xl overflow-hidden border border-dark bg-obsidian-900/20">
                <img src={speakingImg} alt="Speaking engagement" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* 2. CaThY Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-dark shadow-lg hover:scale-[1.02] transition-transform flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-obsidian-600/30 flex items-center justify-center">
                  <FaUsers className="text-obsidian-300 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-obsidian-300">
                  Catch Them Young (CaThY) Initiative
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                CaThY is a girls-in-STEM
                initiative I founded to introduce children aged 8 to 14 to
                technology, building confidence and curiosity early, before the
                gap in representation has a chance to take hold. <br /> <br />CaThY currently operates as a product under TekkLab, with a full
                suite of branded print and event materials supporting workshops
                and outreach. Looking ahead, we're exploring the path to
                becoming an independent Community Interest Company (CIC), a move
                that would let CaThY grow its own identity and reach beyond its
                current home at TekkLab.
              </p>
              <div className="w-full h-56 rounded-xl overflow-hidden border border-dark bg-obsidian-900/20">
                <img src={CaThYImg} alt="Volunteering" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-dark shadow-lg hover:scale-[1.02] transition-transform flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-obsidian-600/30 flex items-center justify-center">
                  <FaUsers className="text-obsidian-300 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-obsidian-300">
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
                <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-dark">
                  <FaHeart className="text-obsidian-400" />
                  <span className="font-semibold">
                    BCS, The Chartered Institute for IT
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-dark">
                  <FaHeart className="text-obsidian-400" />
                  <span className="font-semibold">Coding Black Females</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-dark">
                  <FaHeart className="text-obsidian-400" />
                  <span className="font-semibold">Women in Tech North East</span>
                </div>
                {/* <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-dark">
                  <FaHeart className="text-obsidian-400" />
                  <span className="font-semibold">Sisters in Higher Education Network (Shine)</span>
                </div> */}
              </div>
            </div>

            {/* 4. Volunteering Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-dark shadow-lg hover:scale-[1.02] transition-transform flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-obsidian-600/30 flex items-center justify-center">
                  <FaChild className="text-obsidian-300 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-obsidian-300">
                  Volunteering
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                Through my work with the{" "}
                <strong className="text-obsidian-300">Altitude Foundation</strong>, I
                teach children foundational technology skills, helping them build
                early interest in digital literacy and innovation. This role
                reflects my commitment to giving back and shaping the next
                generation of tech talent.
              </p>
              <div className="w-full h-56 rounded-xl overflow-hidden border border-dark bg-obsidian-900/20">
                <img src={volunteerImg} alt="Volunteering" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* 5. Mentorship Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-dark shadow-lg hover:scale-[1.02] transition-transform flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-obsidian-600/30 flex items-center justify-center">
                  <FaHandsHelping className="text-obsidian-300 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-obsidian-300">
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
              <div className="w-full h-56 rounded-xl overflow-hidden border border-dark bg-obsidian-900/20">
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
          <h2 className="text-4xl font-bold mb-2 text-gray-950">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-obsidian-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-neutral-800 mb-8">
            Feel free to reach out. Let&apos;s work together!
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
            {/* Email Button */}
            <a
              href="mailto:theodoranneoma@gmail.com"
              className="flex items-center justify-center px-6 py-3 bg-dark text-white rounded-full shadow-lg hover:bg-dark/90 hover:shadow-xl transition-all text-center font-medium"
            >
              <MdEmail className="w-5 h-5 mr-2" />
              Email Me
            </a>

            {/* Phone Button */}
            <button className="flex items-center justify-center px-6 py-3 bg-dark text-white rounded-full shadow-lg hover:bg-dark/90 hover:shadow-xl transition-all text-center font-medium">
              <MdPhone className="w-5 h-5 mr-2" />
              Call Me +44 7424346916
            </button>

            <a
              href="https://www.linkedin.com/in/theodora-orji-698625116/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-dark text-white rounded-full shadow-lg hover:bg-dark/90 hover:shadow-xl transition-all text-center font-medium"
            >
              <FaLinkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        className="text-center text-gray-50 py-4 bg-gray-900"
      >
        <p className="text-xs">
          All rights reserved. Designed by Theodora <br />© {currentYear}
        </p>
      </footer>
    </div>
  );
}

export default Home;
