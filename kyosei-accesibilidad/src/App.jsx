import React from "react";
import Header from "./components/Header.jsx"; // Importa el Header
import Home from "./pages/Home.jsx";

import "./styles/header.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;