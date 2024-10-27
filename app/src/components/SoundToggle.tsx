import { FC, useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";
import { Volume2, VolumeX } from "lucide-react";

const SoundToggle: FC = () => {
  const { sound, setSound } = useContext(SettingsContext);

  return (
    <button onClick={() => setSound((p) => !p)}>
      {sound ? (
        <Volume2 className="w-8 h-8 text-gray-500 dark:text-white" />
      ) : (
        <VolumeX className="w-8 h-8 text-gray-500 dark:text-white" />
      )}
    </button>
  );
};

export default SoundToggle;
