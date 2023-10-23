import React from 'react';
import NavBar from '../NavBar/NavBar';  // Assurez-vous d'avoir le bon chemin d'importation pour NavBar.
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="headerContainer">
        <h1>React Model E-Commerce</h1>
        <input type="text" placeholder="Recherchez votre produit ici" className="searchInput" />
        <button className="searchBtn">🔍</button>
        <button className="loginBtn">Se connecter / S'enregistrer</button>
        <button className="cartBtn">
          🛒 Panier / $0.00
          {/* Remplacez $0.00 par la valeur dynamique du panier */}
        </button>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;