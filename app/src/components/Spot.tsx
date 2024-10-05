import { SpotLight } from "@react-three/drei";
import { FC, useEffect, useRef } from "react";
import { SpotLight as TSpotLight } from "three";

type SpotProps = {
  position: [number, number, number];
  target: [number, number, number];
  color?: string;
};

const Spot: FC<SpotProps> = ({ position, target, color = "#fff" }) => {
  const ref = useRef<TSpotLight | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.target.position.set(target[0], target[1], target[2]);
    }
  }, [target]);

  return (
    <SpotLight
      position={position}
      color={color}
      penumbra={1}
      distance={6}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={2}
      castShadow
      ref={ref}
    />
  );
};

export default Spot;
