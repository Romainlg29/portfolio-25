import { a, useTrail } from "@react-spring/three";
import { useEffect, useMemo } from "react";
import { ColorScheme, useColorScheme } from "../hooks/useColorScheme";
import { useMediaQuery } from "../hooks/useMediaQuery";
import DeadTree from "../models/DeadTree";
import Ghost from "../models/Ghost";
import Pumpkin from "../models/Pumpkin";
import RoundedPumpkin from "../models/RoundedPumpkin";
import Scarecrow from "../models/Scarecrow";
import Skull from "../models/Skull";

const HalloweenSet = () => {
  const scheme = useColorScheme();
  const isMediumSize = useMediaQuery("(min-width: 768px)");

  const [trails] = useTrail(
    8,
    () => ({
      from: { scale: 0 },
      to: { scale: 1 },
    }),
    []
  );

  const elements = useMemo(
    () => [
      <Pumpkin
        scale={0.4}
        position={isMediumSize ? [1.6, 0.05, 0.7] : [0.4, 0.05, 0.7]}
      />,

      <Pumpkin
        scale={0.2}
        position={isMediumSize ? [1.54, 0.05, 0.78] : [0.36, 0.05, 0.78]}
        rotation-y={Math.PI / 4}
      />,

      <DeadTree
        scale={0.05}
        position={isMediumSize ? [2.2, 0.05, 0.6] : [0.7, 0.05, 0.6]}
        rotation-y={Math.PI / 4}
      />,

      <DeadTree
        scale={0.05}
        position={isMediumSize ? [0.1, 0.05, 0.2] : [-0.9, 0.05, 0.2]}
        rotation-y={-Math.PI / 8}
      />,

      <Scarecrow
        scale={0.05}
        position={isMediumSize ? [0.1, 0.05, 0.25] : [-0.9, 0.05, 0.25]}
      />,

      <RoundedPumpkin
        scale={0.01}
        position={isMediumSize ? [1.19, 1.32, 0.6] : [-0.01, 1.32, 0.6]}
      />,

      <Skull
        scale={0.025}
        position={isMediumSize ? [1.22, 1.32, 0.62] : [0.02, 1.32, 0.62]}
      />,

      <Ghost position={isMediumSize ? [1.3, 1.8, 0.7] : [0.1, 1.8, 0.2]} />,
    ],
    [isMediumSize]
  );

  const lights = useMemo(() => {
    if (scheme === ColorScheme.Light) {
      return null;
    }

    return (
      <>
        <pointLight
          position={isMediumSize ? [1.6, 0.15, 0.7] : [0.4, 0.15, 0.7]}
          intensity={0.2}
          color={"#ff4400"}
        />

        <pointLight
          position={isMediumSize ? [0.1, 0.1, 0.3] : [-0.9, 0.2, 0.5]}
          intensity={0.2}
          color={"#ff4400"}
        />
      </>
    );
  }, [scheme, isMediumSize]);

  // Play an ambient sound of owls
  useEffect(() => {
    const audio = new Audio("/halloween/owls.mp3");

    const interval = setInterval(() => {
      if (document.hidden) {
        return;
      }

      if (!navigator.userActivation.hasBeenActive) {
        return;
      }

      audio.play();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {trails.map(({ scale }, i) => (
        <a.group scale={scale} key={`halloween-${i}`}>
          {elements[i]}
        </a.group>
      ))}

      {lights}
    </>
  );
};

export default HalloweenSet;
