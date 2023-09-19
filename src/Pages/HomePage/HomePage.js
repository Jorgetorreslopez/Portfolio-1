import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import ThreeDScene from "../../components/ThreeDScene/ThreeDScene";


export default function HomePage() {
  return (

      <div className={styles.page}>
        <ThreeDScene />
      </div>

  );
}
