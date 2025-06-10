import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros.jsx";  
import Footer from "./components/Footer";
import Accesibilidad from "./pages/Accesibilidad.jsx";
import "./styles/header.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Página principal */}
        <Route path="/nosotros" element={<Nosotros />} />  {/* Página Nosotros */}
        <Route path="/accesibilidad" element={<Accesibilidad />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;