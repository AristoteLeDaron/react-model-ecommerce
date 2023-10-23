import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function HomePage() {
  return <div>Accueil</div>;
}

function ProductsPage() {
  return <div>Produits</div>;
}

function LoginPage() {
  return <div>Connexion</div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/produits" element={<ProductsPage />} />
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
