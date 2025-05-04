import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <Link to={`/item/${product.id}`} style={{ color: '#3e2723' }}>Ver más</Link>
    </div>
  );
};

export default Item
