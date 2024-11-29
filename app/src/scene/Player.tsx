import { KeyboardControls } from "@react-three/drei";
import { keyboard } from "../constants/keyboard";
import Ecctrl from "ecctrl";
import Character from "../models/characters/Character";

type PlayerProps = JSX.IntrinsicElements["group"];

const Player = (props: PlayerProps) => {
  return (
    <group {...props}>
      <KeyboardControls map={keyboard}>
        <Ecctrl
          camLowLimit={Math.PI / 12}
          camUpLimit={Math.PI / 3}
          camMinDis={-3}
          camMaxDis={-20}
          maxVelLimit={4}
          camInitDir={{ x: Math.PI / 8, y: Math.PI / 4 }}
          camCollision={false}
        >
          <Character />
        </Ecctrl>
      </KeyboardControls>
    </group>
  );
};

export default Player;
