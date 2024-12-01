import * as THREE from "three";
import { useTexture } from "@react-three/drei";

type PavementProps = JSX.IntrinsicElements["mesh"] & {
  /**
   * The width of the pavement in meters.
   * @default 2
   */
  width?: number;

  /**
   * The length of the pavement in meters.
   * @default 2
   */
  length?: number;
};

const Pavement = ({ width = 2, length = 2, ...props }: PavementProps) => {
  const textures = useTexture({
    map: "/textures/pavement/cobblestone_color_diff_1k.jpg",
    normalMap: "/textures/pavement/cobblestone_color_nor_gl_1k.jpg",
    roughnessMap: "/textures/pavement/cobblestone_color_rough_1k.jpg",
    displacementMap: "/textures/pavement/cobblestone_color_disp_1k.jpg",
  });

  return (
    <mesh scale={1} {...props}>
      <planeGeometry args={[5, 5, 2, 2]} />
      <meshStandardMaterial {...textures} />
    </mesh>
  );
};

export default Pavement;
