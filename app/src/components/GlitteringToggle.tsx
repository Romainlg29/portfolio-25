import { FC, useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";
import { Sparkle, Sparkles } from "lucide-react";

const GlitteringToggle: FC = () => {
  const { glittering, setGlittering } = useContext(SettingsContext);

  return (
    <button onClick={() => setGlittering((p) => !p)}>
      {glittering ? (
        <Sparkles className="w-8 h-8 dark:text-white" />
      ) : (
        <Sparkle className="w-8 h-8 dark:text-white" />
      )}
    </button>
  );
};

export default GlitteringToggle;
