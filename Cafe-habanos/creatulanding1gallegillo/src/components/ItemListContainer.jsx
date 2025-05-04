import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { mockData } from '../data/products';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = new Promise((resolve) => {
      setTimeout(() => {
        if (category) {
          resolve(mockData.filter(prod => prod.name.toLowerCase().includes(category)));
        } else {
          resolve(mockData);
        }
      }, 1500);
    });

    fetchData.then(data => setProducts(data));
  }, [category]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{category ? `Productos de ${category}` : 'Todos los productos'}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer
