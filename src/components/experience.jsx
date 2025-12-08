import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hortus_logo from "../assets/Hortus-logo.webp";
import washington_logo from "../assets/Washington_logo.webp";

const experiences = [
  {
    logo: hortus_logo,
    title: "Software Engineer Intern",
    company: "Hortus AI",
    overview: [
      "Engineered a dual dyno Heroku architecture to decouple the Frontend and Backend, resolving critical deployment blockers. Took ownership of the full CI/CD pipeline and managed code quality by reviewing all team pull requests.",
      "Built data ingestion pipelines using Gemini and Hugging Face APIs to scrape and enrich vendor data, scaling the marketplace inventory by 600% across fact sheets and service offerings.",
      "Designed an automated assessment framework using Gemini to score AI vendors on privacy, security, and usability. Enabled users to perform side-by-side fact sheet comparisons and identify tool synergies.",
      "Integrated Stripe payment infrastructure to replace manual billing, enabling automatic subscription management and secure access control for scalable revenue collection.",
    ],
    link: "https://hortus.ai/",
  },
  {
    logo: washington_logo,
    title: "Assistant Coach",
    company: "Washington Justice",
    overview: [
      "Helped improve team global ranking from 18th to 4th after assistant coach assignment by organizing structured pre-game strategy meetings and weekly one-on-one performance reviews for athletes",
    ],
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
            className="bg-bg2 rounded-xl p-4 border-2 transition-all duration-300"
            style={{
              borderImage:
                "linear-gradient(135deg, var(--tw-color-accent2, #00BFA6) 0%, var(--tw-color-accent, #FF6F00) 100%) 1",
              borderImageSlice: 1,
            }}
          >
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
                  className="text-text text-base font-semibold hover:text-accent2 transition-colors"
                >
                  {exp.company}
                </a>
                <div className="text-muted text-sm">{exp.title}</div>
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
        ))}
      </div>
    </section>
  );
}