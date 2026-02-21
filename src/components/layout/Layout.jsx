import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import ScrollToSection from "./ScrollToSection.jsx";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <ScrollToSection />
      <Navbar />

      <main
        className={`${isHome ? "relative" : "pt-[96px] pb-4 min-h-screen bg-biz-cream relative"}`}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
