import React from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";

const Header = () => {
  return (
    <div className="header">
      <header>
        <img src={logo} alt="logo site kasa" />
        <nav>
          <ul>
            <NavLink to="/">
              <li>Accueil</li>
            </NavLink>
            <NavLink to="/Apropos">
              <li>A propos</li>
            </NavLink>
            <NavLink to="/Logement">
              <li>Logements</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;