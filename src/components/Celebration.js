import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import "./Celebration.css";

function Celebration() {
  const [hearts, setHearts] = useState([]);

  // Floating hearts generator
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substr(2, 9);
      setHearts((prev) => [
        ...prev,
        { id, left: Math.random() * 100, size: 20 + Math.random() * 30 }
      ]);
      // Remove hearts after animation
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 4000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleCelebrate = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="celebration">
      <h2>Let's Celebrate 🎉</h2>
      <button onClick={handleCelebrate}>Celebrate!</button>

      {/* Floating hearts */}
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          ❤️
        </span>
      ))}
    </section>
  );
}

export default Celebration;
