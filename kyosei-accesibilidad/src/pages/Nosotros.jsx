import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./nosotros.css";

const Nosotros = () => {
  return (
    <>
      {/* <Header /> */}
      <main className="contenedor">
        {/* Título centrado arriba */}
        <h1 className="titulo">Nosotros</h1>

        <div className="contenido">
          {/* Imagen a la izquierda */}
          <aside className="imagen">
            <img src="/assets/MISIÓN.png" alt="Manos protegiendo figuras de papel representando diversidad e inclusión como nuestra misión" />
          </aside>

          {/* Texto a la derecha */}
          <section className="texto">
            <h2>Nuestra Misión</h2>
            <p className="parrafo">
              Construimos un mundo más accesible y justo a través de servicios especializados en accesibilidad.
              Comenzando por transformar la educación virtual mediante la capacitación docente y el testing de accesibilidad, 
              trabajamos para que cada persona, sin importar sus capacidades, pueda participar plenamente en la era digital.
            </p>
          </section>
        </div>

        {/* Visión */}
          <div className="contenido">
          {/* Imagen a la izquierda */}
          <aside className="imagen">
            <img src="../../public/assets/vision.jpg" alt="Grupos de personas leyendo una descripción en Braille" />
          </aside>

          {/* Texto a la derecha */}
          <section className="texto">
            <h2>Nuestra Visión</h2>
            <p className="parrafo">
             Ser catalizadoras del cambio hacia una sociedad verdaderamente inclusiva, donde la accesibilidad sea la norma, no la excepción. Aspiramos a expandir continuamente nuestros servicios para eliminar barreras  en todos los ámbitos de la vida, creando un ecosistema donde todas las personas puedan prosperar juntas
            </p>
          </section>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Nosotros;