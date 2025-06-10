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

        {/* valores */}
        <div className="contenido">
          {/* Imagen a la izquierda */}
          <aside className="imagen">
            <img src="../../public/assets/valores.png" alt="mujer en silla de ruedas con sus perros" />
          </aside>

          {/* Texto a la derecha */}
          <section className="texto">
            <h2>Nuestros Valores</h2>
            <h3>Kyosei, la búsqueda del bien común</h3>
            <p className="parrafo">
             Nuestra filosofía central. Significa trabajar en comunidad para el bien común. Cada decisión, cada servicio y cada acción está orientada hacia el bienestar colectivo. Creemos que la prosperidad mutua se alcanza cuando todas las personas pueden participar plenamente en la sociedad.
            </p>
          </section>
        </div>

{/* inclusion universal */}

<div className="contenido">
          {/* Imagen a la izquierda */}
          <aside className="imagen">
            <img src="../../public/assets/INCLUSIÓN UNIVERSAL.png" alt="manos de un anciano" />
          </aside>

          {/* Texto a la derecha */}
          <section className="texto">
            <h3>Inclusión Universal</h3>
            
            <p className="parrafo">
             La accesibilidad es un derecho, no un privilegio. Trabajamos para que cada experiencia digital sea accesible por diseño, eliminando barreras que impiden la participación plena de las personas. <br />
             Por eso trabajamos con amor, pasión y tenacidad resiliente; para generar un impacto social auténtico.
            </p>
          </section>
        </div>

        {/* Ximena */}

<div className="contenido">
          {/* Imagen a la izquierda */}
          <aside className="imagen">
            <img src="../../public/assets/Ximena Romero.png" alt="Foto de Ximena Romero" />
          </aside>

          {/* Texto a la derecha */}
          <section className="texto">
            <h3>Ximena Romero</h3>
            
            <p className="parrafo">
             Tester en Accesibilidad de 5 años de experiencia. Me encanta trabajar con personas que desafían las barreras y me inspira la creatividad y la innovación.
            </p>
            <a href="https://www.linkedin.com/in/ximenaromero81/" aria-label="Ir a LinkedIn" target="_blank"><img src="../../public/assets/linkedin_black_logo_icon_147114.svg" alt="" /></a>
            <a href="https://github.com/ximenaRomero" aria-label="Enviar Email" target="_blank"><img src="../../public/assets/github-mark-white.svg" alt=""/><img src="../../public/assets/envelope_mail_icon-icons.com_66119.svg" alt="" className="envelope"/></a>
          </section>
        </div>

        {/* Brenda */}
<div className="contenido">
          {/* Imagen a la izquierda */}
          <aside className="imagen">
            <img src="../../public/assets/Brenda Tanoni.png" alt="Foto de Brenda Tanoni" />
          </aside>

          {/* Texto a la derecha */}
          <section className="texto">
            <h3>Brenda Tanoni</h3>
            
            <p className="parrafo">
             Médica. Docente. Estudiante de programación. QA junior. Siempre buscando aprender y mejorar.
            </p>
            <a href="https://www.linkedin.com/in/brenda-yohena-tanoni-82430146/" aria-label="Ir a LinkedIn" target="_blank"><img src="../../public/assets/linkedin_black_logo_icon_147114.svg" alt="" /></a>
            <a href="mailto:brendayohenatanoni@gmail.com" aria-label="Enviar Email" target="_blank"><img src="../../public/assets/github-mark-white.svg" alt=""/><img src="../../public/assets/envelope_mail_icon-icons.com_66119.svg" alt="" className="envelope"/></a>
          </section>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Nosotros;