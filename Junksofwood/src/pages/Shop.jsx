import { useState, useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import ProductCard from '../components/shopcomponents/ProductCard';

const Shop = () => {

  const { filteredProducts } = useOutletContext();
  // Constants for back navigation
  const navigate = useNavigate();
  const [previousPage, setPreviousPage] = useState(null);

  // Constants (state, function, etc) for handle products per page
  const [currentImages, setCurrentImages] = useState(1);
  const productsPerPage = 9;
  const indexOfLastProduct = currentImages * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
  const handleNext = () => {
    if (indexOfLastProduct < filteredProducts.length) {
      setCurrentImages(currentImages + 1);
    }
  };

  const handlePrev = () => {
    if (indexOfLastProduct > filteredProducts.length) {
      setCurrentImages(currentImages - 1);
    }
  };


  // Handles back navigation 
  useEffect(() => {
    // Store the previous page URL when the component mounts
    const prevPage = document.referrer;
    setPreviousPage(prevPage);

    const handleBackNavigation = (event) => {
      if (previousPage) {
        window.location.href = previousPage;
      } else {
        navigate('/');
      }
    };

    window.addEventListener('popstate', handleBackNavigation);

    return () => {
      window.removeEventListener('popstate', handleBackNavigation);
    };
  }, [previousPage, navigate]);


  // const handleDisplayAll = () => {
  //   setCurrentPage(Math.ceil(filteredProducts.length / productsPerPage));
  // };

  console.log('Received products:', filteredProducts);  // Check what's being received


  if (filteredProducts.length === 0) {
    return <div>No products found.</div>;  // Handle empty state
  }



  return (
    <div>
      {currentProducts.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product}  
        />
      ))}
      <div>
        {indexOfLastProduct < filteredProducts.length && (
          <button onClick={handlePrev}>&lt;</button>
        )}
        {indexOfLastProduct < filteredProducts.length && (
          <button onClick={handleNext}>&gt;</button>
        )}
        {/* <button onClick={handleDisplayAll}>Display All</button> */}
      </div>
    </div>
  );
};

export default Shop;