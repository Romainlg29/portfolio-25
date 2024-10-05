import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$")({
  beforeLoad: async () => {
    throw redirect({ to: "/" });
  },
});
