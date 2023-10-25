// ProductDetailsPage.js

import React from 'react';
import './ProductDetailsPage.css';
import { Link } from 'react-router-dom';

function ProductDetailsPage({ product }) {
  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="image-container">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-category">
            Catégorie:
            <Link to={`/produits/${product.category}`} className="category-link">
              {product.category}
            </Link>
          </p>
          <p className="product-subCategory">
            Sous-catégorie:
            <Link to={`/produits/${product.category}/${product.subCategory}`} className="subCategory-link">
              {product.subCategory}
            </Link>
          </p>
          <p className="product-price">{product.price}</p>
          <p className="product-description">{product.description}</p>
          <button className="add-to-cart-btn">Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;