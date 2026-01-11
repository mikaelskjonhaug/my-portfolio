import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import snake_logo from "../assets/snakelogo.jpg";
import ms_logo from "../assets/ms-logo-orange.png";
import twitter_logo from "../assets/twitter_logo.avif";
import ios_logo from "../assets/ioslogo.png";
import dungeon_logo from "../assets/dungeonart.jpg";
import { Baby } from 'lucide-react';

const projects = [
  {
    logo: Baby,
    title: "Beebo - SaaS",
    tools: ["Python", "FastAPI", "React", "PostgreSQL"],
    overview: [
      "Built a scalable full‑stack SaaS with a FastAPI backend and a Next.js (React) frontend, persisting data in PostgreSQL via SQLAlchemy models. ",
      "Implemented end-to-end security protocols, including ephemeral tokens, secure cookie flags, and CORS, with at-rest encryption for sensitive user information.",
    ],
    link: "https://beebo.baby",
  },
  {
    logo: snake_logo,
    title: "Snake-AI",
    tools: ["Python", "NumPy", "Pygame","OpenAI Gym"],
    overview: [
      "Built a custom OpenAI-Gym & Pygame Snake game engine featuring discrete action space, modular reward shaping, and real-time rendering at up to 1,500 FPS.", 
      "Implemented and trained a DQN agent with Stable-Baselines3 that converged in <100K time steps (20 apples/episode on a 12×12 board)",
    ],
    link: "https://github.com/mikaelskjonhaug/snake-ai",
  },
    {
    logo: dungeon_logo,
    title: "Procedurally generated roguelike",
    tools: ["Java"],
    overview: [
        "Built a seed-driven 2D roguelike in Java featuring procedural world generation, avatar customization, proximity-aware spawns, turn-based combat, and save/load via custom state serialization.",
      ],
    link: "https://github.com/mikaelskjonhaug/",
  },
];

export default function Projects() {
  const [expandedIdx, setExpandedIdx] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section className="py-8">
      <div
        className="mb-[25px] text-accent2 text-3xl font-bold text-center"
        id="projects"
      >
        Projects
      </div>
      <p className="text-center text-muted mb-8 max-w-2xl mx-auto px-4">
        A selection of personal and academic projects showcasing my skills in software development, machine learning, and game design.
      </p>
      <div className="flex flex-col space-y-4 px-4 max-w-2xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-[2px] transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #00BFA6 0%, #FF6F00 100%)",
              borderRadius: "12px",
            }}
          >
            <div className="p-4" style={{ borderRadius: "10px", backgroundColor: "rgba(36, 36, 36, 0.8)" }}>
            <div className="flex items-center">
              {/* Logo */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >

                    {(() => {
                  const Logo = project.logo;
                  return typeof Logo === "string" ? (
                    <img
                      src={Logo}
                      alt={project.title + " logo"}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                  ) : (
                    <Logo className="w-14 h-14 rounded-lg object-cover" />
                  );
                })()}
              </a>
              {/* Title & Tools */}
              <div className="ml-4 flex-1 min-w-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text text-base font-semibold hover:text-accent transition-colors"
                  style={{ transition: "color 0.2s, text-shadow 0.2s" }}
                >
                  {project.title}
                </a>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-full bg-bg text-accent2 text-xs font-medium border border-accent2/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              {/* Read More Button */}
              <button
                onClick={() => toggleExpand(idx)}
                className="ml-4 flex-shrink-0 px-3 py-1 text-sm rounded-md bg-accent2/20 text-accent2 hover:bg-accent2/30 transition-colors"
              >
                {expandedIdx === idx ? "Show Less" : "Read More"}
              </button>
            </div>
            {/* Overview (expandable with animation) */}
            <AnimatePresence>
              {expandedIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 pt-3 border-t border-muted/30 text-text text-sm">
                    {Array.isArray(project.overview) ? (
                      <ul className="list-disc list-inside space-y-2">
                        {project.overview.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      project.overview
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}