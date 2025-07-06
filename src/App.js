import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import MyResume from "./routes/Resume";
import ArticlesPage from "./routes/Articles";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<MyResume />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
