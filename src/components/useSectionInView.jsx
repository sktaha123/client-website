// hooks/useSectionInView.js
import { useEffect, useState } from "react";

export function useSectionInView(id, threshold = 0.5) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // We use isIntersecting to toggle the global UI state
        setInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [id, threshold]);

  return inView;
}