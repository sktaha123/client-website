import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Navbar from "./pages/navbar.jsx";
import { Footer } from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Industries from "./pages/Industries.jsx";
import Contact from "./pages/Contact.jsx";
import Process from "./pages/Process.jsx";
import { Whychooseus } from "./pages/Whychooseus.jsx";
import { Hero } from "./pages/Hero.jsx";
import ScrollToSection from "./components/ScrollToSection.jsx";

function App() {
  const contentRef = useRef(null);

  return (
    <BrowserRouter>
      <ScrollToSection targetRef={contentRef} />

      <Navbar />
      <Hero />

      {/* 👇 THIS is the anchor */}
      <main ref={contentRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/process" element={<Process />} />
          <Route path="/whychooseus" element={<Whychooseus />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
