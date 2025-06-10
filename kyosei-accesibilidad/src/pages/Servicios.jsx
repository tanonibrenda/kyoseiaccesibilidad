import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./servicios.css";

const Servicios = () => {
  return (
    <>
     
      <main className="contenedor">
        {/* Título principal */}
        <h1 className="titulo" color="black">Servicios</h1>

        {/* <h2 id="cursos">Cursos</h2> */}
        {/* Sección de cursos */}
        <section className="curso">
          <h2>Taller Moodle Accesible</h2>
          <img src="../../public/assets/moodle_original_logo_icon_146420.png" alt="logo Moodle" />
          <p>
            Taller teórico práctico orientado a docentes que imparten clases en la plataforma Moodle. 
            Aprenderás herramientas esenciales para garantizar la accesibilidad digital en educación.
          </p>
          <ul>
            <li>Introducción a la accesibilidad</li>
            <li>Tipos de fuentes e importancia semántica</li>
            <li>Selección de colores</li>
            <li>Textos alternativos y elementos multimedia</li>
            <li>Cómo ayudar a un alumno con discapacidad a usar la plataforma</li>
          </ul>
          <p><strong>Primera Comisión: Agosto 2025</strong></p>

          <div className="botones">
            <Link to="/comprar" className="boton">Comprar Curso</Link>
            <Link to="/info-curso" className="boton">Más Información</Link>
          </div>
        </section>

        {/* Sección de Testing de Accesibilidad */}
        <section className="testing">
          <h2>Testing de Accesibilidad</h2>
          <p>
            Nuestro servicio de testing identifica obstáculos para garantizar que tu plataforma sea inclusiva, intuitiva y eficiente.
            Cumple con normativas, mejora la experiencia del usuario y expande tu mercado.
          </p>
          <Link to="/info-testing" className="boton">Más Información</Link>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Servicios;