import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ProductSubCategoryPage from './components/ProductSubCategoryPage/ProductSubCategoryPage';
import ProductCategoryPage from './components/ProductCategoryPage/ProductCategoryPage';
import ProductDetailsPage from './components/ProductDetailsPage/ProductDetailsPage';
import CartPage from './components/CartPage/CartPage';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import UserProfilePage from './components/UserProfilePage/UserProfilePage';
import LoginPage from './components/LoginPage/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/produits/:category/:subcategory" element={<ProductSubCategoryPage />} />
          <Route path="/produits/:category" element={<ProductCategoryPage />} />
          <Route path="/produit-detail/:id" element={<ProductDetailsPage />} />
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
