/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 .\eiffel_top.glb --transform
*/

import { a, useSpring } from "@react-spring/three";
import { FC, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { ColorScheme, useColorScheme } from "../../hooks/useColorScheme";

const EiffelTop: FC<GroupProps> = (props) => {
  const { nodes } = useGLTF("/eiffel/eiffel_top-transformed.glb");

  // Retrieve the user's color scheme
  const scheme = useColorScheme();

  // Material selection based on the color scheme
  const material = useMemo(() => {
    if (scheme === ColorScheme.Dark) {
      return <meshStandardMaterial color="#333333" roughness={0.3} />;
    }

    return <meshStandardMaterial color="#ffffff" roughness={0.3} />;
  }, [scheme]);

  const [animation] = useSpring(() => ({
    from: {
      scale: 0,
    },
    to: {
      scale: 1,
    },
    delay: 500,
  }));

  return (
    <a.group {...props} scale={animation.scale} dispose={null}>
      <mesh
        // @ts-expect-error expected
        geometry={nodes.top.geometry}
        position={[-0.283, 0.478, 0.56]}
        scale={[0.026, 0.005, 0.005]}
        castShadow
        receiveShadow
      >
        {material}
      </mesh>
    </a.group>
  );
};

useGLTF.preload("/eiffel/eiffel_top-transformed.glb");

export default EiffelTop;
