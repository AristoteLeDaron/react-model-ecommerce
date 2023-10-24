import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navBar">
      <Link className="navLink" to="/">Accueil</Link>

      <div className="dropdown">
        <Link className="navLink dropdownLink" to="/produits/produits1">Produits1</Link>
        <div className="submenu">
          <Link className="navLink" to="/produits/produits1/produits1A">Produits1A</Link>
          <Link className="navLink" to="/produits/produits1/produits1B">Produits1B</Link>
          <Link className="navLink" to="/produits/produits1/produits1C">Produits1C</Link>
        </div>
      </div>

      <div className="dropdown">
        <Link className="navLink dropdownLink" to="/produits/produits2">Produits2</Link>
        <div className="submenu">
          <Link className="navLink" to="/produits/produits2/produits2A">Produits2A</Link>
          <Link className="navLink" to="/produits/produits2/produits2B">Produits2B</Link>
          <Link className="navLink" to="/produits/produits2/produits2C">Produits2C</Link>
        </div>
      </div>

      <div className="dropdown">
        <Link className="navLink dropdownLink" to="/produits/produits3">Produits3</Link>
        <div className="submenu">
          <Link className="navLink" to="/produits/produits3/produits3A">Produits3A</Link>
          <Link className="navLink" to="/produits/produits3/produits3B">Produits3B</Link>
          <Link className="navLink" to="/produits/produits3/produits3C">Produits3C</Link>
        </div>
      </div>

      <Link className="navLink" to="/blog">Le Blog</Link>
      <Link className="navLink" to="/faq">F.A.Q</Link>
    </nav>
  );
}

export default NavBar;
