import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


function CategoryDetails(categoryID) {

  const navigate = useNavigate();
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categoryID) {
      navigate('/shop');
      return null;
    }

    const fetchCategory = async () => {
      try {
        const res = await fetch(`http://localhost:5005/categories/0`);
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
  }, [categoryID, navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;



  return (
    <div>
      <div className="category-detail">
        <h2>{category.title}</h2>
        <p>Description: {category.description}</p>
      </div>
    </div>
  );
}

CategoryDetails.propTypes = {
  caegoryID: PropTypes.string,
};

export default CategoryDetails;