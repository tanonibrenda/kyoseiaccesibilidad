import "./contacto.css";

const Contacto = () => {
    return (
        <div className="contact-container">
            <h2>Contáctanos</h2>
            <form action="https://formsubmit.co/brendayohenatanoni@gmail.com" method="POST">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" placeholder="Tu correo" required />
                </div>

                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje" required />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contacto;