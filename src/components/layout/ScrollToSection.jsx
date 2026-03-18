import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToSection() {
  let location;

  try {
    location = useLocation();
  } catch {
    return null; // prevents crash if context not ready
  }

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

export default ScrollToSection;