import { useEffect, lazy, Suspense, useState } from "react";
import Lenis from "lenis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./components/Layout.jsx";
import Preloader from "./components/Preloader.jsx";

// Lazy loading pages for route-based code splitting
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Industries = lazy(() => import("./pages/Industries.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Process = lazy(() => import("./pages/Process.jsx"));
const Whychooseus = lazy(() => import("./pages/Whychooseus.jsx").then(module => ({ default: module.Whychooseus })));
const Software = lazy(() => import("./pages/Software.jsx"));
const CV = lazy(() => import("./pages/CV.jsx"));
const AdminRoute = lazy(() => import("./routes/AdminRoute.jsx").then(module => ({ default: module.AdminRoute })));
const ApplicationsTable = lazy(() => import("./components/ApplicationsTable.jsx"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.7,
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    // Expose lenis globally immediately
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Preload critical chunks
    import("./pages/Home.jsx");

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  useEffect(() => {
    if (loading) {
      if (window.lenis) window.lenis.stop();
      document.body.classList.add("overflow-hidden");
      window.scrollTo(0, 0);
    } else {
      // Small delay to let the preloader exit animation start before unlocking Lenis
      setTimeout(() => {
        if (window.lenis) window.lenis.start();
        document.body.classList.remove("overflow-hidden");
      }, 500);
    }
  }, [loading]);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={!loading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <Suspense fallback={<div className="h-screen w-full bg-biz-cream flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-biz-bronze border-t-transparent rounded-full animate-spin"></div>
        </div>}>
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
      </motion.div>
    </BrowserRouter>
  );
}

export default App;

