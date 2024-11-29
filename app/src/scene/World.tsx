import {
  ContactShadows,
  Environment,
  OrbitControls,
  Preload,
  Sky,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import Player from "./Player";
import Pavement from "./pavement";

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
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={500}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />

      <Physics timeStep={"vary"}>
        <Suspense fallback={null}>
          <Eiffel scale={10} position-y={-0.45} />

          <RigidBody colliders="cuboid" type="fixed" friction={0.7}>
            <Pavement rotation-x={-Math.PI / 2} receiveShadow />
          </RigidBody>
        </Suspense>

        <RigidBody colliders="cuboid" type="fixed" friction={0.7}>
          <mesh
            position={[0, -0.1, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
          >
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial color="lightgreen" />
          </mesh>
        </RigidBody>

        <Player position={[0, 0.5, -5]} />
      </Physics>

      {/* <ContactShadows
        opacity={1}
        scale={10}
        blur={1}
        far={100}
        resolution={256}
        color="#000000"
      /> */}
    </Canvas>
  );
};

export default World;
