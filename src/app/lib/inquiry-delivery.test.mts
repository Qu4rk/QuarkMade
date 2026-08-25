import assert from "node:assert/strict";
import test from "node:test";

import { submitInquiryPayload } from "./inquiry-delivery.ts";

const payload = { name: "QA", email: "qa@example.com" };

test("accepts only an explicit successful delivery response", async () => {
  const fetchImpl = async () =>
    new Response(JSON.stringify({ success: "true" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  await assert.doesNotReject(() =>
    submitInquiryPayload(payload, { fetchImpl, timeoutMs: 100 })
  );
});

test("rejects a logical failure even when the HTTP status is 2xx", async () => {
  const fetchImpl = async () =>
    new Response(JSON.stringify({ success: "false" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  await assert.rejects(
    submitInquiryPayload(payload, { fetchImpl, timeoutMs: 100 }),
    /not accepted/
  );
});

test("aborts a stalled delivery request", async () => {
  const fetchImpl: typeof fetch = (_input, init) =>
    new Promise<Response>((_resolve, reject) => {
      init?.signal?.addEventListener("abort", () => {
        reject(new DOMException("Timed out", "AbortError"));
      });
    });

  await assert.rejects(
    submitInquiryPayload(payload, { fetchImpl, timeoutMs: 10 }),
    (error: unknown) => error instanceof DOMException && error.name === "AbortError"
  );
});
