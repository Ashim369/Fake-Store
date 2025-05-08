import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="categories-page">
      <h1>Product Categories</h1>
      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <div className="categories-list">
          {categories.map(category => (
            <Link to={`/categories/${category}`} key={category} className="category-card">
              {category}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;