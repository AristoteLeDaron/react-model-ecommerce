import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navBar">
      <Link className="navLink" to="/">Accueil</Link>
      <Link className="navLink" to="/produits">Produits</Link>
      <Link className="navLink" to="/panier">Panier</Link>
      <Link className="navLink" to="/commande">Commande</Link>
      <Link className="navLink" to="/profil">Profil</Link>
      <Link className="navLink" to="/connexion">Connexion</Link>
    </nav>
  );
}

export default NavBar;