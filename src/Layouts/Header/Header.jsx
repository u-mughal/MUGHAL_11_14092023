import '@/Layouts/Header/Header.css';
import { NavLink } from 'react-router-dom';
import logo from '@/Assets/Images/Components/header/Logo.png';

function Header () {
    return (
        <header>
            <a href="/"><img src={logo} alt="logo"  /></a>
            <nav>
                <NavLink to="/home" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}>Accueil</NavLink>
                <NavLink to="/a-propos" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}>À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;