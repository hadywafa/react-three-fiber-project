import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function ExperienceApp() {
  const boxRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    // console.log("tick");
    if (boxRef.current) {
      boxRef.current.rotation.y += delta;
    }
  });
  return (
    <>
      <mesh position-y={-1} rotation-x={-Math.PI / 2} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
      <mesh ref={boxRef}>
        <boxGeometry />
        <meshBasicMaterial color="cyan" />
      </mesh>
      <mesh position-x={4}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="mediumpurple" wireframe />
      </mesh>
    </>
  );
}
