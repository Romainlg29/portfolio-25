import { ContactShadows, Environment, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useSearch } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { isChristmas, isHalloween } from "../constants/timing";
import { ColorScheme, useColorScheme } from "../hooks/useColorScheme";

const Eiffel = lazy(() => import("../models/eiffel/Eiffel"));

const HalloweenSet = lazy(() => import("./HalloweenSet"));
const ChristmasSet = lazy(() => import("./ChristmasSet"));

const HomeScene = () => {
  const scheme = useColorScheme();
  const { event } = useSearch({ from: "/" });

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 4, 4], fov: 35 }}>
      <Preload all />

      <color
        attach="background"
        args={[scheme === ColorScheme.Dark ? "#000" : "#fff"]}
      />

      <ambientLight intensity={0.5 / 3} />

      <spotLight
        penumbra={1}
        position={[0, 0, 0]}
        intensity={0.5 * 2}
        castShadow
        shadow-bias={-0.0001}
        shadow-normalBias={0}
        shadow-mapSize={1024}
      />

      <ContactShadows
        scale={20}
        far={1}
        blur={0.8}
        resolution={256}
        color={scheme === ColorScheme.Dark ? "#fff" : "#000"}
      />

      <Environment preset="sunset" backgroundIntensity={3} />

      <Suspense fallback={null}>
        <Eiffel />

        <Suspense fallback={null}>
          {(isHalloween && !event) || event === "halloween" ? (
            <HalloweenSet />
          ) : null}
          {(isChristmas && !event) || event === "christmas" ? (
            <ChristmasSet />
          ) : null}
        </Suspense>
      </Suspense>
    </Canvas>
  );
};

export default HomeScene;
