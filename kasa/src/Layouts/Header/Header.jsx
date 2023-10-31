import '@/Layouts/Header/Header.css';
import { NavLink } from 'react-router-dom';
import logo from '@/Assets/Images/Components/header/Logo.png';

/**
 * Composant Header
 *
 * Ce composant représente l'en-tête (header) d'une application et affiche le logo de l'entreprise,
 * ainsi que des liens de navigation pour accéder aux différentes sections de l'application.
 *
 * @returns {JSX.Element} Un élément React représentant l'en-tête.
 */
function Header () {
    return (
        <header>
            <div className="Header_Container">
            <a href="/"><img src={logo} alt="logo"  /></a>
            <nav>
                <NavLink to="/home" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid" } : { borderBottom: "unset" }}>Accueil</NavLink>
                <NavLink to="/a-propos" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid" } : { borderBottom: "unset" }}>À propos</NavLink>
            </nav>
            </div>
        </header>
    );
}

export default Header;