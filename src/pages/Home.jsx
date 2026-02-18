import { lazy, Suspense } from "react";
import { Hero } from "../components/home/Hero.jsx";
import HomeContent from "../components/home/HomeContent.jsx";

// Lazy loading non-critical components below the fold
const Trust = lazy(() => import("../components/home/Trust.jsx").then(module => ({ default: module.Trust })));
const Philosophy = lazy(() => import("../components/home/Philosophy.jsx"));
const Alix = lazy(() => import("../components/home/Alix.jsx"));

function Home() {
  return (
    <>
      <Hero />
      <HomeContent />
      <Suspense fallback={<div className="min-h-[20vh] bg-biz-cream" />}>
        <Trust />
        <Philosophy />
        <Alix />
      </Suspense>
    </>
  );
}

export default Home;
