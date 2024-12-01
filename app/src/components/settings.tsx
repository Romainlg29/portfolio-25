import {
  SettingsIcon,
  Sparkle,
  SparklesIcon,
  Volume2Icon,
  VolumeXIcon,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { useContext, useMemo } from "react";
import { SettingsContext } from "@/contexts/SettingsContext";
import { ResponsiveAlertDialog } from "./ui/responsive-alert-dialog";

const Settings = () => {
  const { sound, setSound, glittering, setGlittering, reduced } =
    useContext(SettingsContext);

  const adaptiveGlittering = useMemo(() => {
    // If the user hasn't reduced motion enabled, we won't ask for confirmation
    // Or if the glittering is already enabled
    if (!reduced || glittering) {
      return (
        <Button
          // We cannot stack backdrop-blur on IOS..., so we'll just use the same color and increase the opacity
          className="w-full justify-start bg-foreground/20 text-foreground border border-foreground/30 hover:bg-foreground/30 active:bg-foreground/20"
          onClick={() => setGlittering((p) => !p)}
        >
          {glittering ? (
            <>
              <SparklesIcon className="w-8 h-8 text-gray-500 dark:text-white" />
              <p className="ml-2">Disable the sparkles</p>
            </>
          ) : (
            <>
              <Sparkle className="w-8 h-8 text-gray-500 dark:text-white" />
              <p className="ml-2">Enable the sparkles</p>
            </>
          )}
        </Button>
      );
    }

    return (
      <ResponsiveAlertDialog
        title="Warning"
        description="Enabling this feature may cause discomfort. Your system has reduced motion enabled. Are you sure you want to enable blinking/glittering?"
        trigger={
          <Button className="w-full justify-start bg-foreground/20 text-foreground border border-foreground/30 hover:bg-foreground/20 active:bg-foreground/20">
            {glittering ? (
              <>
                <SparklesIcon className="w-8 h-8 text-gray-500 dark:text-white" />
                <p className="ml-2">Disable the sparkles</p>
              </>
            ) : (
              <>
                <Sparkle className="w-8 h-8 text-gray-500 dark:text-white" />
                <p className="ml-2">Enable the sparkles</p>
              </>
            )}
          </Button>
        }
        confirm="Confirm"
        cancel="Cancel"
        onConfirm={() => setGlittering((p) => !p)}
      />
    );
  }, [glittering, reduced, setGlittering]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-foreground/10 backdrop-blur-md text-foreground border border-foreground/30 hover:bg-foreground/20 active:bg-foreground/10">
          <SettingsIcon />
          <span className="sr-only">Settings</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="bg-foreground/10 backdrop-blur-md text-foreground border border-foreground/30"
        collisionPadding={8}
      >
        <div className="flex flex-col gap-2 p-4">
          <Button
            className="w-full justify-start bg-foreground/20 text-foreground border border-foreground/30 hover:bg-foreground/30 active:bg-foreground/20"
            onClick={() => setSound((p) => !p)}
          >
            {sound ? (
              <>
                <Volume2Icon className="w-8 h-8 text-gray-500 dark:text-white" />
                <p className="ml-2">Turn off the volume</p>
              </>
            ) : (
              <>
                <VolumeXIcon className="w-8 h-8 text-gray-500 dark:text-white" />
                <p className="ml-2">Turn on the volume</p>
              </>
            )}
          </Button>

          {adaptiveGlittering}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Settings;
