// 2. Product Details Page:
// o Provides detailed information about a selected product, including:
    // § Larger product image
    // § Description
    // § Price
    // § Available quantity
// o Option to add the product to the cart.

import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../utils/CartProvider.jsx';
import CartDiv from './cartcomponents/CartDiv.jsx';
import PropTypes from 'prop-types';
import formatDescription from '../utils/formatDescription.jsx';

function ProductDetails() {
  const { productID } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productInCart } = useContext(CartContext);
  const [cartProduct, setCartProduct] = useState(null);

  const imagePath = '/assets/productimages';


  useEffect(() => {
    if (!productID) {
      navigate('/shop');
      return null;
    }

    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5005/products/${productID}`);
        if (!res.ok) {
          throw new Error('Product not found');
        }
        const data = await res.json();
        setProduct(data);
        setLoading(false);
        setCartProduct(productInCart(productID));
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productID, navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;



  return (
    <div>
      <div className="product-detail">
        <h2>{product.name}</h2>
        
        {product.images && (
          <div className="img-container">
              <img 
              src={imagePath + product.images[0].filepath} 
              alt={product.images[0].alt} 
              title={product.images[0].title} />
          </div>
          )}
      
        <p id="para">
          {formatDescription(product.description)}
        </p>
        <p>Price: ${product.price}</p>
        <CartDiv productInCart={cartProduct} product={product} />
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  productID: PropTypes.string,
};

export default ProductDetails;