import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$")({
  beforeLoad: async ({ location }) => {
    throw redirect({
      to: "/",
      search: { from: location.pathname },
    });
  },
});
