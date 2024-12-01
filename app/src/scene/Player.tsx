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
          camLowLimit={0}
          camUpLimit={Math.PI / 3}
          camMaxDis={-20}
          maxVelLimit={4}
          camInitDir={{ x: 0, y: (-2 * Math.PI) / 4 }}
        >
          <Character />
        </Ecctrl>
      </KeyboardControls>
    </group>
  );
};

export default Player;
