import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLenis from "./hooks/useLenis";

import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Industries from "./pages/Industries.jsx";
import Process from "./pages/Process.jsx";
import Whychooseus from "./pages/Whychooseus.jsx";
import Contact from "./pages/Contact.jsx";
import Digital from "./pages/Digital.jsx";
import CV from "./pages/CV.jsx";

function App() {
  // Initialise Lenis smooth scroll once for the entire app.
  // Proxied into GSAP ScrollTrigger inside the hook.
  useLenis();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="industries" element={<Industries />} />
          <Route path="process" element={<Process />} />
          <Route path="whychooseus" element={<Whychooseus />} />
          <Route path="contact" element={<Contact />} />
          <Route path="digital" element={<Digital />} />
          <Route path="cv" element={<CV />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;