import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { Font, FontLoader } from "three/addons/loaders/FontLoader.js";

const container: HTMLElement | null =
  document.getElementById("scene-container");

if (!container) {
  throw new Error("Container not found");
}

const scene: THREE.Scene = new THREE.Scene();

const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
  75,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
if (container) {
  container.appendChild(renderer.domElement);
} else {
  throw new Error("Container not found");
}

const loader: FontLoader = new FontLoader();
loader.load(
  "../assets/fonts/Mooli_Regular.json",
  (font: Font) => {
    const textGeometry: TextGeometry = new TextGeometry("3D text here", {
      font: font,
      size: 0.5,
      height: 0.1,
    });
    console.log("Font loaded successfully:", font);
    const textMaterial: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });
    const textMesh: THREE.Mesh = new THREE.Mesh(textGeometry, textMaterial);
    scene.add(textMesh);
  },
  (progressEvent) => {
    console.log(
      "Font loading progress:",
      (progressEvent.loaded / progressEvent.total) * 100 + "%"
    );
  },
  (error) => {
    console.error("Error loading font:", error);
  }
);

const light: THREE.AmbientLight = new THREE.AmbientLight(0xffffff);
scene.add(light);

// Create animation (if needed)

// Main animation loop
function animate() {
  requestAnimationFrame(animate);
  // Your animation code here
  renderer.render(scene, camera);
}

animate();
