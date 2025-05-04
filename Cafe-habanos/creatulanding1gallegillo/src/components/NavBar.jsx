import { Link } from 'react-router-dom';
import CarWidget from './CarWidget';
import { useCart } from '../context/CartContext';

const NavBar = () => {
  const { cartCount } = useCart();

  return (
    <nav style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', backgroundColor: '#3e2723', color: 'white' }}>
      <div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Café & Habanos</Link>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/category/cafe" style={{ color: 'white' }}>Café</Link>
        <Link to="/category/habanos" style={{ color: 'white' }}>Habanos</Link>
        <CarWidget count={cartCount} />
      </div>
    </nav>
  );
};

export default NavBar