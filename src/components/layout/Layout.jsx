import { Outlet, useLocation } from "react-router-dom";
import { useRef } from "react";

import Navbar from "./Navbar.jsx";
import { useSectionInView } from "../../hooks/useSectionInView.jsx";
import { Footer } from "./Footer.jsx";
import ScrollToSection from "./ScrollToSection.jsx";

function Layout() {
  const contentRef = useRef(null);
  const location = useLocation();
  const isAlixActive = useSectionInView("alix", 0.6);
  const isHome = location.pathname === "/";

  return (
    <>
      <ScrollToSection targetRef={contentRef} />
      <Navbar isAlixActive={isAlixActive} />

      <main
        ref={contentRef}
        className={`${isHome ? "relative" : "pt-[96px] pb-4 min-h-screen bg-biz-cream relative"
          }`}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
