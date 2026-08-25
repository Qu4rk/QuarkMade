import assert from "node:assert/strict";
import test from "node:test";

import { getPreloaderTimeline } from "./preloader-timeline.ts";

test("keeps the preloader mounted until a late-mounted curtain has fully opened", () => {
  const timeline = getPreloaderTimeline(1900);

  assert.equal(timeline.revealAt, 3700);
  assert.equal(timeline.removeAt, 4450);
});
