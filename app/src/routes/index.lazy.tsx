import { ContactShadows, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { createLazyFileRoute } from "@tanstack/react-router";
import { ColorScheme, useColorScheme } from "../hooks/useColorScheme";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Eiffel from "../models/eiffel";

const Home = () => {
  const scheme = useColorScheme();
  const isMediumSize = useMediaQuery("(min-width: 768px)");

  return (
    <div className="relative w-full h-full flex">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 4, 4], fov: 35 }}>
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
          blur={2}
          color={scheme === ColorScheme.Dark ? "#fff" : "#000"}
        />

        <Environment preset="sunset" backgroundIntensity={3} />

        <Eiffel
          rotation-y={-Math.PI / 8}
          scale={0.8}
          position={isMediumSize ? [1.2, 0, 0.5] : [0, 0, 0.5]}
        />
      </Canvas>

      <div className="absolute top-0 left-0 w-full md:w-1/2 h-full flex items-end md:items-center justify-center px-4 py-8">
        <div className="text-left">
          <h1 className="text-4xl font-bold font-['Borel'] dark:text-gray-50">
            Hi, I'm Romain.
          </h1>
          <p className="text-2xl mt-2 font-['Ropa'] dark:text-gray-100">
            I'm a software engineer based in Brest, France.
          </p>

          <div className="mt-8 flex gap-2 items-center">
            <a
              href="https://linkedin.com/in/romainlg29/"
              target="_blank"
              className="px-2 py-1 bg-[#0a66c2] text-white font-semibold rounded-3xl hover:scale-105 active:scale-100 transition ease-in-out duration-200"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/Romainlg29"
              target="_blank"
              className="px-2 py-1 border border-[#333]  text-black dark:text-gray-200 font-semibold rounded-3xl hover:scale-105 active:scale-100 transition ease-in-out duration-200"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute("/")({
  component: Home,
});
