
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

function ShopLayout({ categories, products }) {

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [desiredCategories, setDesiredCategories] = useState([]);
  const [desiredTags, setDesiredTags] = useState([]);
// comment
  useEffect(() => {
    // Initialize desiredCategories on mount
    const catIDs = categories.map(category => category.id);
    setDesiredCategories(catIDs);
  }, [categories]);


  useEffect(() => {
    const newProducts = products.filter(product => desiredCategories.includes(product.category) &&
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
      <div id="filter_selection" className="filter_selection">
        <h3>Filters</h3>
        <h4>Categories</h4>
        {categories.map((category) => (
          <div key={category.id}>
            <label htmlFor={category.id}>{category.title}</label>
            <input
              type="checkbox"
              id={category.id}
              name={category.id}
              onChange={(event) => handleCheckboxChange(event, category.id)}
              checked={desiredCategories.includes(category.id)} />
          </div>
        ))}
        <h4>Search (or Tags?)</h4>
        <div>
          <input
            type="search"
            placeholder="Search"
            className="search-bar"
            onChange={handleSearchChange} />
        </div>

      </div>

      <div>
        <Outlet context={{ filteredProducts }} />
      </div>
    </>
  );
}

ShopLayout.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};
export default ShopLayout;
