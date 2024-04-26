import React from "react";
import './Header.css';
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="Header">
      <img src={require("../../assets/TM_Titre.png")} className="Logo" alt="logo" />
        <nav className="Nav">
            <ul>
                <li><Link to='/'>Accueil</Link></li>
                <li><Link to='/connexionserveur'>Connexion Serveur</Link></li>
                <li><Link to='/connexion'>Connexion</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>          
        </nav>
    </header>
  );
}
export default Header;
