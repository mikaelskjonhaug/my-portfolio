import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const generateParticles = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 10,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.15 + 0.1,
  }));
};

export default function FloatingParticles({ count = 50 }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(generateParticles(count));
  }, [count]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.id % 2 === 0 ? "rgba(0,191,166,0.25)" : "rgba(255,111,0,0.2)",
            boxShadow: particle.id % 2 === 0 
              ? "0 0 12px rgba(0,191,166,0.3)" 
              : "0 0 12px rgba(255,111,0,0.25)",
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 15, -15, 10, 0],
            opacity: [particle.opacity, particle.opacity * 1.3, particle.opacity, particle.opacity * 0.8, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
