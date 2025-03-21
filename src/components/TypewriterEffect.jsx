import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
  return (
    <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
      Let's{" "}
      <span style={{ color: "#4FB777", textShadow: "0px 0px 20px #000000" }}>
        <Typewriter
          words={["Learn", "Innovate", "Transform"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
};

export default TypewriterEffect;
