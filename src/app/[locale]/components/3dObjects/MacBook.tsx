"use client";

import { useRef, useState } from "react";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

interface Props {
  position?: number[];
}

export function MacBook(props: Props) {
  const gltf = useGLTF("./images/3d/macBook/scene.gltf");
  const macBookRef = useRef<THREE.Object3D>(null);
  const [direction, setDirection] = useState<number>(-1);

  useFrame(() => {
    if (macBookRef.current) {
      macBookRef.current.rotation.y += 0.003 * direction;
    }
  });

  setTimeout(() => {
    setDirection(-direction);
  }, 3000);

  return <primitive {...props} object={gltf.scene} ref={macBookRef} />;
}
