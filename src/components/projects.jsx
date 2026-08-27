import { Baby } from "lucide-react";
import dungeonLogo from "../assets/dungeonart.jpg";
import snakeLogo from "../assets/snakelogo.jpg";

const projects = [
  {
    logo: Baby,
    title: "Beebo",
    type: "SaaS",
    tools: ["Python", "FastAPI", "React", "PostgreSQL"],
    overview: [
      "Built a full-stack SaaS with a FastAPI backend, React frontend, and PostgreSQL persistence.",
      "Implemented ephemeral tokens, secure cookies, CORS protections, and encryption for sensitive information.",
    ],
    link: "https://beebo.baby",
  },
  {
    logo: snakeLogo,
    title: "Snake AI",
    type: "Reinforcement learning",
    tools: ["Python", "NumPy", "Pygame", "OpenAI Gym"],
    overview: [
      "Built a custom Snake environment with modular rewards and real-time rendering at up to 1,500 FPS.",
      "Trained a DQN agent that converged in fewer than 100,000 time steps.",
    ],
    link: "https://github.com/mikaelskjonhaug/snake-ai",
  },
  {
    logo: dungeonLogo,
    title: "Procedural Roguelike",
    type: "Game systems",
    tools: ["Java"],
    overview: [
      "Built a seed-driven 2D roguelike with procedural worlds, turn-based combat, and custom save-state serialization.",
    ],
    link: "https://github.com/mikaelskjonhaug/",
  },
];

export default function Projects() {
  return (
    <div className="section-layout">
      <header className="section-header">
        <span>projects/</span>
        <h2>Selected work</h2>
      </header>
      <div className="entries">
        {projects.map((project) => {
          const Logo = project.logo;
          return (
            <details className="entry project-entry" key={project.title}>
              <summary>
                {typeof Logo === "string"
                  ? <img src={Logo} alt="" />
                  : <span className="project-icon"><Logo aria-hidden="true" /></span>}
                <span className="entry-title">
                  <strong>{project.title}</strong>
                  <span>{project.type}</span>
                </span>
                <span className="project-tools">{project.tools.join(" · ")}</span>
                <span className="entry-toggle" aria-hidden="true">+</span>
              </summary>
              <div className="entry-details">
                <ul>
                  {project.overview.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View project ↗
                </a>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
