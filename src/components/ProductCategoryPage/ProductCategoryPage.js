import React from 'react';
import products from '../../data/products.json';
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ProductCategoryPage.css';

function ProductCategoryPage() {
  const { category } = useParams();
  console.log("Catégorie actuelle:", category);

  const getSubCategories = () => {
    const subCategories = products
      .filter(p => p.category.toLowerCase() === category)
      .map(p => p.subCategory.toLowerCase());
    return [...new Set(subCategories)]; // remove duplicates
  };

  const getLatestProduct = (subCategory) => {
    const filteredProducts = products.filter(p => p.category.toLowerCase() === category && p.subCategory.toLowerCase() === subCategory);
    return filteredProducts.sort((a, b) => b.id - a.id)[0];
  };

  const subCategories = getSubCategories();

  return (
    <div className="category__container">
      {subCategories.map(subCategory => (
        <Link to={`/produits/${category}/${subCategory}`} key={subCategory} className={`subCategory__${subCategory}__container`}>
          <h2>{subCategory}</h2>
          {getLatestProduct(subCategory) && <ProductDetailsCard key={getLatestProduct(subCategory).id} product={getLatestProduct(subCategory)} />}
        </Link>
      ))}
    </div>
  );
}

export default ProductCategoryPage;
