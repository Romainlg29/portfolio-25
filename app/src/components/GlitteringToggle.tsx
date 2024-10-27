import { FC, useCallback, useContext, useState } from "react";
import { SettingsContext } from "../contexts/SettingsContext";
import { Sparkle, Sparkles } from "lucide-react";

const GlitteringToggle: FC = () => {
  const { glittering, setGlittering, reduced } = useContext(SettingsContext);

  const [confirmed, setConfirmed] = useState<boolean>(false);

  const onClick = useCallback(() => {
    if (reduced && !confirmed && !glittering) {
      // ask for confirmation
      setConfirmed(true);
      return;
    }

    setGlittering((prev) => !prev);
  }, [glittering, confirmed, reduced, setGlittering, setConfirmed]);

  const onConfirm = useCallback(() => {
    // reset the confirmation state
    setConfirmed(false);

    // toggle the glittering
    setGlittering((prev) => !prev);
  }, [setGlittering]);

  return (
    <>
      <button onClick={onClick}>
        {glittering ? (
          <Sparkles className="w-8 h-8 text-gray-500 dark:text-white" />
        ) : (
          <Sparkle className="w-8 h-8 text-gray-500 dark:text-white" />
        )}
      </button>

      <dialog open={confirmed} className="fixed inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 min-w-96 bg-white border border-gray-300 dark:bg-gray-950 dark:border-gray-800 p-4 rounded-2xl shadow-lg">
          <p className="text-lg font-semibold dark:text-gray-100">
            Warning: Blinking/Glittering may cause discomfort
          </p>
          <p className="text-md dark:text-gray-100">
            Your system has reduced motion enabled. Are you sure you want to
            enable blinking/glittering?
          </p>
          <div className="flex gap-2 mt-4">
            <button
              onClick={onConfirm}
              className="flex-1 px-4 py-2 border border-gray-400  dark:border-[#333]  text-black dark:text-gray-200 font-semibold rounded-lg"
            >
              Yes
            </button>
            <button
              onClick={() => setConfirmed(false)}
              className="flex-1 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg"
            >
              No
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default GlitteringToggle;
