import { useOutletContext, useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function filterProducts(products, desiredCategories, desiredTags, setFilteredProducts) {
  const newProducts = products.filter(product =>
    desiredCategories.includes(product.category) &&
    (desiredTags.length === 0 || product.tags.some(tag => desiredTags.includes(tag)))
  );
  setFilteredProducts(newProducts);
}

const Shop = () => {
  const { products } = useOutletContext(); 
  const navigate = useNavigate();
  const imagePath = '/assets/productimages';
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();


  //const desiredCategories = searchParams.getAll('category');
  //const desiredTags = searchParams.getAll('tags');


  const handleProductClick = (productId) => {
    navigate(`/shop/${productId}`);
  };

  // const handleCategoryClick = (categoryId) => {
  //   navigate(`/shop/${categoryId}`);
  // };


  useEffect(() => {
    const desiredCategories = searchParams.get('category')?.split(',') || [];
    const desiredTags = searchParams.get('tag')?.split(',') || [];

    const newSearchParams = new URLSearchParams();
    if (desiredCategories.length > 0) {
      newSearchParams.set('category',desiredCategories.join(','));
    }
    if (desiredTags.length > 0) {
      newSearchParams.set('tag', desiredTags.join(','));
    }
    setSearchParams(newSearchParams);

    filterProducts(products, desiredCategories, desiredTags, setFilteredProducts);

  }, [searchParams, products]);

  return (
    <div>
      {filteredProducts.map((product) => (
        <div className="img-container" key={product.id}>
          <h3>{product.name}</h3>
          <img 
            src={imagePath + product.images[0].filepath} 
            alt={product.images[0].alt} 
            onClick={() => handleProductClick(product.id)}
          />
        </div>
      ))}
    </div>
  );
};

Shop.propTypes = {
  products: PropTypes.array.isRequired,

};
export default Shop;