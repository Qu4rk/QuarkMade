export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
export const SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "").replace(/\/$/, "");

/**
 * Normalizes an asset path by prefixing the base path (e.g. for GitHub Pages).
 * Safe against double-prefixing.
 */
export function assetPath(path: string): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:") ||
    path.startsWith("//")
  ) {
    return path;
  }
  if (BASE_PATH && (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`))) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}
