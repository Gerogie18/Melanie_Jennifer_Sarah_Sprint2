import { useOutletContext, useNavigate } from 'react-router-dom';
import ProductCard from '../components/shopcomponents/ProductCard';

const Shop = () => {
  const navigate = useNavigate();
  const { filteredProducts } = useOutletContext();

  console.log('Received products:', filteredProducts);  // Check what's being received

  const handleProductClick = (productId) => {
    navigate(`/shop/${productId}`);
  };

  if (filteredProducts.length === 0) {
    return <div>No products found.</div>;  // Handle empty state
  }

  return (
    <div>
      {filteredProducts.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onClick={() => handleProductClick(product.id)} 
        />
      ))}
    </div>
  );
};

export default Shop;






// import { useState, useEffect } from 'react';
// import { useOutletContext, useNavigate, useSearchParams } from 'react-router-dom';
// import ProductCard from '../components/shopcomponents/ProductCard';
// import PropTypes from 'prop-types';

// /**
//  * Filters the products based on desired categories and tags.
//  * 
//  * @param {Array} products - The list of products to filter.
//  * @param {Array} desiredCategories - The categories to filter by.
//  * @param {Array} desiredTags - The tags to filter by.
//  * @param {Function} setFilteredProducts - The function to set the filtered products.
//  */
// // function filterProducts(products, desiredCategories, desiredTags, setFilteredProducts) {
// //   const newProducts = products.filter(product =>
// //     desiredCategories.includes(product.category) &&
// //     (desiredTags.length === 0 || product.tags.some(tag => desiredTags.includes(tag)))
// //   );
// //   setFilteredProducts(newProducts);
// // }

// const Shop = () => {
//   const navigate = useNavigate();
//   const { products } = useOutletContext();


//   // const [filteredProducts, setFilteredProducts] = useState(products || []);
//   // const [searchParams, setSearchParams] = useSearchParams();


//   const handleProductClick = (productId) => {
//     navigate(`/shop/${productId}`);
//   };

//   // useEffect(() => {
//   //   const desiredCategories = searchParams.get('category')?.split(',') || [];
//   //   const desiredTags = searchParams.get('tag')?.split(',') || [];

//   //   const newSearchParams = new URLSearchParams();
//   //   if (desiredCategories.length > 0) {
//   //     newSearchParams.set('category', desiredCategories.join(','));
//   //   }
//   //   if (desiredTags.length > 0) {
//   //     newSearchParams.set('tag', desiredTags.join(','));
//   //   }

//   //   if (newSearchParams.toString() !== searchParams.toString()) {
//   //     setSearchParams(newSearchParams);
//   //   }
//   // }, []);

  

//   // useEffect(() => {
//   //   const desiredCategories = searchParams.get('category')?.split(',') || [];
//   //   const desiredTags = searchParams.get('tag')?.split(',') ?? [];
  
//   //   filterProducts(products, desiredCategories, desiredTags, setFilteredProducts);
  
//   // }, [searchParams, products]);




//     return (
//       <div>
//         {filteredProducts.map((product) => (
//           <ProductCard 
//             key={product.id} 
//             product={product} 
//             onClick={() => handleProductClick(product.id)} 
//           />
//         ))}
//       </div>
//     );
//   }
// Shop.propTypes = {
//   products: PropTypes.array.isRequired,

// };
// export default Shop;
