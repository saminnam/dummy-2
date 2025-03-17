import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <main>
      <Header />
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/contact"} element={<ContactUs />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
