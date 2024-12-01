import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import Settings from "@/components/settings";

const HomeScene = lazy(() => import("../scene/HomeScene"));
const Outdated = lazy(() => import("../components/Outdated"));

const Home = () => {
  return (
    <div className="relative w-full h-full flex">
      <Suspense fallback={null}>
        <HomeScene />
      </Suspense>

      <div className="absolute top-0 left-0 w-full md:w-1/2 h-full flex items-end md:items-center justify-center px-4 py-8 pointer-events-none">
        <div className="text-left">
          <h1 className="text-4xl font-bold font-['Borel'] pointer-events-auto">
            Hi, I'm Romain.
          </h1>
          <p className="text-2xl mt-2 font-['Ropa'] pointer-events-auto">
            I'm a software engineer based in Brest, France.
          </p>

          <div className="mt-8 flex gap-2 items-center ">
            <a href="https://linkedin.com/in/romainlg29/" target="_blank">
              <Button className="px-2 py-1 bg-[#0a66c2] text-md text-white font-semibold hover:bg-[#0a66c2]/90 pointer-events-auto">
                Linkedin
              </Button>
            </a>

            <a href="https://github.com/Romainlg29" target="_blank">
              <Button
                variant={"outline"}
                className="px-2 py-1 text-md text-black dark:text-gray-200 font-semibold pointer-events-auto"
              >
                Linkedin
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-2 right-2 flex gap-2">
        <Settings />
      </div>

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
