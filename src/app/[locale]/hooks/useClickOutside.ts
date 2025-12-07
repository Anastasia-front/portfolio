import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  onClickOutside: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the click happened on an element (or its ancestor) that requests
      // to ignore outside clicks (e.g. the dropdown toggle), don't treat it
      // as an outside click. Use `closest` so SVG/text targets are handled.
      const target = event.target;
      if (target && target instanceof Element) {
        const ignored = target.closest('[data-ignore-outside="true"]');
        // Debug: log target and whether an ignored ancestor exists
        // (remove or guard these logs if noisy in production)
        if (ignored) {
          return;
        }
      }
      if (
        ref.current &&
        "contains" in ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};
