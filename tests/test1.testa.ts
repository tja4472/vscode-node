import { startVitest } from "vitest/node";
import { test } from "vitest";

// this becomes recursive.
test("update snapshot", async () => {
  const vitest = await startVitest("test");

  await vitest?.close();
});
