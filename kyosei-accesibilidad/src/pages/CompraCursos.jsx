import { useState } from "react";
import "./compraCursos.css";

const CompraCursos = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        pais: "",
        curso: "",
        metodoPago: "paypal" // Método de pago predeterminado
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const getPaymentLink = () => {
        if (formData.metodoPago === "paypal") {
            return "https://www.paypal.com/donate?hosted_button_id=XXXXXXXX"; // Reemplaza con tu enlace de pago
        }
        return "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=XXXXXX"; // Reemplaza con tu enlace
    };

    return (
        <div className="compra-container">
            <h2>Compra tu curso</h2>
            <form>
                <label htmlFor="nombre">Nombre y Apellido</label>
                <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" onChange={handleChange} required />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="Tu correo" onChange={handleChange} required />

                <label htmlFor="telefono">Teléfono</label>
                <input type="tel" id="telefono" name="telefono" placeholder="Tu número" onChange={handleChange} required />

                <label htmlFor="pais">País</label>
                <input type="text" id="pais" name="pais" placeholder="Tu país" onChange={handleChange} required />

                <label htmlFor="curso">Selecciona tu curso</label>
                <select id="curso" name="curso" onChange={handleChange} required>
                    <option value="">Elige un curso...</option>
                    <option value="curso1">Taller Moodle Accesible</option>
                    {/* <option value="curso2">Curso 2 - Avanzado</option> */}
                </select>

                <label htmlFor="metodoPago">Método de pago</label>
                <select id="metodoPago" name="metodoPago" onChange={handleChange} required>
                    <option value="paypal">PayPal</option>
                    <option value="mercadopago">Mercado Pago</option>
                </select>

                <a href={getPaymentLink()} target="_blank" rel="noopener noreferrer">
                    <button type="button">Pagar con {formData.metodoPago === "paypal" ? "PayPal" : "Mercado Pago"}</button>
                </a>
            </form>
        </div>
    );
};

export default CompraCursos;