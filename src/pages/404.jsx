import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./404.css";

const NotFound = () => {
  return (
    <>
      {/* <Header /> */}
      <main className="contenedor">
        {/* Mensaje de error */}
        <h1 className="titulo">404</h1>
        <p className="mensaje">¡Ups! La página que buscas no existe.</p>

        {/* Botón para regresar a Inicio */}
        <Link to="/" className="boton">Volver a Inicio</Link>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default NotFound;