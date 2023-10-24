import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navBar">
      <Link className="navLink" to="/">Accueil</Link>

      <div className="dropdown">
        <Link className="navLink dropdownLink" to="/produits1">Produit1</Link>
        <div className="submenu">
          <Link className="navLink" to="/produits1/produit1A">Produit1A</Link>
          <Link className="navLink" to="/produits1/produit1B">Produit1B</Link>
          <Link className="navLink" to="/produits1/produit1C">Produit1C</Link>
        </div>
      </div>

      <div className="dropdown">
        <Link className="navLink dropdownLink" to="/produits2">Produit2</Link>
        <div className="submenu">
          <Link className="navLink" to="/produits2/produit2A">Produit2A</Link>
          <Link className="navLink" to="/produits2/produit2B">Produit2B</Link>
          <Link className="navLink" to="/produits2/produit2C">Produit2C</Link>
        </div>
      </div>

      <div className="dropdown">
        <Link className="navLink dropdownLink" to="/produits3">Produit3</Link>
        <div className="submenu">
          <Link className="navLink" to="/produits3/produit3A">Produit3A</Link>
          <Link className="navLink" to="/produits3/produit3B">Produit3B</Link>
          <Link className="navLink" to="/produits3/produit3C">Produit3C</Link>
        </div>
      </div>

      <Link className="navLink" to="/blog">Le Blog</Link>
      <Link className="navLink" to="/faq">F.A.Q</Link>
    </nav>
  );
}

export default NavBar;
