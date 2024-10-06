/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 .\Ghost.glb -Tt
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    group830039088: THREE.Mesh;
    group108580628: THREE.Mesh;
  };
  materials: {
    mat23: THREE.MeshStandardMaterial;
    mat21: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/halloween/Ghost-transformed.glb"
  ) as GLTFResult;

  const ref = useRef<THREE.Group | null>(null);

  useFrame(({ clock }) => {
    if (!ref.current) {
      return;
    }

    ref.current.position.y =
      ((props.position ?? [0, 0, 0]) as [number, number, number])[1] +
      Math.sin(clock.getElapsedTime()) * 0.05;
  });

  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group830039088.geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group108580628.geometry}
        material={materials.mat21}
      />
    </group>
  );
}

useGLTF.preload("/Ghost-transformed.glb");

export default Model;
