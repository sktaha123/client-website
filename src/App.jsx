import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";


import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Industries from "./pages/Industries.jsx";
import Contact from "./pages/Contact.jsx";
import Process from "./pages/Process.jsx";
import { Whychooseus } from "./pages/Whychooseus.jsx";
import Software from "./pages/Software.jsx";
import CV from "./pages/CV.jsx";
import { AdminRoute } from "./routes/AdminRoute";
import ApplicationsTable from "./components/ApplicationsTable.jsx";


function App() {
  return (
    <BrowserRouter>
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
          <Route path="/upload-cv" element={<CV />} />
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
    </BrowserRouter>
  );
}

export default App;
