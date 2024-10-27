import { createContext, FC, ReactNode, useMemo, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ColorScheme, useColorScheme } from "../hooks/useColorScheme";
import { isShowTime } from "../constants/timing";

type SettingsContext = {
  sound: boolean;
  glittering: boolean;

  setSound: (soundOrFn: boolean | ((prev: boolean) => boolean)) => void;
  setGlittering: (
    glitteringgOrFn: boolean | ((prev: boolean) => boolean)
  ) => void;
};

export const SettingsContext = createContext<SettingsContext>({
  glittering: false,
  sound: false,

  setSound: () => {},
  setGlittering: () => {},
});

type SettingsProviderProps = {
  children?: ReactNode | ReactNode[];
};

const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  // Reduce motion
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  // Retrieve the user's color scheme
  const scheme = useColorScheme();

  // Initialize the glittering state
  const [glittering, setGlittering] = useState<boolean>(
    (isShowTime || scheme === ColorScheme.Dark) && !reduced
  );

  // Initialize the sound state as true by default
  const [sound, setSound] = useState<boolean>(true);

  const value: SettingsContext = useMemo(
    () => ({
      glittering,
      sound,
      setSound,
      setGlittering,
    }),
    [glittering, sound]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
