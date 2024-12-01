import { ContactShadows } from "@react-three/drei";

type CharacterProps = JSX.IntrinsicElements["group"];

const Character = (props: CharacterProps) => {
  return (
    <group {...props}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.2, 1, 32]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>

      {/* <ContactShadows /> */}
    </group>
  );
};

export default Character;
