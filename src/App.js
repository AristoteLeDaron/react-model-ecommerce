import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ProductsPage from './components/ProductsPage/ProductsPage';
import ProductDetailsPage from './components/ProductDetailsPage/ProductDetailsPage';
import CartPage from './components/CartPage/CartPage';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import UserProfilePage from './components/UserProfilePage/UserProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function LoginPage() {
  return <div>Connexion</div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/produits/:id" element={<ProductDetailsPage />} />
          <Route path="/produits" element={<ProductsPage />} />
          <Route path="/panier" element={<CartPage />} />
          <Route path="/commande" element={<CheckoutPage />} />
          <Route path="/profil" element={<UserProfilePage />} />
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;