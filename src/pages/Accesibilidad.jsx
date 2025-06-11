import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./accesibilidad.css";

const Accesibilidad = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="accesibilidad">
      <main className="contenedor">
        {/* Título principal */}
        <h1 className="titulo">Accesibilidad</h1>

        <section className="contenido">
          {/* Sección izquierda con información */}
          <div className="texto">
            <h2>¿Qué es la Accesibilidad Digital?</h2>
            <p>
              La accesibilidad digital es el diseño y desarrollo de productos digitales que pueden ser utilizados por todas las personas, 
              independientemente de sus capacidades físicas, cognitivas o sensoriales. No se trata solo de cumplir con normativas, 
              sino de crear experiencias digitales verdaderamente inclusivas que permitan a cada usuario participar plenamente en la era digital.
            </p>

            <h2>Por Qué la Inclusión Digital es Fundamental</h2>
            <p>
              La accesibilidad digital representa uno de los derechos fundamentales del siglo XXI. Más de 1.300 millones de personas en el mundo 
              viven con algún tipo de discapacidad y merecen acceso equitativo a la información, educación, trabajo y entretenimiento digital.
            </p>

            <h2>Beneficios Universales</h2>
            <ul>
              <li>Mejora la experiencia de usuario para personas mayores</li>
              <li>Facilita la navegación en condiciones adversas (ruido, poca luz)</li>
              <li>Optimiza el rendimiento en dispositivos con conectividad limitada</li>
              <li>Aumenta la usabilidad para usuarios con diferentes niveles de experiencia tecnológica</li>
            </ul>
          </div>

          {/* Sección derecha con imagen */}
          <aside className="imagen">
            <img src="../../src/assets/Accesibilidad.png" alt="Persona en silla de ruedas frente a una escalera" />
          </aside>
        </section>
      </main>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Accesibilidad;