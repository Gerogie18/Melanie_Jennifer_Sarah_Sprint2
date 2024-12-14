import { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


import ProductCard from './ProductCard';

function CategoryDetails({ categoryID, products }){
  const navigate = useNavigate();
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    const fetchCategory = async () => {
      try {
        const res = await fetch(`http://localhost:5005/categories/${String(categoryID)}`);
        if (!res.ok) {
          throw new Error('Category not found');
        }
        const data = await res.json();
        setCategory(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
  
    fetchCategory();
  }, [categoryID]);

    // Removed useEffect for filtering products as it is now handled by useMemo



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;



  const filteredProducts = useMemo(() => {
    return products.filter(product => product.category == categoryID);
  }, [products, categoryID]);

  return (
    <div>
      <div className="category-detail">
        <h2>{category.title}</h2>
        <p>Description: {category.description}</p>
      </div>

      <div>
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}  
          />
        ))}
      </div>
    </div>
  );
}

CategoryDetails.propTypes = {
  categoryID: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default CategoryDetails;