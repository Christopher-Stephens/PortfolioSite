import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,1000);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(100);
camera.position.setY(0);

renderer.render(scene,camera);
//starting point
const startingPoint = new THREE.BoxGeometry(10,1,10);
const material = new THREE.MeshStandardMaterial({color: 0xFF6347});
const shape = new THREE.Mesh(startingPoint,material);
shape.position.setY(-19.5);
shape.position.setZ(85);
scene.add(shape);
//ceiling
const top = new THREE.BoxGeometry(200,1,200);
const material2 = new THREE.MeshStandardMaterial({color:0xffffff});
const ceiling = new THREE.Mesh(top, material2);
ceiling.position.setY(30);
ceiling.position.setZ(0);
scene.add(ceiling);
//left wall
const left = new THREE.BoxGeometry(1,50,200);
const material3 = new THREE.MeshStandardMaterial({color:0xffffff});
const leftWall = new THREE.Mesh(left, material3);
leftWall.position.setY(5);
leftWall.position.setX(100);
leftWall.position.setZ(0);
scene.add(leftWall);
//right wall
const right = new THREE.BoxGeometry(1,50,200);
const material4 = new THREE.MeshStandardMaterial({color:0xffffff});
const rightWall = new THREE.Mesh(right, material4);
rightWall.position.setY(5);
rightWall.position.setX(-100);
rightWall.position.setZ(0);
scene.add(rightWall);
//back wall
const back = new THREE.BoxGeometry(200,50,1);
const material5 = new THREE.MeshStandardMaterial({color:0xffffff});
const backWall = new THREE.Mesh(back, material5);
backWall.position.setY(5);
backWall.position.setX(0);
backWall.position.setZ(-100);
scene.add(backWall);
//front wall
const front = new THREE.BoxGeometry(200,50,1);
const material6 = new THREE.MeshStandardMaterial({color:0xffffff});
const frontWall = new THREE.Mesh(front, material6);
frontWall.position.setY(5);
frontWall.position.setX(0);
frontWall.position.setZ(100);
scene.add(frontWall);

//light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//grid helper
const gridHelper = new THREE.GridHelper(200,50);
gridHelper.position.setY(0);
gridHelper.position.setZ(0);
scene.add(gridHelper);

const gridHelper2 = new THREE.GridHelper(200,50);
gridHelper2.position.setY(-20);
gridHelper2.position.setZ(0);
scene.add(gridHelper2);

const controls = new OrbitControls(camera, renderer.domElement);

function animate(){
  requestAnimationFrame(animate);
  /*shape.rotation.x += 0.01;
  shape.rotation.y += 0.005;
  shape.rotation.z += 0.01;*/
  //controls.update();
  renderer.render(scene,camera);
}

animate();