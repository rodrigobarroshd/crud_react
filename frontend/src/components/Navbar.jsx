import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
    return (
        <nav id="navbar">
            <h2>Party Time!</h2>
            <ul>
                <li>
                    <NavLink to="/">Minhas festas</NavLink>
                </li>
                <li>
                    <NavLink to="/party/new" className="btn" >Criar festas</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar