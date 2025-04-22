import CartWidget from './CartWidget'

const NavBar = ({cantidad}) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem', backgroundColor: '#6b3e2f', color: '#fff' }}>

      <h1>Café & Habanos</h1>

      <div>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        <li>Home</li>
        <li>Productos</li>
        <li>Contacto</li>
        </ul>
      </div>
      
      <CartWidget cantidad={cantidad}/>
    </nav>
  )
}

export default NavBar
