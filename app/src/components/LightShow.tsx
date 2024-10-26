import { useFrame } from "@react-three/fiber";
import { FC, useEffect, useMemo, useRef } from "react";
import { PointLight } from "three";
import { ColorScheme, useColorScheme } from "../hooks/useColorScheme";

type LightShowProps = {
  isGlittering?: boolean;
};

const LightShow: FC<LightShowProps> = ({ isGlittering = false }) => {
  const ref = useRef<PointLight[]>([]);

  const scheme = useColorScheme();

  const lights = useMemo(() => {
    return Array.from({ length: 20 }).map((_, index) => {
      const position: [number, number, number] = [
        Math.random() * 1.5,
        Math.random() * 2.5,
        Math.random() * 1.5,
      ];

      return (
        <pointLight
          key={index}
          position={position}
          intensity={0.1}
          color={scheme === ColorScheme.Dark ? "#ff8040" : "#2060ff"}
          ref={(light) => {
            if (light) {
              ref.current.push(light);
            }
          }}
        />
      );
    });
  }, [scheme]);

  useEffect(() => {
    if (!isGlittering) {
      ref.current.forEach((light) => {
        light.intensity = 0;
      });
    }
  }, [isGlittering]);

  useEffect(() => {
    const interval = setInterval(() => {
      ref.current.forEach((light) => {
        const x = Math.random();
        const y = Math.random() * 2.5 + 0.25;
        const z = Math.random();

        light.position.set(x, y, z);
      });
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useFrame(({ clock }) => {
    if (!isGlittering) {
      return;
    }

    ref.current.forEach((light) => {
      light.intensity = Math.abs(
        Math.sin(clock.getElapsedTime() * 4 * Math.random())
      );
    });
  });

  return lights;
};

export default LightShow;
