import { Preload, Sky, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { lazy } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import Player from "./Player";
import { Map } from "../models/world/Map";
import { Perf } from "r3f-perf";

const Eiffel = lazy(() => import("../models/eiffel/eiffel"));

const World = () => {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <Preload all />

      {/** Lightning */}
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0.6}
        azimuth={0.25}
      />

      <ambientLight intensity={1} />

      <directionalLight
        // afternoon
        // position={[150, 50, -50]}
        // daylight
        position={[30, 70, 30]}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={120}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />

      <Physics timeStep={"vary"}>
        <RigidBody colliders="trimesh" type="fixed" friction={0.7}>
          <Map />
        </RigidBody>

        <Player position={[0, 0.2, 0]} />
      </Physics>

      <Perf />
    </Canvas>
  );
};

export default World;
