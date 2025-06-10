import React from "react";
import Header from "./components/Header.jsx"; // Importa el Header
import "./styles/header.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header /> {/* Agrega el Header */}
      <main className="container">
        <h1>Bienvenido a Kyosei Accesibilidad</h1>
        <p>Explora nuestros servicios para mejorar la accesibilidad digital.</p>
      </main>
    </>
  );
}

export default App;