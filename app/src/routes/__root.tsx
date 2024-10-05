import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="w-dvw h-dvh bg-white dark:bg-slate-950 flex overflow-hidden">
      <Outlet />
    </div>
  ),
});
