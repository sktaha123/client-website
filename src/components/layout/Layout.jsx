import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import ScrollToSection from "./ScrollToSection.jsx";

function Layout() {
  const { pathname } = useLocation();
  const isDigital = pathname === "/digital";

  return (
    <>
      <ScrollToSection />
      {!isDigital && <Navbar />}

      <main className={isDigital ? "" : "pt-[64px]"}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
