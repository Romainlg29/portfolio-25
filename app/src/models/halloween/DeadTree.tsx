/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 .\dead_tree.glb -Tt
*/

import { a, useSpring } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Tree_Green_03_Circle: THREE.Mesh;
  };
  materials: {
    Tree_Green_03: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/halloween/dead_tree-transformed.glb"
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

  return (
    <a.group {...props} scale={animation.scale} dispose={null}>
      <mesh
        geometry={nodes.Tree_Green_03_Circle.geometry}
        material={materials.Tree_Green_03}
        castShadow
        receiveShadow
      />
    </a.group>
  );
}

useGLTF.preload("/halloween/dead_tree-transformed.glb");

export default Model;
