import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const accent = "text-accent";      // orange
const primary = "text-text";      // primary white

export default function Hero({ name, subheader }) {
  const letters = name.split("");
  const firstMIdx = letters.findIndex(l => l.toLowerCase() === "m");
  const firstSIdx = letters.findIndex(l => l.toLowerCase() === "s");
  const [typedIdx, setTypedIdx] = useState(-1);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    let idx = -1;
    let timeoutId;

    function typeNext() {
      idx++;
      setTypedIdx(idx);
      if (idx < letters.length - 1) {
        const delay = Math.floor(Math.random() * 100) + 100;
        timeoutId = setTimeout(typeNext, delay);
      } else {
        // Fade in subheading and icons together after 0.2s
        setTimeout(() => setShowInfo(true), 200);
      }
    }

    typeNext();
    return () => clearTimeout(timeoutId);
  }, [letters.length]);

  // Blinking cursor using CSS animation
  const cursorStyle = {
    width: "0.4em",
    height: "0.8em",
    marginLeft: "0px",
    verticalAlign: "text_bottom",
    borderRadius: "1px",
    background: "var(--tw-color-accent2, #00BFA6)",
    display: "inline-block",
    animation: "blink 1s steps(1) infinite",
    position: "relative",
    top: "0.2em"
  };

  return (
    <section
      className="bg-bg mb-[100px] flex flex-col items-center text-center px-6 scale-50 md:scale-100 -mt-[100px] md:mt-0"
      style={{
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
      <div className="mt-[10px] flex justify-center items-center" style={{ height: "180px" }}>
        <h1 className="text-4xl md:text-4xl font-bold flex justify-center" style={{ marginTop: "50px", transform: "scale(2)" }}>
          {letters.slice(0, typedIdx + 1).map((char, i) => {
            let colorClass = primary;
            if (i === firstMIdx || i === firstSIdx) colorClass = accent;
            return (
              <span
                key={i}
                className={colorClass}
                style={{ margin: "0 0px", transition: "opacity 0.2s" }}
              >
                {char}
              </span>
            );
          })}
          {/* Cursor appears after the last typed letter */}
          <span style={cursorStyle} />
        </h1>
      </div>

      {/* Subheader and Icons */}
      {showInfo && (
        <>
          {/* Subheading */}
          <motion.div
            className="text-text text-2xl font-medium scale-100 md:scale-100"
            style={{ marginTop: "10px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: showInfo ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {subheader}
          </motion.div>

          {/* Icons */}
          <motion.div
            className="flex space-x-8 scale-100 md:scale-100"
            style={{ marginTop: "10px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: showInfo ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="https://github.com/mikaelskjonhaug" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-3xl md:text-2xl text-text hover:text-accent transition-colors" />
            </a>
            <a href="https://linkedin.com/in/mikaelskjonhaug" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl md:text-2xl text-text hover:text-accent transition-colors" />
            </a>
            <a href="mailto:mikaelsk@berkeley.edu">
              <FontAwesomeIcon icon={faEnvelope} className="text-3xl md:text-2xl text-text hover:text-accent transition-colors" />
            </a>
          </motion.div>
        </>
      )}
    </section>
  );
}

