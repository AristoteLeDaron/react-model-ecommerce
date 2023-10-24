// ProductSubCategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductSubCategoryPage() {
  const { category, subcategory } = useParams();

  return (
    <div className="product-subcategory-page">
      <h2>{subcategory.toUpperCase()}</h2>
      <p>Produits pour la catégorie {subcategory} (sous la catégorie principale {category}) seront affichés ici.</p>
      {/* Vous pouvez intégrer ici votre liste ou grille de produits pour cette sous-catégorie. */}
    </div>
  );
}

export default ProductSubCategoryPage;
