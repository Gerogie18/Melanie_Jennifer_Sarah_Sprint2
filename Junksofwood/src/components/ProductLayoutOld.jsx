
import { useEffect, useState } from "react";
import { Outlet, useSearchParams, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductLayout = ({categories, products}) => {

  const [filteredProducts, setFilteredProducts] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category')?.split(',') || [];
    const tag = searchParams.get('tag')?.split(',') || [];

    const newSearchParams = new URLSearchParams();
    if (category.length > 0) {
      newSearchParams.set('category', category.join(','));
    }
    if (tag.length > 0) {
      newSearchParams.set('tag', tag.join(','));
    }
    setSearchParams(newSearchParams);
  }, [searchParams, setSearchParams]);


  // useEffect(() => {
  //   // Create a new URLSearchParams instance to avoid duplicate appends
  //   const newSearchParams = new URLSearchParams();

  //   categories.forEach(category => {
  //     newSearchParams.append('category', category.id);
  //   });
    
  //   // Set the new search parameters
  //   setSearchParams(newSearchParams);

  //   // Filter products based on categories if necessary
  //   const desiredCategories = categories.map(category => category.id.toString());
  //   const newProducts = products.filter(product =>
  //     desiredCategories.includes(product.category.toString())
  //   );
  //   setFilteredProducts(newProducts);
    
  // }, []);

      //const desiredCategories = searchParams.getAll('category');

    // useEffect(() => {
    //   // Initialize desiredCategories on mount
    //   const catIDs = categories.map(category => category.id);
    //   setDesiredCategories(catIDs);
    // }, [categories]);
  

    // useEffect(() => {
    //   const newProducts = products.filter(product =>
    //     desiredCategories.includes(product.category) &&
    //     (desiredTags.length === 0 || product.tags.some(tag => desiredTags.includes(tag)))
    //   );
    //   setFilteredProducts(newProducts);
    // }, [desiredCategories, desiredTags]);


      setFilteredProducts(products);


     
    function handleCheckboxChange(event, catID) {
      if (event.target.checked) {
        setSearchParams('category', catID);

      } else {
        setSearchParams(prev => prev.filter(cat => cat !== catID));
      }
   }


  //  function handleTagChange(tag) {
  //     setDesiredTags(prev => prev.filter(id => id !== tag));
  //     //also need to remove a div
  //   }
 
 
    // function handleSearchChange(event) {
    //   const tags = event.target.value;
    //   if (!tags.trim()) {
    //     setDesiredTags([]); // Reset if search is empty
    //   } else {
    //     setDesiredTags(tags.split(',').map(tag => tag.trim())); // Assuming comma-separated tags
    //   }
    // }


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
            // checked={desiredCategories.includes(category.id)}
            />
          </div>
        ))}
        <div>
          <input 
            type="search" 
            placeholder="Search" 
            className="search-bar" 
            //onChange={handleSearchChange} 
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



// import React, { useState, useEffect } from 'react';
// import { useSearchParams, useNavigate } from 'react-router-dom'; // Import useNavigate as well

// function ProductLayout() {
//   const [filteredProducts, setFilteredProducts] = useState([]); // Initialize as an empty array
//   const [searchParams, setSearchParams] = useSearchParams();
//   const navigate = useNavigate(); // Use navigate for programmatic navigation

//   useEffect(() => {
//     const category = searchParams.get('category')?.split(',') || [];
//     const tag = searchParams.get('tag')?.split(',') || [];

//     // Filter products based on category and tag (replace with your actual filtering logic)
//     // Example: Assuming you have a products array
//     const filtered = /* your filtering logic here */;
//     setFilteredProducts(filtered);

//     // Update URL search params ONLY when category or tag changes
//     // No need to create newSearchParams every render
//     const newSearchParams = new URLSearchParams();
//     if (category.length > 0) {
//       newSearchParams.set('category', category.join(','));
//     }
//     if (tag.length > 0) {
//       newSearchParams.set('tag', tag.join(','));
//     }
//     // Only update URL if parameters have changed.
//     if (newSearchParams.toString() !== searchParams.toString()) {
//       navigate({search: `?${newSearchParams}`}); // Use navigate for updates
//     }

//   }, [searchParams, navigate]); // Include navigate in the dependency array


//   // ... rest of your component
//   return (
//     <div>
//       {/* Display filteredProducts */}
//       {filteredProducts.map(product => (
//         <div key={product.id}> {/* Assuming products have an id */}
//           {/* ... */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductLayout;