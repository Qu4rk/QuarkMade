import assert from "node:assert/strict";
import test from "node:test";

import { HERO_ROTATING_TEXTS } from "./hero-rotating-content.ts";

test("keeps the mobile rotating headline sequence aligned with desktop", () => {
  assert.deepEqual(HERO_ROTATING_TEXTS, [
    "digital flagships",
    "interactive worlds",
    "luxury experiences",
    "bespoke websites",
    "digital sanctuaries",
  ]);
});
