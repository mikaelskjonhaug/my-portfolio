import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialIcons = {
  GitHub: faGithub,
  LinkedIn: faLinkedin,
  Email: faEnvelope,
};

export default function Hero({ name, socialLinks }) {
  const letters = name.split("");
  const finalName = `${name.slice(0, -2)}.ug`;
  const firstMIdx = letters.findIndex((letter) => letter.toLowerCase() === "m");
  const firstSIdx = letters.findIndex((letter) => letter.toLowerCase() === "s");
  const [typedIdx, setTypedIdx] = useState(-1);
  const [extraSuffix, setExtraSuffix] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedIdx(name.length - 3);
      setExtraSuffix(".ug");
      return;
    }

    let index = -1;
    const timeouts = [];
    const later = (callback, delay) => {
      timeouts.push(window.setTimeout(callback, delay));
    };

    const typeNext = () => {
      index += 1;
      setTypedIdx(index);

      if (index < name.length - 1) {
        later(typeNext, Math.floor(Math.random() * 90) + 65);
        return;
      }

      later(() => setTypedIdx((current) => current - 1), 420);
      later(() => setTypedIdx((current) => current - 1), 560);
      later(() => setExtraSuffix("."), 760);
      later(() => setExtraSuffix(".u"), 870);
      later(() => setExtraSuffix(".ug"), 980);
    };

    typeNext();
    return () => timeouts.forEach(window.clearTimeout);
  }, [name]);

  return (
    <header className="hero">
      <p className="hero-kicker">hello, i&apos;m</p>
      <h1 className="hero-name" aria-label={finalName}>
        <span aria-hidden="true">
          {letters.slice(0, typedIdx + 1).map((character, index) => (
            <span
              className={index === firstMIdx || index === firstSIdx ? "typed-initial" : undefined}
              key={`${character}-${index}`}
            >
              {character}
            </span>
          ))}
          <span className="typed-suffix">{extraSuffix}</span>
          <span className="typing-caret" />
        </span>
      </h1>
      <div className="hero-links" aria-label="Social links">
        {socialLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label === "Email" ? "Email Mikael" : label}
          >
            <FontAwesomeIcon icon={socialIcons[label]} />
          </a>
        ))}
      </div>
    </header>
  );
}
