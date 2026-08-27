import "./index.css";
import CommandMenu from "./components/command-menu.jsx";
import Experience from "./components/experience.jsx";
import Hero from "./components/hero.jsx";
import Projects from "./components/projects.jsx";
import Skills from "./components/skills.jsx";

const links = ["Blog", "Skills", "Experience", "Projects"];
const socialLinks = [
  { label: "GitHub", href: "https://github.com/mikaelskjonhaug" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mikaelskjonhaug" },
  { label: "Email", href: "mailto:mikaelsk@berkeley.edu" },
];

function Navbar() {
  const navLinks = ["Hero", ...links];

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <span className="monogram" aria-label="ms.">
        <span>m</span>s<span>.</span>
      </span>
      <div className="nav-links">
        {navLinks.map((label, index) => (
          <a key={label} href={label === "Hero" ? "#top" : `#${label.toLowerCase()}`}>
            <span>./ {label}</span>
            <kbd>{index}</kbd>
          </a>
        ))}
      </div>
      <CommandMenu links={links} socialLinks={socialLinks} />
    </nav>
  );
}
export default function App() {
  return (
    <div id="top">
      <div className="site-shell">
        <Navbar />
        <main className="site-main">
          <Hero name="mikaelskjonhaug" socialLinks={socialLinks} />
          <section id="blog" className="portfolio-section">
            <div className="section-layout">
              <header className="section-header">
                <span>blog.md</span>
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
