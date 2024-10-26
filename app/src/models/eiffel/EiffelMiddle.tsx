/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 .\eiffel_middle.glb --transform
*/

import { a, useSpring } from "@react-spring/three";
import { FC, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { ColorScheme, useColorScheme } from "../../hooks/useColorScheme";

const EiffelMiddle: FC<GroupProps> = (props) => {
  const { nodes } = useGLTF("/eiffel/eiffel_middle-transformed.glb");

  // Retrieve the user's color scheme
  const scheme = useColorScheme();

  // Material selection based on the color scheme
  const material = useMemo(() => {
    if (scheme === ColorScheme.Dark) {
      return <meshStandardMaterial color="#333333" />;
    }

    return <meshStandardMaterial color="#ffffff" />;
  }, [scheme]);

  const [animation] = useSpring(() => ({
    from: {
      scale: 0,
    },
    to: {
      scale: 1,
    },
    delay: 250,
  }));

  return (
    <a.group {...props} scale={animation.scale} dispose={null}>
      <mesh
        // @ts-expect-error expected
        geometry={nodes.middle.geometry}
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

useGLTF.preload("/eiffel/eiffel_middle-transformed.glb");

export default EiffelMiddle;
