import React from "react";
import { useGLTF } from "@react-three/drei";

export function LaptopModel(props) {
  const { scene } = useGLTF("/models/laptop-model.glb");
  return <primitive object={scene} {...props} />;
}
