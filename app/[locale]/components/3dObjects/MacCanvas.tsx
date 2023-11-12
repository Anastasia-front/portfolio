"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Vector3 } from "three";

import { Mac } from "./Mac";

export function MacCanvas() {
  const cameraPosition = new Vector3(150, 0, -30);
  const targetPosition = new Vector3(0, 0, 0);

  return (
    <Canvas className="canvas" camera={{ position: cameraPosition }}>
      <ambientLight intensity={Math.PI / 0.7} />
      <spotLight
        position={[0, 0, 0]}
        angle={1}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <Mac position={[0, -30, 0]} />
      <OrbitControls target={targetPosition} />
    </Canvas>
  );
}
