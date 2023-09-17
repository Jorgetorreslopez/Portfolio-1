import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import ThreeDScene from "../../components/ThreeDScene/ThreeDScene";
import { CSSTransition } from "react-transition-group";

export default function HomePage() {

  return (
    <CSSTransition
      in={true} /* Whether to apply the enter animation */
      appear={true} /* Apply the enter animation initially on page load */
      timeout={500} /* Animation duration in milliseconds */
      classNames="page" /* CSS class names for the animations */
      unmountOnExit /* Remove the component from the DOM after exit */
    >
    <div className={styles.page}>
      <ThreeDScene />
    </div>
    </CSSTransition>
  );
};


