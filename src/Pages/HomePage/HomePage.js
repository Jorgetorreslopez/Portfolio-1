import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./HomePage.module.css";
import ThreeDScene from "../../components/ThreeDScene/ThreeDScene";
import Welcome from "../../components/WelcomeMessage/WelcomeMessage";

export default function HomePage() {
  const router = useRouter();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setAnimate(true);
    });

  
    router.events.on("routeChangeComplete", () => {
      setAnimate(false);
    });

    return () => {
      router.events.off("routeChangeStart", () => {});
      router.events.off("routeChangeComplete", () => {});
    };
  }, [router]);

  return (
    <div className={styles.page}>
      <ThreeDScene />
    </div>
  );
};


