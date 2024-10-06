/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 .\Pumpkin.glb -Tt
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useEffect } from "react";

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

  useEffect(() => {
    // materials.Material.metalness = 0;
    materials.Material.roughness = 0.6;
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Pumpkin.geometry}
        material={materials.Material}
        scale={100}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload("/Pumpkin-transformed.glb");

export default Model;
