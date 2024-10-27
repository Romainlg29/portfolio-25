import { Fragment, useContext, useEffect, useMemo, useState } from "react";
import { ColorScheme, useColorScheme } from "../hooks/useColorScheme";
import { useMediaQuery } from "../hooks/useMediaQuery";
import DeadTree from "../models/halloween/DeadTree";
import Ghost from "../models/halloween/Ghost";
import Pumpkin from "../models/halloween/Pumpkin";
import RoundedPumpkin from "../models/halloween/RoundedPumpkin";
import Scarecrow from "../models/halloween/Scarecrow";
import Skull from "../models/halloween/Skull";
import { SettingsContext } from "../contexts/SettingsContext";

const HalloweenSet = () => {
  const scheme = useColorScheme();
  const isMediumSize = useMediaQuery("(min-width: 768px)");

  const [items, setItems] = useState<JSX.Element[]>([]);

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (items.length === elements.length) {
        clearInterval(interval);
        return;
      }

      setItems((items) => [...items, elements[items.length]]);
    }, 250);

    return () => clearInterval(interval);
  }, [elements, items]);

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

  const { sound } = useContext(SettingsContext);

  // Play an ambient sound of owls
  useEffect(() => {
    const audio = new Audio("/halloween/owls.mp3");

    const interval = setInterval(() => {
      if (!sound) {
        return;
      }

      if (document.hidden) {
        return;
      }

      if (!navigator.userActivation.hasBeenActive) {
        return;
      }

      audio.play();
    }, 10000);

    return () => clearInterval(interval);
  }, [sound]);

  return (
    <>
      {items.map((i, k) => (
        <Fragment key={k}>{i}</Fragment>
      ))}

      {lights}
    </>
  );
};

export default HalloweenSet;
