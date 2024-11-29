import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useEffect } from "react";

type PavementProps = JSX.IntrinsicElements["mesh"];

const Pavement = (props: PavementProps) => {
  const textures = useTexture({
    colorMap: "/textures/pavement/color_1k.jpg",
    normalMap: "/textures/pavement/normal_1k.png",
    roughnessMap: "/textures/pavement/roughness_1k.jpg",
    aoMap: "/textures/pavement/ao_1k.jpg",
    heightMap: "/textures/pavement/height_1k.png",
  });

  return (
    <mesh {...props}>
      <boxGeometry args={[20, 20, 0.1]} />
      <meshStandardMaterial {...textures} />
    </mesh>
  );
};

export default Pavement;
