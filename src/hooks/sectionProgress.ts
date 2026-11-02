import { useEffect, useSyncExternalStore, type RefObject } from 'react';

/**
 * Tracks how much of each section the visitor has actually watched (0–1),
 * so the "Continue Exploring" progress bars reflect real viewing, not fake numbers.
 */
const progress: Record<string, number> = {};
const listeners = new Set<() => void>();
let snapshot = { ...progress };

function set(id: string, value: number) {
  if ((progress[id] ?? 0) >= value) return;
  progress[id] = value;
  snapshot = { ...progress };
  listeners.forEach((l) => l());
}

export function useWatchProgress() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => snapshot,
    () => snapshot,
  );
}

export function useTrackProgress(id: string, ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          const ratio = Math.round(entry.intersectionRatio * 5) / 5;
          set(id, Math.max(0.1, ratio));
        }
      },
      { threshold: [0.1, 0.25, 0.5, 0.75, 1.0] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [id, ref]);
}
