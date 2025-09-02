// src/App.jsx
import "./index.css";            // make sure Tailwind is loaded
import Hero from "./components/hero.jsx"; // <-- import your component
import msLogoOrange from "./assets/ms-logo-orange.png";
import msLogoTeal from "./assets/ms-logo-teal.png";
import AboutMe from "./components/about-me.jsx";
import { useState } from "react";
import Experience from "./components/experience.jsx";
import Projects from "./components/projects.jsx"
import Skills from "./components/skills.jsx";

function Navbar() {
  const [logoSrc, setLogoSrc] = useState(msLogoOrange);
  const handleMouseEnter = () => setLogoSrc(msLogoTeal);
  const handleMouseLeave = () => setLogoSrc(msLogoOrange);
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };
  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] bg-bg bg-opacity-50 backdrop-blur-md z-50">
      {/* Mobile: logo centered, no links */}
      <div className="flex justify-center items-center h-full md:hidden">
        <button onClick={handleLogoClick} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
          <img
            src={logoSrc}
            alt="Mikael Skjonhaug logo"
            className="h-[25px] w-auto"
            style={{ objectFit: "contain" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </button>
      </div>
      {/* Desktop/tablet: logo left, links right */}
      <div className="hidden md:flex items-end justify-between px-8 h-full w-full">
        <button onClick={handleLogoClick} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
          <img
            src={logoSrc}
            alt="Mikael Skjonhaug logo"
            className="h-[30px] w-auto"
            style={{ objectFit: "contain" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </button>
        <div
          className="flex items-end space-x-8"
          style={{ position: "relative", top: "-5px" }}
        >
          <a href="#about-meme" className="text-base font-semibold text-text hover:text-accent transition-colors">About</a>
          <a href="#skills" className="text-base font-semibold text-text hover:text-accent transition-colors">Skills</a>
          <a href="#experience" className="text-base font-semibold text-text hover:text-accent transition-colors">Experience</a>
          <a href="#projects" className="text-base font-semibold text-text hover:text-accent transition-colors">Projects</a>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div className="bg-bg">
      <Navbar/>
      <div className="mt-[60px] md:mt-[150px]">
      <Hero 
        name="Mikael Skjonhaug"
        subheader="AI/ML • SWE • WEBDEV"
      />
      </div>
      <section id="about-meme" className="scroll-mt-[200px] mt-[25px] md:mt-[125px]">
      <AboutMe/>
      </section>
      <section id="skills"  className="scroll-mt-[200px] mt-[50px] md:mt-[125px]">
      <Skills/>
      </section>
      <section id="experience"  className="scroll-mt-[200px] mt-[50px] md:mt-[125px]">
      <Experience/>
      </section>
      <section id="projects"  className="scroll-mt-[200px] mt-[50px] md:mt-[125px] mb-[50px]">
      <Projects/>
      </section>
      </div>
  );
}
