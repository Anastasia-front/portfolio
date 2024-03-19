"use client";

import { useRef, useState } from "react";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

interface Props {
  position?: number[];
}

export function Mac(props: Props) {
  const gltf = useGLTF("./images/3d/mac/scene.gltf");
  const macRef = useRef<THREE.Object3D>(null);
  const [direction, setDirection] = useState<number>(1);

  useFrame(() => {
    if (macRef.current) {
      macRef.current.rotation.y += 0.003 * direction;
    }
  });

  setTimeout(() => {
    setDirection(-direction);
  }, 3000);

  return <primitive {...props} object={gltf.scene} ref={macRef} />;
}
