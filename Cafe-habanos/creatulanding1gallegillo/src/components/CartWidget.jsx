import { ShoppingCart } from 'lucide-react'

function CartWidget({ cantidad }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>

        <span style={{ fontSize: '2rem', marginRight: '8px' }}>
            🛒
        </span>

        <span style={{ backgroundColor: 'white', color: 'black', borderRadius: '50%', padding: '0.2rem 0.6rem', fontSize: '1rem' }}>
          {cantidad}
        </span>
        
      </div>
    );
  }
  
  export default CartWidget
  
