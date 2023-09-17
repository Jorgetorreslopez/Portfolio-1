import React, { useRef } from "react";
import gsap from "gsap";
import styles from "./Welcome.module.css";
import { useRouter } from "next/router";

const Welcome = () => {
  const router = useRouter();
  const handleJoinJourneyClick = () => {
    router.push("/MainPage/MainPage");
  };

  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.welcomeText}>
        HEY, ARE YOU TRAVELING TOO?
        <br />
        <div id="button-container">
          <button
            className={styles.btn}
            type="button"
            onClick={handleJoinJourneyClick}
          >
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
    </div>
  );
};

export default Welcome;
