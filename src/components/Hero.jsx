import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import { RocketModel } from "./rocket-engine";
import { LaptopModel } from "./laptop-model";
import '@fortawesome/fontawesome-free/css/all.min.css';

const RotatingCombo = () => {
  const groupRef = useRef();

  // Rotate group around Y axis
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Laptop Model */}
      <LaptopModel 
        scale={0.007} 
        position={[0, -2.25, -3.1]} 
      />
      
      {/* Rocket Model */}
      <RocketModel
        scale={9}
        position={[0, -5.75, 0]} // Adjusted to be closer to laptop
        rotation={[0, 1.5*Math.PI, 0]} // Facing opposite direction
      />
    </group>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        background: "black",
        overflow: "hidden",
      }}
    >
      {/* 3D Canvas */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
        }}
      >
        <Canvas
          camera={{
            position: [0, 2, 10], // Better camera position
            fov: 50,
          }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          
          {/* Center the rotating group */}
          <group position={[0, 0, 0]}>
            <RotatingCombo />
          </group>

          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={true}
          />
          <Environment preset="night" />
        </Canvas>
      </div>

      {/* Text Content */}
      <div
        className="container h-100 d-flex align-items-center justify-content-end"
        style={{ position: "relative", zIndex: 2 }}
      >
        <motion.div
          className="hero-content text-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ color: "white", maxWidth: "50%" }}
        >
          <h1 className="hero-title">Hello, I'm Vignesh Kumar.</h1>
          <h2 className="hero-subtitle">
            <Typewriter
              options={{
                strings: [
                  "Aspiring Developer",
                  "Aerospace Engineer",
                  "Tech Enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                cursor: "█",
              }}
            />
          </h2>
          
          {/* Socials Section */}
          <motion.div 
            className="socials mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="social-icons d-flex justify-content-end gap-3">
              <a 
                href="https://github.com/VigneshKumar-Tech-Design" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/vignesh-kumar-r1/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://wa.link/6374368724" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a 
                href="mailto:vigneshkumarofficial81@gmail.com"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;