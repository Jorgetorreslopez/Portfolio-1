import React, { useRef, useEffect } from "react";
import styles from "./HomePage.module.css";
import ThreeDScene from "../../components/ThreeDScene/ThreeDScene";
import Welcome from "../../components/WelcomeMessage/WelcomeMessage";

const HomePage = () => {
  return (
    <div>
      <ThreeDScene />
      <Welcome />
    </div>
  );
};

export default HomePage;
