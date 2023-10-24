// ProductCategoryPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductCategoryPage() {
  const { category } = useParams();

  return (
    <div className="product-category-page">
      <h2>{category.toUpperCase()}</h2>
      <ul>
        <li><Link to={`/produits/${category}/${category}A`}>{`${category}A`}</Link></li>
        <li><Link to={`/produits/${category}/${category}B`}>{`${category}B`}</Link></li>
        <li><Link to={`/produits/${category}/${category}C`}>{`${category}C`}</Link></li>
      </ul>
    </div>
  );
}

export default ProductCategoryPage;
