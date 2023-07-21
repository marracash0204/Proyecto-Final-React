import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <Link to="/">
          <h1>Orion Cosmetics</h1>
        </Link>

        <nav>
            <ul>
                <li> 
                    <NavLink to="/categoria/2"> Polvos </NavLink>
                </li>

                <li>  
                    <NavLink to="/categoria/3"> Labiales </NavLink>
                </li>
                <li>
                   <NavLink to="/categoria/4"> Sombras </NavLink>
                </li>
                
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar