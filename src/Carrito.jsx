function Carrito({ cantidad, onQuitar }) {
    return (
        <div>
            <h2>Carrito</h2>
            <p>Productos en el carrito: {cantidad}</p>
            <button onClick={onQuitar}>Quitar</button>
        </div>
    );
}

export default Carrito;