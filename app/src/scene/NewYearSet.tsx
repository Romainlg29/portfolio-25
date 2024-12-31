import { Fragment, useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Zero from "@/models/new-year/0";
import Two from "@/models/new-year/2";
import Five from "@/models/new-year/5";

const NewYearSet = () => {
  const isMediumSize = useMediaQuery("(min-width: 768px)");

  const [items, setItems] = useState<JSX.Element[]>([]);

  const elements = useMemo(
    () => [
      <Two
        scale={0.8}
        rotation-y={-Math.PI / 8}
        position={isMediumSize ? [0.5, 0.05, 1] : [-0.7, 1, -0.5]}
      />,

      <Zero
        scale={0.8}
        rotation-y={-Math.PI / 8}
        position={isMediumSize ? [0.8, 0.05, 1.1] : [-0.4, 1, -0.5]}
      />,

      <Two
        scale={0.8}
        rotation-y={-Math.PI / 8}
        position={isMediumSize ? [1.1, 0.05, 1.2] : [0.4, 1, -0.5]}
      />,

      <Five
        scale={0.8}
        rotation-y={-Math.PI / 8}
        position={isMediumSize ? [1.4, 0.05, 1.325] : [0.7, 1, -0.5]}
      />,
    ],
    [isMediumSize]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (items.length === elements.length) {
        clearInterval(interval);
        return;
      }

      setItems((items) => [...items, elements[items.length]]);
    }, 250);

    return () => clearInterval(interval);
  }, [elements, items]);

  return items.map((i, k) => <Fragment key={k}>{i}</Fragment>);
};

export default NewYearSet;
