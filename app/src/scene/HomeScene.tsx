import { ContactShadows, Environment, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";
import { isChristmas, isHalloween } from "../constants/timing";
import { ColorScheme, useColorScheme } from "../hooks/useColorScheme";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Eiffel from "../models/Eiffel";
import { useSearch } from "@tanstack/react-router";

const HalloweenSet = lazy(() => import("./HalloweenSet"));
const ChristmasSet = lazy(() => import("./ChristmasSet"));

const HomeScene = () => {
  const scheme = useColorScheme();
  const isMediumSize = useMediaQuery("(min-width: 768px)");

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

      <pointLight position={[0, 0, 0]} intensity={0.5} />

      <ContactShadows
        scale={10}
        far={1}
        blur={0.8}
        color={scheme === ColorScheme.Dark ? "#fff" : "#000"}
      />

      <Environment preset="sunset" backgroundIntensity={3} />

      <Eiffel
        rotation-y={-Math.PI / 8}
        position={isMediumSize ? [1.2, 0, 0.5] : [0, 0, 0.5]}
      />

      <Suspense fallback={null}>
        {(isHalloween && !event) || event === "halloween" ? (
          <HalloweenSet />
        ) : null}
        {(isChristmas && !event) || event === "christmas" ? (
          <ChristmasSet />
        ) : null}
      </Suspense>
    </Canvas>
  );
};

export default HomeScene;
