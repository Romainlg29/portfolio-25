import { useNavigate, useSearch } from "@tanstack/react-router";
import { FC, useEffect, useState } from "react";
import { isHalloween } from "../constants/timing";
import { a, useSpring } from "@react-spring/web";

const Outdated: FC = () => {
  const { from, event } = useSearch({ from: "/" });
  const navigate = useNavigate();

  const [reversed, setReversed] = useState<boolean>(false);

  useEffect(() => {
    const to = setTimeout(async () => {
      setReversed(true);
    }, 5000);

    return () => clearTimeout(to);
  }, [setReversed]);

  const [ref] = useSpring(
    () => ({
      from: { y: 200, scale: 0.2 },
      to: { y: 0, scale: 1 },
      reverse: reversed,
      onResolve: () => {
        if (reversed) {
          navigate({ to: "/" });
        }
      },
    }),
    [reversed, navigate]
  );

  if (!from || !from.startsWith("/posts")) {
    return null;
  }

  return (
    <a.div
      className={`absolute bottom-2 right-2 w-auto p-2 ml-2 rounded-lg ${event === "halloween" || isHalloween ? "bg-orange-300" : "bg-blue-300"}`}
      style={ref}
    >
      This post is outdated, a new version will be available soon!
    </a.div>
  );
};

export default Outdated;
