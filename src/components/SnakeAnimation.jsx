import { useEffect, useState, useCallback, useRef } from "react";
import { motion as Motion } from "framer-motion";

const CELL_SIZE = 20;
const SNAKE_SPEED = 100; // ms per move

export default function SnakeAnimation() {
  const [isActive, setIsActive] = useState(false);
  const [fruit, setFruit] = useState(null);
  const [snake, setSnake] = useState([]);
  const [direction, setDirection] = useState(null);
  const [phase, setPhase] = useState("idle"); // idle, fruit, hunting, eating, exiting
  const [timesEaten, setTimesEaten] = useState(0); // Track how many fruits eaten (snake grows)
  const timeoutRef = useRef(null);

  // Start animation on random interval
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Only schedule if not already active
    if (isActive) return;

    const scheduleNext = () => {
      // Clear any existing timeout first
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      const delay = Math.random() * 20000 + 15000; // 15-35 seconds
      timeoutRef.current = setTimeout(() => {
        setIsActive(true);
        setPhase("fruit");
      }, delay);
    };

    scheduleNext();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isActive]);

  // Reset and schedule next after animation completes
  const resetAnimation = useCallback(() => {
    setIsActive(false);
    setFruit(null);
    setSnake([]);
    setDirection(null);
    setPhase("idle");
  }, []);

  // Phase: Spawn fruit
  useEffect(() => {
    if (phase !== "fruit") return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Spawn fruit in middle area of screen
    const fruitX = Math.floor((Math.random() * 0.4 + 0.3) * viewportWidth);
    const fruitY = Math.floor((Math.random() * 0.4 + 0.3) * viewportHeight);

    setFruit({ x: fruitX, y: fruitY });

    // After fruit appears, spawn snake
    setTimeout(() => {
      const fromLeft = Math.random() > 0.5;
      const startY = fruitY; // Start at same Y level for simpler pathing

      // Base snake length is 3, plus 1 for each fruit eaten previously
      const snakeLength = 3 + timesEaten;
      const initialSnake = [];
      
      for (let i = 0; i < snakeLength; i++) {
        if (fromLeft) {
          initialSnake.push({ x: -CELL_SIZE * (3 + i), y: startY });
        } else {
          initialSnake.push({ x: viewportWidth + CELL_SIZE * (3 + i), y: startY });
        }
      }

      setSnake(initialSnake);
      setDirection(fromLeft ? "right" : "left");
      setPhase("hunting");
    }, 1000);
  }, [phase, timesEaten]);

  // Phase: Snake movement
  useEffect(() => {
    if (phase !== "hunting" && phase !== "exiting") return;
    if (snake.length === 0) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        if (prevSnake.length === 0) return prevSnake;

        const head = prevSnake[0];
        let newHead = { ...head };
        let newDirection = direction;

        if (phase === "hunting" && fruit) {
          // Simple pathfinding: move towards fruit
          const dx = fruit.x - head.x;
          const dy = fruit.y - head.y;

          // Prioritize horizontal movement, then vertical
          if (Math.abs(dx) > CELL_SIZE) {
            newDirection = dx > 0 ? "right" : "left";
          } else if (Math.abs(dy) > CELL_SIZE) {
            newDirection = dy > 0 ? "down" : "up";
          }

          // Check if reached fruit
          if (Math.abs(dx) <= CELL_SIZE && Math.abs(dy) <= CELL_SIZE) {
            setFruit(null);
            setTimesEaten(prev => prev + 1);
            setPhase("exiting");
            // Grow snake by not removing tail this move
            const grownSnake = [getNewHead(head, newDirection), ...prevSnake];
            setDirection(newDirection);
            return grownSnake;
          }
        } else if (phase === "exiting") {
          // Continue in exit direction
          const viewportWidth = window.innerWidth;
          
          // Check if snake has fully left screen
          const allOffScreen = prevSnake.every(
            (segment) => segment.x < -CELL_SIZE * 2 || segment.x > viewportWidth + CELL_SIZE * 2
          );

          if (allOffScreen) {
            resetAnimation();
            return [];
          }
        }

        newHead = getNewHead(head, newDirection);
        setDirection(newDirection);

        // Move: add new head, remove tail
        return [newHead, ...prevSnake.slice(0, -1)];
      });
    };

    const interval = setInterval(moveSnake, SNAKE_SPEED);
    return () => clearInterval(interval);
  }, [phase, fruit, direction, resetAnimation, snake.length]);

  const getNewHead = (head, dir) => {
    switch (dir) {
      case "right":
        return { x: head.x + CELL_SIZE, y: head.y };
      case "left":
        return { x: head.x - CELL_SIZE, y: head.y };
      case "up":
        return { x: head.x, y: head.y - CELL_SIZE };
      case "down":
        return { x: head.x, y: head.y + CELL_SIZE };
      default:
        return head;
    }
  };

  return (
    <>
      {/* Animation Layer */}
      {isActive && (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 5 }}>
          {/* Fruit */}
          {fruit && (
            <Motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute"
              style={{
                left: fruit.x - 10,
                top: fruit.y - 10,
                width: 20,
                height: 20,
                fontSize: 20,
              }}
            >
              🍎
            </Motion.div>
          )}

          {/* Snake */}
          {snake.map((segment, index) => (
            <Motion.div
              key={index}
              className="absolute rounded-sm"
              style={{
                left: segment.x,
                top: segment.y,
                width: CELL_SIZE - 2,
                height: CELL_SIZE - 2,
                backgroundColor:
                  index === 0
                    ? "rgba(80, 250, 123, 0.9)"
                    : `rgba(80, 250, 123, ${0.7 - index * 0.1})`,
                boxShadow: index === 0 ? "0 0 8px rgba(80, 250, 123, 0.55)" : "none",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.1 }}
            />
          ))}
        </div>
      )}
    </>
  );
}
