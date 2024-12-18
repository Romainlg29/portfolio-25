/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 .\Pumpkin.glb -Tt
*/

import { a, useSpring } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Pumpkin: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/halloween/Pumpkin-transformed.glb"
  ) as GLTFResult;

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

  useEffect(() => {
    // materials.Material.metalness = 0;
    materials.Material.roughness = 0.6;
  }, [materials]);

  return (
    <a.group {...props} scale={animation.scale} dispose={null}>
      <mesh
        geometry={nodes.Pumpkin.geometry}
        material={materials.Material}
        scale={100}
        castShadow
        receiveShadow
      />
    </a.group>
  );
}

useGLTF.preload("/halloween/Pumpkin-transformed.glb");

export default Model;
