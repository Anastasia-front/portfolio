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

const position = (id) => `/images/hero/${id}.webp`;
const images = [
  // Front
  {
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    url: position(1),
    alt: "first image of 3d-gallery",
  },
  // Back
  {
    position: [-0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: position(2),
    alt: "second image of 3d-gallery",
  },
  {
    position: [0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: position(3),
    alt: "third image of 3d-gallery",
  },
  // Left
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: position(4),
    alt: "fourth image of 3d-gallery",
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: position(5),
    alt: "fifth image of 3d-gallery",
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: position(6),
    alt: "sixth image of 3d-gallery",
  },
  // Right
  {
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: position(7),
    alt: "seventh image of 3d-gallery",
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: position(8),
    alt: "eighth image of 3d-gallery",
  },
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: position(9),
    alt: "ninth image of 3d-gallery",
  },
];

const Gallery = () => {
  const { theme } = useTheme();

  const firstColor = theme === "dark" ? "#171410" : "#fbfcf8";
  const secondColor = theme === "dark" ? "#171410" : "#3f3f3f";
  const thirdColor = theme === "dark" ? "#3f3f3f" : "#5a5a5a";

  return (
    <Canvas
      dpr={[2, 2]}
      camera={{ fov: 70, position: [0, 2, -55] }}
      style={{ height: "55vh" }}
    >
      <color attach="background" args={[firstColor]} />
      <fog attach="fog" args={[thirdColor, 0, 15]} />
      <group position={[0, -0.3, 0]}>
        <Frames images={images} />
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
      <Environment preset="apartment" />
    </Canvas>
  );
};

function Frames({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDEN_RATIO / 2, 1.25));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
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

function Frame({ url, c = new THREE.Color(), ...props }) {
  const image = useRef();
  const frame = useRef();
  const [, params] = useRoute("/item/:id");
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const name = getUuid(url);
  const isActive = params?.id === name;
  useCursor(hovered);
  useFrame((state, dt) => {
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
          alt={image}
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
