import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetailsPage.css';

function ProductDetailsPage() {
  // Normalement, vous obtiendriez ces détails à partir d'une API ou d'une base de données, mais pour cet exemple, je vais les définir ici.
  const product = {
    id: 1,
    name: "Nom du produit",
    price: "29,99 €",
    description: "Ceci est une courte description du produit. Il possède de nombreuses caractéristiques impressionnantes et est fabriqué à partir de matériaux de haute qualité.",
    imageUrl: "/img/ex_img_1.jpeg",
    category: "Produits1",
    subCategory: "Produits1A"
  };

  return (
    <div className="product-detail-container">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
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
  );
}

export default ProductDetailsPage;
