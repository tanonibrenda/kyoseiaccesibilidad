import React from "react";
import "./compraCursos.css";

const CompraCursos = () => {
  return (
    <div className="compra-container">
      <h1>Compra de Cursos</h1>
      
      <div className="payment-options">
        {/* PayPal */}
        <div className="payment-method">
          <form action="https://www.paypal.com/ncp/payment/7SYYCQJ38BCZE" method="post" target="_blank">
            <button type="submit" className="paypal-button">Comprar con PayPal</button>
          </form>
          <img src="../../public/assets/paypal-svgrepo-com.svg" alt="Logo de PayPal" className="logo-img" />
          <span>Pago seguro con PayPal</span>
        </div>

        {/* Mercado Pago */}
        <div className="payment-method">
          <form action="https://www.mercadopago.com.ar" method="post" target="_blank">
            <button type="submit" className="mercadopago-button">Comprar con Mercado Pago</button>
          </form>
          <img src="../../public/assets/icons8-mercado-pago.svg" alt="Logo de Mercado Pago" className="logo-img" />
          <span>Pago seguro con Mercado Pago</span>
        </div>
      </div>
    </div>
  );
};

export default CompraCursos;