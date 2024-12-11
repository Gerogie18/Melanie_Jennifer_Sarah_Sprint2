
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductLayout = ({categories, products}) => {

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [desiredCategories, setDesiredCategories] = useState([]); 
  const [desiredTags, setDesiredTags] = useState([]); 


  const catIDs = [];
  categories.forEach(category => {
    catIDs.push(category.id)});

    useEffect(() => {
      // Initialize desiredCategories on mount
      const catIDs = categories.map(category => category.id);
      setDesiredCategories(catIDs);
    }, [categories]);
  

    useEffect(() => {
      const newProducts = products.filter(product =>
        desiredCategories.includes(product.category) &&
        (desiredTags.length === 0 || product.tags.some(tag => desiredTags.includes(tag)))
      );
      setFilteredProducts(newProducts);
    }, [products, desiredCategories, desiredTags]);


     
    function handleCheckboxChange(event, catID) {
      if (event.target.checked) {
        setDesiredCategories(prev => [...prev, catID]);
      } else {
        setDesiredCategories(prev => prev.filter(id => id !== catID));
      }
   }


  //  function handleTagChange(tag) {
  //     setDesiredTags(prev => prev.filter(id => id !== tag));
  //     //also need to remove a div
  //   }
 
 
    function handleSearchChange(event) {
      const tags = event.target.value;
      if (!tags.trim()) {
        setDesiredTags([]); // Reset if search is empty
      } else {
        setDesiredTags(tags.split(',').map(tag => tag.trim())); // Assuming comma-separated tags
      }
    }


  return (
    <>
      <h1>Shop</h1>
      <div className = "categorySelection">
        <p>This should be a sidebar</p>
        {categories.map((category) => (
          <div key={category.id}>
            <label htmlFor={category.id}>{category.title}</label>
            <input 
            type="checkbox" 
            id={category.id} 
            name={category.id} 
            onChange={(event) => handleCheckboxChange(event, category.id)}
            checked={desiredCategories.includes(category.id)}
            />
          </div>
        ))}
        <div>
          <input 
            type="search" 
            placeholder="Search" 
            className="search-bar" 
            onChange={handleSearchChange} 
            />
        </div>

      </div>

      <div>
            <Outlet context={{ filteredProducts }}/>
      </div>
    </>
  )
};

ProductLayout.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};
export default ProductLayout;
