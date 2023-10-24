// ProductSubCategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/products.json';
import './ProductSubCategoryPage.css'

function ProductSubCategoryPage() {
  const { category, subcategory } = useParams();

  // Filtrer les produits en fonction de la sous-catégorie choisie
  const filteredProducts = productsData.filter(product => product.subCategory === subcategory);

  return (
    <div className="product-subcategory-page">
      <h2>{subcategory.toUpperCase()}</h2>
      <p>Produits pour la catégorie {subcategory} (sous la catégorie principale {category}) :</p>

      {/* Afficher chaque produit */}
      {filteredProducts.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductSubCategoryPage;
