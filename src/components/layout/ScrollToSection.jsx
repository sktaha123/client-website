import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    // A small timeout ensures the route change is processed and DOM is Ready
    const timer = setTimeout(() => {
      if (window.lenis) {
        window.lenis.scrollTo(0, { lock: true }); // Use lock to force scroll
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default ScrollToSection;

