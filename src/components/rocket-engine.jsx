import React from "react";
import { useGLTF } from "@react-three/drei";

export function RocketModel(props) {
  const { scene } = useGLTF("/models/rocket.glb"); // place rocket.glb in /public/models
  return <primitive object={scene} {...props} />;
}
