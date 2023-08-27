import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const ground = new THREE.Mesh(
  new THREE.BoxGeometry(5, 0.5, 10),
  new THREE.MeshStandardMaterial({ color: 0x00ff00 })
);
ground.position.y = -2;
scene.add(ground);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.z = 3;
scene.add(light);

camera.position.z = 5;

export function MainAnimate3D() {
  requestAnimationFrame(MainAnimate3D);
  renderer.render(scene, camera);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}