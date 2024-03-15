import { useCallback } from "react";

export function useScrollLock(): Record<string, () => void> {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
    document.body.style.scrollbarGutter = "stable";
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.width = "auto";
    document.body.style.scrollbarGutter = "auto";
  }, []);

  return { lockScroll, unlockScroll };
}
