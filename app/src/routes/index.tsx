import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { z } from "zod";

const World = lazy(() => import("../scene/World"));
const Outdated = lazy(() => import("../components/Outdated"));

const Home = () => {
  return (
    <div className="relative w-full h-full flex">
      <Suspense fallback={null}>
        <World />
      </Suspense>

      <Suspense fallback={null}>
        <Outdated />
      </Suspense>
    </div>
  );
};

const searchParams = z.object({
  event: z.enum(["halloween", "christmas"]).optional(),
  from: z.string().optional(),
});

export const Route = createFileRoute("/")({
  validateSearch: (s) => searchParams.parse(s),
  component: Home,
});
