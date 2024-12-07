// Right now I have manually entered two products, product 1 & product 2
// We need to set it up so the id can change as the user selects a product


// 1. Product Listing Page:
// o Displays a grid or list of products fetched from a mock API.
// o Each product includes an image, name, price, and a "View Details" or "Add to Cart" button.



import {useState} from 'react'
import PropTypes from 'prop-types'
import ProductDetails from '../components/ProductDetails';
// import Product from "./Product";



const Shop = ({products}) => {
  const imagePath = './src/assets/productImages';
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, SetSelectedProduct] = useState()
  
    const toggleDetails = () => {
      setShowDetails(!showDetails);
      console.log(product);
    };

    const handleProductClick = (product) => {
      toggleDetails(product);
    };

    const productCards = products.map((product) => (
      <div 
        className="img-container" 
        key={product.id} 
        onClick={() => setSelectedProduct(product)}
      >
        <h3>{product.name}</h3>
        <img 
          src={imagePath + product.images[0].filepath} 
          alt={product.images[0].alt} 
        />
        {selectedProduct && <ProductDetails product={selectedProduct} />}
      </div>
    ));
  

  return (
    <div>
        {productCards}
    </div>
  );
};


 Shop.propTypes = {
   products: PropTypes.array.isRequired,
//   categories: PropTypes.array.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   onAdd: PropTypes.func.isRequired
 };

export default Shop;