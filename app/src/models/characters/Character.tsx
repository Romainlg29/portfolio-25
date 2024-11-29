type CharacterProps = JSX.IntrinsicElements["mesh"];

const Character = (props: CharacterProps) => {
  return (
    <mesh {...props}>
      <cylinderGeometry args={[0.2, 0.2, 1, 32]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};

export default Character;
