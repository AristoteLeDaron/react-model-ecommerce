import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../../data/products.json';
import './ProductCategoryPage.css';

function ProductCategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Category:", category);
    console.log("productsData:", productsData);
    const filteredProducts = productsData.filter(product =>
      product.category.toLowerCase() === category.toLowerCase()
    );
    setProducts(filteredProducts);
  }, [category]);

  console.log(products);

  return (
    <div className="product-category-page">
      <h2>{category}</h2>
      <ul>
        <li><Link to={`/produits/${category}/${category}A`}>{`${category}A`}</Link></li>
        <li><Link to={`/produits/${category}/${category}B`}>{`${category}B`}</Link></li>
        <li><Link to={`/produits/${category}/${category}C`}>{`${category}C`}</Link></li>
      </ul>

      <h3>Produits disponibles :</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.imageUrl} alt={product.name} width="50" height="50" />
            <span>{product.name} - {product.price}€</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCategoryPage;
