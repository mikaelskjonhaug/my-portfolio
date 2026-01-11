import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hortus_logo from "../assets/Hortus-logo.webp";
import washington_logo from "../assets/Washington_logo.webp";

const experiences = [
  {
    logo: hortus_logo,
    title: "Lead Software Engineer Intern",
    company: "Hortus AI",
    overview: [
      "Lead a team to eliminate significant technical debt by refactoring a 60,000+ line monolithic codebase into a scalable, modular architecture, reducing code complexity and deployment bottlenecks.",
      "Engineered a comprehensive testing infrastructure for unit, integration and e2e tests using Pytest and Cypress.",
      "Engineered a dual dyno Heroku architecture to decouple the Frontend and Backend, resolving critical deployment blockers. Took ownership of the full CI/CD pipeline and managed code quality by reviewing all team pull requests.",
      "Built data ingestion pipelines using Gemini and Hugging Face APIs to scrape and enrich vendor data, scaling the marketplace inventory by 600% across fact sheets and service offerings.",
      "Designed an automated assessment framework using Gemini to score AI vendors on privacy, security, and usability. Enabled users to perform side-by-side fact sheet comparisons and identify tool synergies.",
      "Integrated Stripe payment infrastructure to replace manual billing, enabling automatic subscription management and secure access control for scalable revenue collection.",
    ],
    duration: "August 2025 - Present",
    link: "https://hortus.ai/",
  },
  {
    logo: washington_logo,
    title: "Assistant Coach",
    company: "Washington Justice",
    overview: [
      "Helped improve team global ranking from 18th to 4th after assistant coach assignment by organizing structured pre-game strategy meetings and weekly one-on-one performance reviews for athletes",
    ],
    duration: "Aug 2018 - Dec 2019",
    link: "https://www.washington-justice.com/",
  },
];

export default function Experience() {
  const [expandedIdx, setExpandedIdx] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section className="py-8">
      <div
        className="mb-[25px] text-accent2 text-3xl font-bold text-center"
        id="experience"
      >
        Experience
      </div>
      <div className="flex flex-col space-y-4 px-4 max-w-2xl mx-auto">
        {experiences.map((exp, idx) => (
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
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src={exp.logo}
                  alt={exp.company + " logo"}
                  className="w-14 h-14 rounded-lg object-cover"
                />
              </a>
              {/* Company & Title */}
              <div className="ml-4 flex-1 min-w-0">
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text text-base font-semibold hover:text-accent transition-colors"
                  style={{ transition: "color 0.2s, text-shadow 0.2s" }}
                >
                  {exp.company}
                </a>
                <div className="text-muted text-sm">{exp.title}</div>
                <div className="text-accent2 text-sm">{exp.duration}</div>
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
              {expandedIdx === idx && exp.overview && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 pt-3 border-t border-muted/30 text-muted text-sm">
                    {Array.isArray(exp.overview) ? (
                      <ul className="list-disc list-inside space-y-2">
                        {exp.overview.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      exp.overview
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