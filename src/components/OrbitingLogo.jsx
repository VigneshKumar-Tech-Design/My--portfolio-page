import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const OrbitingLogo = ({ texture, radius, speed, offset }) => {
  const meshRef = useRef();
  const map = new THREE.TextureLoader().load(texture);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    meshRef.current.position.x = radius * Math.cos(t);
    meshRef.current.position.z = radius * Math.sin(t);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial map={map} />
    </mesh>
  );
};

export default OrbitingLogo;
