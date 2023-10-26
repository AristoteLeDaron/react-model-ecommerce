import React from 'react';
import './ProductDetailsCard.css';  // Assurez-vous d'importer le bon fichier CSS

function ProductDetailsCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card__image" />
      <h2 className="product-card__name">{product.name}</h2>
      <p className="product-card__price">{product.price}€</p>
    </div>
  );
}

export default ProductDetailsCard;
