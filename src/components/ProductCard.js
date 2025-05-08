import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <Link to={`/products/${product.id}`} className="view-details">View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;