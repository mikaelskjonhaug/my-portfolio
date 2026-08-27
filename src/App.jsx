import "./index.css";
import AboutMe from "./components/about-me.jsx";
import Experience from "./components/experience.jsx";
import Hero from "./components/hero.jsx";
import Projects from "./components/projects.jsx";
import Skills from "./components/skills.jsx";

const links = ["About", "Skills", "Experience", "Projects"];

function Navbar() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="monogram" href="#top" aria-label="Back to top">
        <span>m</span>s<span>.</span>
      </a>
      <div className="nav-links">
        {links.map((label) => (
          <a key={label} href={`#${label.toLowerCase()}`}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
export default function App() {
  return (
    <div id="top">
      <div className="site-shell">
        <Navbar />
        <main className="site-main">
          <Hero name="Mikael Skjonhaug" subheader="SWE · WEBDEV · AI/ML" />
          <section id="about" className="portfolio-section">
            <AboutMe />
          </section>
          <section id="skills" className="portfolio-section">
            <Skills />
          </section>
          <section id="experience" className="portfolio-section">
            <Experience />
          </section>
          <section id="projects" className="portfolio-section">
            <Projects />
          </section>
          <footer className="site-footer">
            <span>© {new Date().getFullYear()} Mikael Skjonhaug</span>
            <a href="#top">Back to top ↑</a>
          </footer>
        </main>
      </div>
    </div>
  );
}
