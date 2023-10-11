"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Vector3 } from "three";

import { Mac } from ".";

export function MacCanvas() {
  //   const cameraPosition = new Vector3(250, -30, 50);
  const cameraPosition = new Vector3(120, -30, 30);
  const targetPosition = new Vector3(0, 0, 0);

  return (
    <Canvas className="canvas" camera={{ position: cameraPosition }}>
      <ambientLight intensity={Math.PI / 1.3} />
      <spotLight
        position={[0, 0, 0]}
        angle={1}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <Mac position={[0, -70, 0]} />
      <OrbitControls target={targetPosition} />
    </Canvas>
  );
}
