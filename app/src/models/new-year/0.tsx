/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 .\0.glb -Tt
*/

import { ColorScheme, useColorScheme } from "@/hooks/useColorScheme";
import { a, useSpring } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useMemo, useState } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Text: THREE.Mesh;
  };
  materials: object;
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/new-year/0-transformed.glb") as GLTFResult;

  // Retrieve the user's color scheme
  const scheme = useColorScheme();

  // Material selection based on the color scheme
  // Match the eiffel tower base material
  const material = useMemo(() => {
    if (scheme === ColorScheme.Dark) {
      return <meshStandardMaterial color="#333333" roughness={0.3} />;
    }

    return <meshStandardMaterial color="#ffffff" roughness={0.3} />;
  }, [scheme]);

  // Fade in animation
  const [animation] = useSpring(
    () => ({
      from: {
        scale: 0,
      },
      to: {
        scale: props.scale ?? 1,
      },
    }),
    [props.scale]
  );

  // Hover animation
  const [hovered, setHovered] = useState<boolean>(false);

  const [positionAnimation] = useSpring(
    () => ({
      ["position-y"]:
        ((props.position as number[])?.[1] ??
          (props as { "position-y": number })["position-y"] ??
          0) + (hovered ? 0.1 : 0),
    }),
    [hovered]
  );

  return (
    <a.group
      {...props}
      scale={animation.scale}
      position-y={positionAnimation["position-y"]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      dispose={null}
    >
      <mesh
        geometry={nodes.Text.geometry}
        material={nodes.Text.material}
        rotation={[Math.PI / 2, 0, 0]}
      >
        {material}
      </mesh>
    </a.group>
  );
}

useGLTF.preload("/new-year/0-transformed.glb");
