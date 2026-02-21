import { useEffect, lazy, Suspense, useState } from "react";
import Lenis from "lenis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout.jsx";
import Preloader from "./components/layout/Preloader.jsx";
import { imagesToPreload, preloadImages } from "./utils/preloadAssets";

// Lazy loading pages for route-based code splitting
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Industries = lazy(() => import("./pages/Industries.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Process = lazy(() => import("./pages/Process.jsx"));
const Digital = lazy(() => import("./pages/Digital.jsx"));
const Whychooseus = lazy(() =>
  import("./pages/Whychooseus.jsx").then((module) => ({
    default: module.Whychooseus,
  }))
);
const Software = lazy(() => import("./pages/Software.jsx"));
const CV = lazy(() => import("./pages/CV.jsx"));
const AdminRoute = lazy(() =>
  import("./routes/AdminRoute.jsx").then((module) => ({
    default: module.AdminRoute,
  }))
);
const ApplicationsTable = lazy(() =>
  import("./components/admin/ApplicationsTable.jsx")
);

function App() {
  const [loading, setLoading] = useState(true);

  // Lenis setup (unchanged)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.7,
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // ⭐ NEW: Image preloading logic (only change)
  useEffect(() => {
    const loadAssets = async () => {
      try {
        await preloadImages(imagesToPreload);
      } catch (error) {
        console.error("Image preload failed:", error);
      } finally {
        // small delay for smooth UX
        setTimeout(() => setLoading(false), 500);
      }
    };

    loadAssets();
  }, []);

  // Lock scroll when loading (unchanged)
  useEffect(() => {
    if (loading) {
      if (window.lenis) window.lenis.stop();
      document.body.classList.add("overflow-hidden");
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        if (window.lenis) window.lenis.start();
        document.body.classList.remove("overflow-hidden");
      }, 500);
    }
  }, [loading]);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      <Suspense
        fallback={
          <div className="h-screen w-full bg-biz-cream flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-biz-bronze border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/process" element={<Process />} />
            <Route path="/whychooseus" element={<Whychooseus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/software" element={<Software />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/digital" element={<Digital />} />
            <Route
              path="/admin/applications"
              element={
                <AdminRoute>
                  <ApplicationsTable />
                </AdminRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;