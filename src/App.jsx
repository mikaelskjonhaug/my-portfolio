import "./index.css";
import CommandMenu from "./components/command-menu.jsx";
import Experience from "./components/experience.jsx";
import Hero from "./components/hero.jsx";
import Projects from "./components/projects.jsx";
import Skills from "./components/skills.jsx";

const links = ["Blog", "Skills", "Experience", "Projects"];

function Navbar() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="monogram" href="#top" aria-label="Back to top">
        <span>m</span>s<span>.</span>
      </a>
      <div className="nav-links">
        {links.map((label, index) => (
          <a key={label} href={`#${label.toLowerCase()}`}>
            <kbd>{index + 1}</kbd> {label}
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
        <CommandMenu links={links} />
        <main className="site-main">
          <Hero name="mikaelskjonhaug" />
          <section id="blog" className="portfolio-section">
            <div className="section-layout">
              <header className="section-header">
                <span>blog/</span>
                <h2>Blog</h2>
              </header>
              <p className="section-empty">No posts yet.</p>
            </div>
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
