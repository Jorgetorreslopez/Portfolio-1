// components/ThreeDScene.js
import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, PerspectiveCamera, Box } from '@react-three/drei';
import '../../app/globals.css'


function ThreeDScene() {
  const cameraRef = useRef();

  return (
    <Canvas>
      <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 5]} />
      <OrbitControls camera={cameraRef.current} enableZoom={false} />
      <Box args={[1, 1, 1]} position={[0, 0, 0]} />
    </Canvas>
  );
}

export default ThreeDScene;
