"use client";

import { useRef } from "react";

import { useGLTF } from "@react-three/drei";

interface MacProps {
  position?: number[];
}

export function Mac(props: MacProps) {
  const gltf = useGLTF("./images/3d/mac/scene.gltf");
  const ref = useRef();
  return <primitive {...props} object={gltf.scene} ref={ref} />;
}
