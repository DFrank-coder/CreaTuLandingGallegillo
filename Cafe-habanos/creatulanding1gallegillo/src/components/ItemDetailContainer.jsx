import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { mockData } from "../data/products";
import { useCart } from "../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, removeFromCart } = useCart();

  useEffect(() => {
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData.find(item => item.id === parseInt(id)));
      }, 1000);
    });

    fetchProduct.then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={addToCart}>Agregar</button>
      <button onClick={removeFromCart} style={{ marginLeft: '1rem' }}>Quitar</button>
    </div>
  );
};

export default ItemDetailContainer