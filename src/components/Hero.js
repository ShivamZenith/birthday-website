import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <Particles
        className="particles"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            color: { value: "#ff4e84" },
            shape: { type: "circle" },
            opacity: { value: 0.8 },
            size: { value: 6 },
            move: { enable: true, speed: 2, direction: "top", outModes: { default: "out" } },
          },
        }}
      />
      <h1>
        <Typewriter
          words={["Happy Birthday My Love ❤️", "You Make My World Brighter ✨"]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h1>
      <p>“In your smile I see something more beautiful than stars.”</p>
      <audio autoPlay loop src="/music.mp3" />
    </section>
  );
}

export default Hero;
