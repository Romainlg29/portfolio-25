import { Detailed } from "@react-three/drei";
import { EiffelHigh } from "./eiffel-high";
import { EiffelMedium } from "./eiffel-medium";
import { EiffelLow } from "./eiffel-low";
import { RigidBody } from "@react-three/rapier";

type EiffelProps = JSX.IntrinsicElements["group"];

const Eiffel = (props: EiffelProps) => {
  return (
    <RigidBody colliders="trimesh" type="fixed">
      <Detailed distances={[0, 50, 100]}>
        <EiffelHigh {...props} />
        <EiffelMedium {...props} />
        <EiffelLow {...props} />
      </Detailed>
    </RigidBody>
  );
};

export default Eiffel;
