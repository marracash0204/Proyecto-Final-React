import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src="../public/logo_Orion.png" className='logo_orion' alt="Logo Orion Cosmetics" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className="miBtn" to="/categoria/1"> Labiales </NavLink>
          </li>

          <li>
            <NavLink className="miBtn" to="/categoria/3"> Polvos </NavLink>
          </li>

          <li>
            <NavLink className="miBtn" to="/categoria/5"> Sombras </NavLink>
          </li>



        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar