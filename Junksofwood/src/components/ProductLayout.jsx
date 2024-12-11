
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
     let newproducts = products.filter(product => desiredCategories.includes(product.category))
      setFilteredProducts(newproducts);
    }, [products, desiredCategories]); // Dependency array ensures effect runs only when products change
  
    useEffect(() => {
      let newproducts = products.filter(product => desiredTags.includes(product.tags))
       setFilteredProducts(newproducts); 
     }, [desiredTags]); // Dependency array ensures effect runs only when desiredTags changes
  
     
    function handleCheckboxChange(event, catID) {
      if (event.target.checked) {
        setDesiredCategories(prev => [...prev, catID]);
      } else {
        setDesiredCategories(prev => prev.filter(id => id !== catID));
      }
   }


   function handleTagChange(tag) {
      setDesiredTags(prev => prev.filter(id => id !== tag));
      //also need to remove a div
    }
  
 


   function handleSearchChange(event) {
    let tags = event.target.value
      setDesiredTags(prev => [...prev, tags]);
      return(    
        <>
        {desiredTags.map((tag, index) => (
          <div key={index}>
            <label htmlFor={tag}>{tag}</label>
            <input 
            type="checkbox" 
            id={tag} 
            name={tag} 
            onChange={() => handleTagChange(tag)}
            checked={desiredCategories.includes(tag)}
            />
          </div>
        ))}
      </>)
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
          <input type="search" placeholder="Search" className="search-bar" value={tags} onChange={handleSearchChange} />
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
