"use client";

import { useRef } from "react";

import { useGLTF } from "@react-three/drei";

interface MacBookProps {
  position?: number[];
}

export function MacBook(props: MacBookProps) {
  const gltf = useGLTF("./images/3d/macBook/scene.gltf");
  const ref = useRef();
  return <primitive {...props} object={gltf.scene} ref={ref} />;
}
