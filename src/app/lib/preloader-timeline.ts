export const PRELOADER_REVEAL_DELAY_MS = 1800;
export const PRELOADER_CURTAIN_DURATION_MS = 750;

/**
 * Keep every preloader phase relative to the component mount, which is also
 * when CSS starts its animation delays. This avoids mixing hydration timing
 * with page-navigation timing on slower loads.
 */
export function getPreloaderTimeline(mountedAt: number) {
  return {
    revealAt: mountedAt + PRELOADER_REVEAL_DELAY_MS,
    removeAt:
      mountedAt + PRELOADER_REVEAL_DELAY_MS + PRELOADER_CURTAIN_DURATION_MS,
  };
}
