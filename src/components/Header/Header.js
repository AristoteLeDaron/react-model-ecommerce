import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';

function Header() {
  return (
    <header className="header">
      <div className="headerContainer">
        <h1>React Model E-Commerce</h1>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;