export const INQUIRY_ENDPOINT =
  "https://formsubmit.co/ajax/liasides.elias@gmail.com";

type FetchLike = (
  input: string | URL | Request,
  init?: RequestInit
) => Promise<Response>;

interface DeliveryOptions {
  fetchImpl?: FetchLike;
  timeoutMs?: number;
}

function isAcceptedSubmissionResponse(value: unknown) {
  if (!value || typeof value !== "object") return false;
  const success = (value as { success?: unknown }).success;
  return success === true || success === "true";
}

/** Submit an inquiry only when the delivery service explicitly accepts it. */
export async function submitInquiryPayload(
  payload: Record<string, string>,
  {
    fetchImpl = fetch,
    timeoutMs = 12000,
  }: DeliveryOptions = {}
) {
  const controller = new AbortController();
  const deliveryTimeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetchImpl(INQUIRY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const responseBody: unknown = await response.json().catch(() => null);
    if (!response.ok || !isAcceptedSubmissionResponse(responseBody)) {
      throw new Error("Submission was not accepted");
    }
  } finally {
    clearTimeout(deliveryTimeout);
  }
}
