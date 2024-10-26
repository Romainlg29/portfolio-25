import { ThreeEvent } from "@react-three/fiber";
import { lazy, Suspense, useCallback, useState } from "react";
import LightShow from "../../components/LightShow";
import RotatingSpot from "../../components/RotatingSpot";
import { isShowTime } from "../../constants/timing";
import { ColorScheme, useColorScheme } from "../../hooks/useColorScheme";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const EiffelBase = lazy(() => import("./EiffelBase"));
const EiffelMiddle = lazy(() => import("./EiffelMiddle"));
const EiffelTop = lazy(() => import("./EiffelTop"));

const Eiffel = () => {
  // Retrieve the user's color scheme
  const scheme = useColorScheme();

  // Check the screen size
  const isMediumSize = useMediaQuery("(min-width: 768px)");

  // Reduce motion
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  // State to toggle the glittering
  const [isGlittering, setIsGlittering] = useState<boolean>(
    (isShowTime || scheme === ColorScheme.Dark) && !reduced
  );

  // Toggle the glittering
  const toggle = useCallback((e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setIsGlittering((prev) => !prev);
  }, []);

  return (
    <group
      rotation-y={-Math.PI / 8}
      position={isMediumSize ? [1.2, 0, 0.5] : [0, 0, 0.5]}
      scale={0.8}
    >
      <RotatingSpot speed={0.5} position={[0, 2.4, 0]} />
      <pointLight position={[0, 2.44, 0]} intensity={0.01} />

      <LightShow isGlittering={isGlittering} />

      <Suspense fallback={null}>
        <EiffelBase onClick={toggle} />
      </Suspense>

      <Suspense fallback={null}>
        <EiffelMiddle onClick={toggle} />
      </Suspense>

      <Suspense fallback={null}>
        <EiffelTop onClick={toggle} />
      </Suspense>
    </group>
  );
};

export default Eiffel;
