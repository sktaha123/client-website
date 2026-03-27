import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
import ScrollToSection from "./ScrollToSection.jsx";

function Layout() {
  return (
    <>
      <ScrollToSection />
      <Navbar />

      <main className="pt-[64px]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;