import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav className="Barra">
            <Link to='/'>
                <h2>Happy Program</h2>
            </Link>
            <div className="NavLinks">
                <NavLink to={`/category/programacion`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Programación</NavLink>
                <NavLink to={`/category/estructuras_de_los_computadores`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Estructuras de los Computadores</NavLink>
                <NavLink to={`/category/ciberseguridad`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>CiberSeguridad</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
