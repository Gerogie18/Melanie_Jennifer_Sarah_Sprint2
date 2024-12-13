// 2. Product Details Page:
// o Provides detailed information about a selected product, including:
    // § Larger product image
    // § Description
    // § Price
    // § Available quantity
// o Option to add the product to the cart.

import { useContext, useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../../utils/CartProvider';
import CartDiv from '../cartcomponents/CartDiv';
import PropTypes from 'prop-types';
import formatDescription from '../../utils/formatDescription';

function ProductDetails() {
  console.log('Product Details');
  const { productID } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productInCart, cartChanged } = useContext(CartContext);
  //the product in cart changes when the productID or cart changes
  const cartProduct = useMemo(() => productInCart(productID), [productID, cartChanged]);

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
            {product.images.map((image, index) => (
              <div className="img" key={`${productID}-${index}`}> 
                <img 
                  src={imagePath + image.filepath} 
                  alt={image.alt} 
                  title={image.title} 
                />
              </div>
            ))}
          </div>
        )}
      
        <p id="para">
          {formatDescription(product.description)}
        </p>
        <p>Price: ${product.price}</p>
        <CartDiv key={cartChanged} isLoading={loading} productInCart={cartProduct} product={product} />
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  productID: PropTypes.string,
};

export default ProductDetails;