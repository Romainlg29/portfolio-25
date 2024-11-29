import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { Otter } from "../../models/otter/Otter";

const OtterRoute = () => {
  return (
    <div className="w-full h-full flex">
      <Suspense>
        <Canvas shadows>
          <OrbitControls />

          {/* <color attach="background" args={["#ffb835"]} /> */}
          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0.6}
            azimuth={0.25}
          />

          <ambientLight intensity={1} />

          <directionalLight
            position={[10, 10, 10]}
            intensity={2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          <Otter />
        </Canvas>
      </Suspense>
    </div>
  );
};

export const Route = createLazyFileRoute("/experiments/otter")({
  component: OtterRoute,
});
