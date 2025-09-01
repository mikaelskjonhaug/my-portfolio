// src/App.jsx
import "./index.css";            // make sure Tailwind is loaded
import Hero from "./components/hero.jsx"; // <-- import your component
import msLogo from "./assets/ms-logo-512.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-[120px] flex items-center justify-between px-8 bg-bg bg-opacity-50 backdrop-blur-md z-50">
      {/* Logo left */}
      <img
        src={msLogo}
        alt="Mikael Skjonhaug logo"
        className="h-[80px] w-auto"
        style={{ objectFit: "contain" }}
      />
      {/* Nav links right */}
      <div className="flex space-x-8">
        <a href="#about" className="text-lg font-semibold text-text hover:text-accent transition-colors">About</a>
        <a href="#experience" className="text-lg font-semibold text-text hover:text-accent transition-colors">Experience</a>
        <a href="#skills" className="text-lg font-semibold text-text hover:text-accent transition-colors">Skills</a>
        <a href="#projects" className="text-lg font-semibold text-text hover:text-accent transition-colors">Projects</a>
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
          <div className="container py-12">
            {/* hero section */}
            <Hero
              name="Mikael Skjonhaug"
              subheader="AI/ML • SWE • Backend"
              ctaText="View Projects"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
