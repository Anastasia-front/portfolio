"use client";

import { useTheme } from "next-themes";

import {
  Environment,
  Image,
  MeshReflectorMaterial,
  useCursor,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import getUuid from "uuid-by-string";
import { useLocation, useRoute } from "wouter";

const GOLDEN_RATIO = 1.61803398875;

const position = (id: number) => `/images/hero/${id}.jpg`;
const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: position(1) },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: position(2) },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: position(3) },
  // Left
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: position(4),
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: position(5),
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: position(6),
  },
  // Right
  {
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: position(7),
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: position(8),
  },
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: position(9),
  },
];

interface FrameProps {
  position: [number, number, number];
  rotation: [number, number, number];
  url: string;
}
interface FramesProps {
  images: FrameProps[];
  q?: THREE.Quaternion;
  p?: THREE.Vector3;
}

interface FrameProps {
  url: string;
  c?: THREE.Color;
}

const Gallery = () => {
  const { theme } = useTheme();

  const firstColor = theme === "dark" ? "#171410" : "#fbfcf8";
  const secondColor = theme === "dark" ? "#171410" : "#3f3f3f";
  const thirdColor = theme === "dark" ? "#3f3f3f" : "#5a5a5a";

  return (
    <Canvas
      dpr={[2, 2]}
      camera={{ fov: 70, position: [0, 2, 15] }}
      style={{ height: "55vh" }}
    >
      <color attach="background" args={[firstColor]} />
      <fog attach="fog" args={[thirdColor, 0, 15]} />
      <group position={[0, -0.3, 0]}>
        <Frames images={images as FrameProps[]} />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[350, 250]}
            resolution={2048}
            mixBlur={1.7}
            mixStrength={100}
            roughness={1}
            depthScale={1}
            minDepthThreshold={0.7}
            maxDepthThreshold={1.7}
            color={secondColor}
            metalness={0.3}
            mirror={0}
          />
        </mesh>
      </group>
      <Environment preset="city" />
    </Canvas>
  );
};

function Frames({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}: FramesProps) {
  const ref = useRef<THREE.Group | null>(null);
  const clicked = useRef<THREE.Object3D | null>(null);
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (ref.current) {
      clicked.current = ref.current.getObjectByName(params?.id);
      if (clicked.current) {
        clicked.current?.parent.updateWorldMatrix(true, true);
        clicked.current.parent.localToWorld(p.set(0, GOLDEN_RATIO / 2, 1.25));
        clicked.current.parent.getWorldQuaternion(q);
      } else {
        p.set(0, 0, 5.5);
        q.identity();
      }
    }
  });

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });
  return (
    <group
      ref={ref}
      onClick={(e) => (
        e.stopPropagation(),
        setLocation(
          clicked.current === e.object ? "/" : "/item/" + e.object.name
        )
      )}
      onPointerMissed={() => setLocation("/")}
    >
      {images.map((props) => (
        <Frame key={props.url} {...props} />
      ))}
    </group>
  );
}

function Frame({ url, c = new THREE.Color(), ...props }: FrameProps) {
  const image = useRef<THREE.Mesh<
    THREE.PlaneGeometry,
    THREE.ShaderMaterial
  > | null>(null);
  const frame = useRef<THREE.Mesh<
    THREE.BoxGeometry,
    THREE.MeshBasicMaterial
  > | null>(null);

  const [, params] = useRoute("/item/:id");
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const name = getUuid(url);
  const isActive = params?.id === name;

  useCursor(hovered);

  useFrame((state, dt) => {
    if (image.current && frame.current) {
      image.current.material.zoom =
        2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
      easing.damp3(
        image.current.scale,
        [
          0.85 * (!isActive && hovered ? 0.85 : 1),
          0.9 * (!isActive && hovered ? 0.905 : 1),
          1,
        ],
        0.1,
        dt
      );
      easing.dampC(
        frame.current.material.color,
        hovered ? "orange" : "white",
        0.1,
        dt
      );
    }
  });

  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDEN_RATIO, 0.05]}
        position={[0, GOLDEN_RATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial
            toneMapped={false}
            fog={false}
            transparent={true}
          />
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.7]}
          url={url}
        />
      </mesh>
    </group>
  );
}

export default Gallery;
