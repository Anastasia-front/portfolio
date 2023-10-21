"use client";

import { useRef, useState } from "react";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

interface MacProps {
  position?: number[];
}

export function Mac(props: MacProps) {
  const gltf = useGLTF("./images/3d/mac/scene.gltf");
  const ref = useRef<THREE.Object3D>(null);
  const [direction, setDirection] = useState<number>(1);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.001 * direction;
      ref.current.rotation.y += 0.001 * direction;
      ref.current.rotation.z += 0.001 * direction;
    }
  });

  setTimeout(() => {
    setDirection(-direction);
  }, 3000);

  return <primitive {...props} object={gltf.scene} ref={ref} />;
}
