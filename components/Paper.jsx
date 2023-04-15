import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { Model } from "./Phone";
import { OrbitControls, SpotLight, useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";
import { useSpring, animated, config } from "@react-spring/three";

function Phone({ dive }) {
  const { position, rotation } = useSpring({
    rotation: dive ? [0, 1.6, 0] : [0, 1.1, -0.1],
    position: dive ? [-3, 0.9, -2] : [4, 1, -3],

    config: config.gentle,
  });

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
      <animated.group rotation={rotation} position={position}>
        <Model castShadow />
      </animated.group>
    </>
  );
}

const Paper = ({ dive }) => {
  return (
    <Canvas>
      <Phone dive={dive} />
    </Canvas>
  );
};

export default Paper;
