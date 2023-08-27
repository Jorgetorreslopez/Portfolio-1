import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeText}>
        HEY, ARE YOU TRAVELING TOO?
        <br />
        <button className={styles.btn} type="button">
          <strong className={styles.strong}>Join the Journey</strong>
          <div id={styles.containerStars}>
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
