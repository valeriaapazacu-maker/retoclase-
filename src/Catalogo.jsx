function Catalogo({ onAgregar }) {
    return (
        <div>
            <h2>Catálogo TiendaAndina</h2>
            <p>Poncho de alpaca - S/ 120</p>
            <button onClick={onAgregar}>Agregar</button>
        </div>
    );
}

export default Catalogo;