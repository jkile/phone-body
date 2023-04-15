import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { Model } from "./Phone";
import { OrbitControls, SpotLight, useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

function Phone(props) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={0.6}
        color={"white"}
        scale={3}
        rotation={[0, 2, 0]}
        position={[-1, 0, 5]}
      />
      {/* <OrbitControls /> */}
      <Model rotation={[0, 1.1, -0.1]} position={[1, 1, -3]} castShadow />
    </>
  );
}

const Paper = () => {
  return (
    <Canvas>
      <Phone />
    </Canvas>
  );
};

export default Paper;
