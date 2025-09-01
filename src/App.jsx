// src/App.jsx
import "./index.css";            // make sure Tailwind is loaded
import Hero from "./components/hero.jsx"; // <-- import your component
import msLogo from "./assets/ms-logo-512.png";
import AboutMe from "./components/about-me.jsx";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] bg-bg bg-opacity-50 backdrop-blur-md z-50">
      {/* Mobile: logo centered, no links */}
      <div className="flex justify-center items-center h-full md:hidden">
        <img
          src={msLogo}
          alt="Mikael Skjonhaug logo"
          className="h-[40px] w-auto"
          style={{ objectFit: "contain" }}
        />
      </div>
      {/* Desktop/tablet: logo left, links right */}
      <div className="hidden md:flex items-end justify-between px-8 h-full w-full">
        <img
          src={msLogo}
          alt="Mikael Skjonhaug logo"
          className="h-[60px] w-auto"
          style={{ objectFit: "contain" }}
        />
        <div
          className="flex items-end space-x-8"
          style={{ position: "relative", top: "-5px" }}
        >
          <a href="#about" className="text-base font-semibold text-text hover:text-accent transition-colors">About</a>
          <a href="#experience" className="text-base font-semibold text-text hover:text-accent transition-colors">Experience</a>
          <a href="#skills" className="text-base font-semibold text-text hover:text-accent transition-colors">Skills</a>
          <a href="#projects" className="text-base font-semibold text-text hover:text-accent transition-colors">Projects</a>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <main className="pt-[120px]">
        <div className="relative bg-bg min-h-screen">
          <div className="container py-4">
            {/* hero section */}
            <Hero
              name="Mikael Skjonhaug"
              subheader="AI/ML • SWE • Backend"
              ctaText="View Projects"
            />
            <AboutMe/>
          </div>
        </div>
      </main>
    </div>
  );
}
