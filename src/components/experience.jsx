import reactLogo from "../assets/react.svg"; // Placeholder logo

const experiences = [
  {
    logo: reactLogo,
    title: "Math Tutor",
    company: "Glendale Community College",
    overview: "WIP.",
    link: "https://www.glendale.edu/"
  },
  {
    logo: reactLogo,
    title: "Software Engineer Intern",
    company: "Hortus AI",
    overview: "WIP.",
    link: "https://hortus.ai/"
  },
  {
    logo: reactLogo,
    title: "Assistant Coach",
    company: "Washington Justic",
    overview: "WIP.",
    link: "https://www.washington-justice.com/"
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
      <div className="text-accent2 text-3xl font-bold mb-6 text-center" id="experience">
        Experience
      </div>
  <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0 px-4 justify-center items-center w-full">
        {experiences.map((exp, idx) => (
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
            aria-label={`Open ${exp.company} website`}
          >
            <img
              src={exp.logo}
              alt={exp.company + " logo"}
              className="w-16 h-16 mb-3"
            />
            <div className="text-text text-base font-semibold mb-0 text-center">
              {exp.title}
            </div>
            <div className="text-text text-sm italic mb-1 text-center" style={{fontSize: '0.875rem', fontStyle: 'italic', fontWeight: 'normal'}}>
              {exp.company}
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