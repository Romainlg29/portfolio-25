import { SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";
import { SpotLight as TSpotLight } from "three";

type SpotProps = {
  position: [number, number, number];
  color?: string;
  speed?: number;
  castShadow?: boolean;
};

const RotatingSpot: FC<SpotProps> = ({
  position,
  speed = 0.1,
  color = "#fff",
  castShadow = false,
}) => {
  const ref = useRef<TSpotLight | null>(null);

  useFrame(() => {
    if (ref.current) {
      // Synchronize the time across all instances
      const elapsedTime = performance.now() / 1000;

      const x = Math.cos(elapsedTime * speed) * Math.PI * 2;
      const z = Math.sin(elapsedTime * speed) * Math.PI * 2;

      ref.current.target.position.set(
        position[0] + x,
        position[1],
        position[2] + z
      );
    }
  });

  return (
    <SpotLight
      position={position}
      rotation={[0, 0, 0]}
      color={color}
      penumbra={0.5}
      distance={6}
      angle={Math.PI / 12}
      attenuation={4}
      anglePower={6}
      intensity={1}
      radiusTop={0.01}
      castShadow={castShadow}
      ref={ref}
    />
  );
};

export default RotatingSpot;
