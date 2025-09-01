import { useEffect, useState } from "react";

const accent = "text-accent";      // orange
const primary = "text-text";      // primary white

export default function Hero({ name }) {
  const letters = name.split("");
  const firstMIdx = letters.findIndex(l => l.toLowerCase() === "m");
  const firstSIdx = letters.findIndex(l => l.toLowerCase() === "s");
  const [typedIdx, setTypedIdx] = useState(-1);

  useEffect(() => {
    let idx = -1;
    let timeoutId;

    function typeNext() {
      idx++;
      setTypedIdx(idx);
      if (idx < letters.length - 1) {
        // Random delay between 100ms to 200ms
        const delay = Math.floor(Math.random() * 100) + 100;
        timeoutId = setTimeout(typeNext, delay);
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
    <section className="bg-bg min-h-screen flex flex-col items-center text-center px-6"
      style={{ alignItems: "center", justifyContent: "flex-start" }}
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
    </section>
  );
}
