import { a, useTrail } from "@react-spring/three";
import { useEffect, useMemo } from "react";
import { ColorScheme, useColorScheme } from "../hooks/useColorScheme";
import { useMediaQuery } from "../hooks/useMediaQuery";
import CandyCane from "../models/CandyCane";
import ChristmasPresents from "../models/ChristmasPresents";
import SquaredChristmasGifts from "../models/SquaredChristmasGifts";
import { Sparkles } from "@react-three/drei";
import Snowman from "../models/Snowman";

const ChristmasSet = () => {
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
      <CandyCane
        scale={0.002}
        position={isMediumSize ? [1.9, 0.05, 0.7] : [0.7, 0.05, 0.7]}
        rotation-y={-Math.PI / 4}
      />,
      <ChristmasPresents
        scale={0.125}
        position={isMediumSize ? [2.15, 0.05, 0.75] : [0.75, 0.05, 0.85]}
      />,
      <SquaredChristmasGifts
        scale={0.1}
        position={isMediumSize ? [1.85, 0.05, 0.76] : [0.9, 0.05, 1]}
        rotation-y={Math.PI / 4}
      />,
      <Snowman
        scale={isMediumSize ? 0.1 : 0.075}
        rotation-y={-Math.PI / 8}
        position={isMediumSize ? [1, 0, 1] : [-0.15, 0, 0.8]}
      />,
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

  // Play an ambient sound
  useEffect(() => {
    const audio = new Audio("/christmas/ambiant.mp3");

    audio.loop = true;
    audio.volume = 0.5;

    let interval: number | undefined = undefined;

    const onVisibility = () => {
      // If the page is hidden, pause the audio
      if (document.hidden) {
        audio.pause();
        return;
      }

      // If the audio is paused and the user has interacted with the page, start
      if (audio.paused && navigator.userActivation.hasBeenActive) {
        audio.play();
        return;
      }

      // Check every seconds it the user has interacted with the page to start the audio
      if (!navigator.userActivation.hasBeenActive) {
        interval = setInterval(() => {
          if (document.hidden) {
            return;
          }

          if (!navigator.userActivation.hasBeenActive) {
            return;
          }

          audio.play();

          clearInterval(interval);
        }, 1000);
      }
    };

    document.addEventListener("visibilitychange", onVisibility);

    // Run once on start to trigger the interval
    onVisibility();

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);

      audio.pause();

      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <>
      {trails.map(({ scale }, i) => (
        <a.group scale={scale} key={`halloween-${i}`}>
          {elements[i]}
        </a.group>
      ))}

      <Sparkles
        count={200}
        color={"#fff"}
        scale={3}
        size={2}
        speed={0.3}
        position={[1, 0.5, 0.5]}
      />

      {lights}
    </>
  );
};

export default ChristmasSet;
