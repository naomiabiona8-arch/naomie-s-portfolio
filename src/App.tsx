import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";

import Faq from "./pages/Faq";
import WhyWeb from "./pages/WhyWeb";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/whyweb" element={<WhyWeb />} />
          <Route path="/faq" element={<Faq />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
