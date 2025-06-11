import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Logo */}
          <Col xs={12} md={4} className="text-center text-md-start">
            <img src="../src/assets/logosimple1.png" alt="Kyosei Accesibilidad - Logotipo" className="logo-footer" />
          </Col>

          {/* Navegación */}
          <Col xs={12} md={4} className="text-center">
            <nav>
              <ul className="footer-nav">
                <li><a href="/" aria-label="Ir a Inicio">Inicio</a></li>
                <li><a href="/nosotros" aria-label="Conocer más sobre Nosotros">Nosotros</a></li>
                <li><a href="/accesibilidad" aria-label="Información sobre Accesibilidad">Accesibilidad</a></li>
                <li><a href="/servicios" aria-label="Descubre nuestros Servicios">Servicios</a></li>
                <li><a href="/contacto" aria-label="Contáctanos">Contacto</a></li>
              </ul>
            </nav>
          </Col>

          {/* Redes sociales */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <div className="social-icons">
              <a href="mailto:contacto@kyosei.com" aria-label="Enviar correo"><i className="bi bi-envelope"></i></a>
              <a href="https://linkedin.com" aria-label="Ir a LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="https://x.com" aria-label="Ir a X"><i className="bi bi-twitter-x"></i></a>
              <a href="https://instagram.com" aria-label="Ir a Instagram"><i className="bi bi-instagram"></i></a>
              <a href="https://facebook.com" aria-label="Ir a Facebook"><i className="bi bi-facebook"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;