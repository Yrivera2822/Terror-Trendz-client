import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Hats from "./Pages/Hats";
import Tshirts from "./Pages/Tshirts";
import NotFound from "./Pages/NotFound";
import Jewelry from "./Pages/Jewelry";
import "./App.css";
import React from "react";
import Homepage from "./Pages/Homepage";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Navbar />
      <Toaster />
      

      <h1>Welcome to Terror Trendz!</h1>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hats" element={<Hats />} />
        <Route path="/tshirts" element={<Tshirts />} />
        <Route path="/about" element={<About />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>
      <Footer />

      </div>
     
    </div>
    
    
  );
}

export default App;
