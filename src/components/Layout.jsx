import { Outlet, useLocation } from "react-router-dom";
import { useRef } from "react";

import Navbar from "../pages/navbar.jsx";
import { Footer } from "./Footer.jsx";
import ScrollToSection from "./ScrollToSection.jsx";

function Layout() {
  const contentRef = useRef(null);
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <ScrollToSection targetRef={contentRef} />
      <Navbar />

      <main
        ref={contentRef}
        className={
          isHome ? "" : "pt-[96px] pb-[200px] min-h-screen bg-biz-cream"
        }
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
