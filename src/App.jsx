import { useState } from "react";
import Catalogo from "./Catalogo";
import Carrito from "./Carrito";

function App() {
    // 1. Estado total, inicializado en 0
    const [total, setTotal] = useState(0);

    // 2. Función agregar: suma 1
    const agregar = () => {
        setTotal((anterior) => anterior + 1);
    };

    // Reto: quitar, nunca baja de 0
    const quitar = () => {
        setTotal((anterior) => Math.max(0, anterior - 1));
    };

    return (
        <div>
            <h1>TiendaAndina</h1>
            {/* 3. Se envía la función al hijo por la prop onAgregar */}
            <Catalogo onAgregar={agregar} />
            {/* 4. Se envía el valor actualizado por la prop cantidad */}
            <Carrito cantidad={total} onQuitar={quitar} />
        </div>
    );
}

export default App;