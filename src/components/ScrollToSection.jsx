// src/components/ScrollToSection.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToSection({ targetRef }) {
  const location = useLocation();

  useEffect(() => {
    // HOME PAGE → scroll to very top (Navbar)
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // OTHER PAGES → scroll to routed content (below Hero)
    if (targetRef?.current) {
      const top =
        targetRef.current.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  }, [location.pathname, targetRef]);

  return null;
}
