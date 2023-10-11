"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Vector3 } from "three";

import { MacBook } from ".";

export function MacBookCanvas() {
  const cameraPosition = new Vector3(-0.3, 1.3, 3.7);
  const targetPosition = new Vector3(0, 0, 0);

  return (
    <Canvas className="canvas" camera={{ position: cameraPosition }}>
      <ambientLight intensity={Math.PI / 0.3} />
      <spotLight
        position={[0, 0, 0]}
        angle={1}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <MacBook position={[0, -0.33, 0]} />
      <OrbitControls target={targetPosition} />
    </Canvas>
  );
}
