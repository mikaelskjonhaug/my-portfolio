import reactLogo from "../assets/react.svg"; // Placeholder logo

const projects = [
  {
    logo: reactLogo,
    title: "SVG logo from text",
    tools: ["Python", "Pillow"],
    overview: "Creates beautiful SVG renders with any font and text size desired",
    link: "https://github.com/mikaelskjonhaug/svg_font_logo"
  },
  {
    logo: reactLogo,
    title: "Snake-AI",
    tools: ["Python", "StableBaseline3", "OpenAI-GYM"],
    overview: "Deep Q-Network RL agent that can learn to play Snake. Custom built engine and enviornment.",
    link: "https://github.com/mikaelskjonhaug/snake-ai"
  },
  {
    logo: reactLogo,
    title: "Full-stack Social Media",
    tools: ["Swift", "Firebase"],
    overview: "Social media app with full functionality",
    link: "https://github.com/mikaelskjonhaug/social-media"
  }
];

export default function Experience() {
  return (
    <section className="py-8">
      <style>{`
        .exp-card {
          transition: box-shadow 0.3s;
          cursor: pointer;
        }
        .exp-card:hover {
          box-shadow:
            0 0 16px 4px rgba(0,191,166,0.4), /* teal glow */
            0 0 32px 8px rgba(255,111,0,0.2); /* orange glow */
        }
      `}</style>
      <div className="text-accent2 text-3xl font-bold mb-6 text-center " id="experience">
        Projects
      </div>
      <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0 px-4 justify-center items-center w-full">
        {projects.map((exp, idx) => (
          <div
            key={idx}
            className="exp-card min-w-[250px] max-w-[250px] h-[288px] snap-center bg-bg2 rounded-xl p-4 flex flex-col items-center border-2"
            style={{
              borderImage: "linear-gradient(135deg, var(--tw-color-accent2, #00BFA6) 0%, var(--tw-color-accent, #FF6F00) 100%) 1",
              borderImageSlice: 1,
            }}
            onClick={() => window.open(exp.link, '_blank')}
            tabIndex={0}
            role="button"
            aria-label={`Open ${exp.title} project website`}
          >
            <img
              src={exp.logo}
              alt={exp.title + " logo"}
              className="w-16 h-16 mb-3"
            />
            <div className="text-text text-base font-semibold mb-2 text-center">
              {exp.title}
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              {exp.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-bg text-accent2 text-xs font-medium border border-accent2 shadow-sm"
                  style={{display: 'inline-block'}}
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="text-muted text-sm text-center">
              {exp.overview}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}