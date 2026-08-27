import hortusLogo from "../assets/Hortus-logo.webp";
import washingtonLogo from "../assets/Washington_logo.webp";

const experiences = [
  {
    logo: hortusLogo,
    title: "Software Engineer",
    company: "Hortus AI",
    overview: [
      "Led the modularization of a 60,000+ line codebase, reducing complexity and deployment bottlenecks.",
      "Built unit, integration, and end-to-end testing infrastructure with Pytest and Cypress.",
      "Decoupled the frontend and backend deployment architecture and owned the CI/CD pipeline and pull-request quality.",
      "Built AI-assisted vendor ingestion and assessment systems that expanded marketplace inventory by 600%.",
      "Integrated Stripe subscriptions and secure access control to replace manual billing.",
    ],
    duration: "Aug 2025 — Present",
    link: "https://hortus.ai/",
  },
  {
    logo: washingtonLogo,
    title: "Assistant Coach",
    company: "Washington Justice",
    overview: [
      "Helped improve the team's global ranking from 18th to 4th through structured strategy sessions and weekly performance reviews.",
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
