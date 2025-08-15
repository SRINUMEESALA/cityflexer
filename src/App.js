import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ScrapPickup from "./pages/ScrapPickup";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/scrap-pickup" element={<ScrapPickup />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />

          {/* WhatsApp Float Button - Global */}
          <a
            href="https://wa.me/1234837960"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
