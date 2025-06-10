import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./nosotros.css";

const Nosotros = () => {
  return (
    <>
      {/* <Header /> */}
      <main className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4 my-5">
        {/* Sección de texto */}

        <main class="contenedor">
          <h1 className="titulo">Nosotros</h1>
  
  <aside class="imagen">
    <img src="../../public/assets/MISIÓN.png" alt="Manos protegiendo figuras de papel representando diversidad e inclusión como nuestra misión"/>
  </aside>

  
  {/* <section class="className=text-lg-start text-center flex-fill">
    <h2>Nuestra Misión</h2>
    <p className="lead text-dark">Construimos un mundo más accesible y justo a través de servicios especializados en accesibilidad. 
    Comenzando por transformar la educación virtual mediante la capacitación docente y el testing de accesibilidad, 
    trabajamos para que cada persona, sin importar sus capacidades, pueda participar plenamente en la era digital.</p>
  </section> */}
</main>

        <section className="text-lg-start text-center flex-fill">
          <h2 className="display-4 fw-bold text-primary">Nuestra Misión</h2>
          <p className="lead text-dark">
            Construimos un mundo más accesible y justo a través de servicios especializados en accesibilidad. 
    Comenzando por transformar la educación virtual mediante la capacitación docente y el testing de accesibilidad, trabajamos para que cada persona, sin importar sus capacidades, pueda participar plenamente en la era digital.
          </p>
        </section>

       
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Nosotros;