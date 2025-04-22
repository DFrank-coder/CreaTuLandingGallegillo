import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [cantidad, setCantidad] = useState(0);

  const agregarAlCarrito = () => {
    setCantidad(prev => prev + 1);
  };

  const quitarDelCarrito = () => {
    if (cantidad > 0) {
      setCantidad(prev => prev - 1);
    }
  };

  return (
    <>
      <NavBar cantidad={cantidad} />
      <ItemListContainer greeting="Bienvenidos a un encanto de sabores." />
      <ItemListContainer greeting1="Éste es un proyecto para CoderHouse en el curso de React." />
      <ItemListContainer greeting2="Usamos props para éstas cuestiones." />

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button onClick={agregarAlCarrito} style={{ padding: '0.5rem 1rem', fontSize: '1rem', marginRight: '10px' }}>
          Agregar al Carrito
        </button>
        <button onClick={quitarDelCarrito} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
          Quitar del Carrito
        </button>
      </div>
    </>
  );
}

export default App;
