import { useEffect } from "react";

interface ClickOutsideOptions {
  triggerOnEscape?: boolean;
}

export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: (event: MouseEvent | KeyboardEvent) => void,
  options: ClickOutsideOptions = { triggerOnEscape: true }
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const el = ref.current;
      if (el && !el.contains(event.target as Node)) {
        handler(event);
      }
    }

    const handleKey = (event: KeyboardEvent) => {
      if (options.triggerOnEscape && event.key === "Escape") {
        handler(event);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [ref, handler, options.triggerOnEscape]);
}
