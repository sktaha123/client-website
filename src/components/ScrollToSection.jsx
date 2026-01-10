import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAVBAR_OFFSET = 96;

function ScrollToSection({ targetRef }) {
  const location = useLocation();

  useEffect(() => {
    if (!targetRef?.current) return;

    // Allow layout + motion to finish
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const top =
          targetRef.current.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: top - NAVBAR_OFFSET,
          behavior: "smooth",
        });
      });
    });
  }, [location.pathname]); // 🔑 KEY FIX

  return null;
}

export default ScrollToSection;
