import { lazy, Suspense } from "react";
import { Hero } from "./Hero.jsx";
import HomeContent from "./HomeContent.jsx";

// Lazy loading non-critical components below the fold
const Trust = lazy(() => import("./Trust.jsx").then(module => ({ default: module.Trust })));
const Philosophy = lazy(() => import("./Philosophy.jsx"));
const Alix = lazy(() => import("./Alix.jsx"));

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

