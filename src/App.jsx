import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import "../src/components/Global/Global.css";
import Header from "./components/Header/Header";
import ScrollToTopButton from "./components/ScrollTopBtn";
import Services from "./pages/Services/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/AboutUs/About";
import Projects from "./pages/Projects/Projects";
import ContactUs from "./pages/ContactUs/ContactUs";
import Loader from "./components/loader";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    setLoading(true); 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer); 
  }, [location.pathname]); 

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <ScrollToTop />
          <ScrollToTopButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </>
      )}
    </main>
  );
};

export default App;
