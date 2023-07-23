import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src="../img/logo.png" className='imgMarolio' alt="Logo Marolio" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className="miBtn" to="/categoria/2"> Labiales </NavLink>
          </li>

          <li>
            <NavLink className="miBtn" to="/categoria/3"> Sombras </NavLink>
          </li>

          <li>
            <NavLink className="miBtn" to="/categoria/3"> Sombras </NavLink>
          </li>



        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar