import hortusLogo from "../assets/Hortus-logo.webp";
import washingtonLogo from "../assets/Washington_logo.webp";

const experiences = [
  {
    logo: hortusLogo,
    title: "Software Engineer",
    company: "Hortus AI",
    overview: [
      "Lead Engineer primarily working on the backend for Hortus Trellis.",
    ],
    duration: "Aug 2025 — Present",
    link: "https://trellis.hortus.ai/",
  },
  {
    logo: washingtonLogo,
    title: "Assistant Coach",
    company: "Washington Justice",
    overview: [
      "Assistant Coach for the Overwatch League team, Washington Justice.",
    ],
    duration: "Aug 2018 — Dec 2019",
    link: "https://www.washington-justice.com/",
  },
];

export default function Experience() {
  return (
    <div className="section-layout">
      <header className="section-header">
        <span>work.log</span>
        <h2>Experience</h2>
      </header>
      <div className="entries">
        {experiences.map((experience) => (
          <details className="entry" key={experience.company}>
            <summary>
              <img src={experience.logo} alt="" />
              <span className="entry-title">
                <strong>{experience.company}</strong>
                <span>{experience.title}</span>
              </span>
              <time>{experience.duration}</time>
              <span className="entry-toggle" aria-hidden="true">+</span>
            </summary>
            <div className="entry-details">
              <ul>
                {experience.overview.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a href={experience.link} target="_blank" rel="noopener noreferrer">
                Visit {experience.company} ↗
              </a>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
