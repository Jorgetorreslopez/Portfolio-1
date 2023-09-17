import React, { useRef } from "react";
import { useRouter } from "next/router";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Box,
  Html,
  Group,
} from "@react-three/drei";
import styles from "./ThreeD.module.css";

function ThreeDScene() {
  const cameraRef = useRef();
  const groupRef = useRef();

  const router = useRouter();
  const handleJoinJourneyClick = () => {
    router.push("/MainPage/MainPage");
  };

  return (
    <Canvas>
      <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 5]} />
      <OrbitControls camera={cameraRef.current} enableZoom={false} />

      <group ref={groupRef}>
        <Box args={[1, 1, 1]} position={[0, 0, 0]} />
        <Html position={[0, 0, 0]}>
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
        </Html>
      </group>
    </Canvas>
  );
}

export default ThreeDScene;
