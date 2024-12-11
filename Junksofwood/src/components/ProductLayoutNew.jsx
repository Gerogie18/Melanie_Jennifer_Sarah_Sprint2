
import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductLayout = ({ categories, products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const desiredCategories = searchParams.getAll('category');
  //const desiredTags = searchParams.get('tags') ? searchParams.get('tags').split(',') : [];

  useEffect(() => {
    const newProducts = products.filter(product =>
      desiredCategories.includes(product.category.toString())
    );
    setFilteredProducts(newProducts);
  }, [products, desiredCategories]);

  // useEffect(() => {
  //   const newProducts = products.filter(product =>
  //     desiredCategories.includes(product.category.toString()) &&
  //     (desiredTags.length === 0 || product.tags.some(tag => desiredTags.includes(tag)))
  //   );
  //   setFilteredProducts(newProducts);
  // }, [products, desiredCategories, desiredTags]);

  function handleCheckboxChange(event, catID) {
    const newDesiredCategories = desiredCategories.includes(catID.toString())
      ? desiredCategories.filter(id => id !== catID.toString())
      : [...desiredCategories, catID.toString()];
    
    setSearchParams({ category: newDesiredCategories});
    // setSearchParams({ category: newDesiredCategories, tags: desiredTags.join(',') });
  }

  // function handleSearchChange(event) {
  //   const tags = event.target.value;
  //   setSearchParams({ category: desiredCategories, tags });
  // }





  
  return (
    <>
      <h1>Shop</h1>
      <div className="categorySelection">
        <p>This should be a sidebar</p>
        {categories.map((category) => (
          <div key={category.id}>
            <label htmlFor={category.id}>{category.title}</label>
            <input 
              type="checkbox" 
              id={category.id} 
              name={category.id} 
              onChange={(event) => handleCheckboxChange(event, category.id)}
              checked={desiredCategories.includes(category.id.toString())}
            />
          </div>
        ))}
        <div>
          {/* <input 
            type="search" 
            placeholder="Search tags..." 
            className="search-bar" 
            onChange={handleSearchChange} 
            value={desiredTags.join(',')}
          /> */}
        </div>
      </div>
      <div>
        <Outlet context={{ filteredProducts }} />
      </div>
    </>
  );
};

ProductLayout.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};

export default ProductLayout;
