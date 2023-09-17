import React, { useState, useEffect } from "react";
import styles from "./Spaceship.module.css";

const Spaceship = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.astronaut}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <img src="https://i.imgur.com/flDSazf.png" alt="Astronaut" />
    </div>
  );
};

export default Spaceship;
