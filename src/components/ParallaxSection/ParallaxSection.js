import React, { useState, useEffect } from "react";
import styles from "./ParallaxSection.module.css";

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.parallaxSection}>
      <div className={styles.parallaxLayer1}>
        {/* Content for the first layer */}
      </div>
      <div className={styles.parallaxLayer2}>
        {/* Content for the second layer */}
      </div>
    </div>
  );
};

export default ParallaxSection;
