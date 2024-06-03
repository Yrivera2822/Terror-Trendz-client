import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Hats from "./Pages/Hats";
import NotFound from "./Pages/NotFound";
import Jewelry from "./Pages/Jewelry";
import "./App.css";
import React from "react";
import Homepage from "./Pages/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      
      <h1>Welcome to Terror Trendz! appjsx</h1>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hats" element={<Hats />} />
        <Route path="/about" element={<About />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
