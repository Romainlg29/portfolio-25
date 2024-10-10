import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { z } from "zod";

const HomeScene = lazy(() => import("../scene/HomeScene"));

const Home = () => {
  return (
    <div className="relative w-full h-full flex">
      <Suspense fallback={null}>
        <HomeScene />
      </Suspense>

      <div className="absolute top-0 left-0 w-full md:w-1/2 h-full flex items-end md:items-center justify-center px-4 py-8 pointer-events-none">
        <div className="text-left">
          <h1 className="text-4xl font-bold font-['Borel'] dark:text-gray-50 pointer-events-auto">
            Hi, I'm Romain.
          </h1>
          <p className="text-2xl mt-2 font-['Ropa'] dark:text-gray-100 pointer-events-auto">
            I'm a software engineer based in Brest, France.
          </p>

          <div className="mt-8 flex gap-2 items-center ">
            <a
              href="https://linkedin.com/in/romainlg29/"
              target="_blank"
              className="px-2 py-1 bg-[#0a66c2] text-white font-semibold rounded-3xl hover:scale-105 active:scale-100 transition ease-in-out duration-200 pointer-events-auto"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/Romainlg29"
              target="_blank"
              className="px-2 py-1 border border-[#333]  text-black dark:text-gray-200 font-semibold rounded-3xl hover:scale-105 active:scale-100 transition ease-in-out duration-200 pointer-events-auto"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const searchParams = z.object({
  event: z.enum(["halloween", "christmas"]).optional(),
});

export const Route = createFileRoute("/")({
  validateSearch: (s) => searchParams.parse(s),
  component: Home,
});
