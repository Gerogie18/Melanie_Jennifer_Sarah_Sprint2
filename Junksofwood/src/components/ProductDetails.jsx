// 2. Product Details Page:
// o Provides detailed information about a selected product, including:
    // § Larger product image
    // § Description
    // § Price
    // § Available quantity
// o Option to add the product to the cart.

import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../utils/CartProvider';
import CartDiv from './cartcomponents/CartDiv.jsx';
import PropTypes from 'prop-types';

function ProductDetails() {
  const { productID } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cart } = useContext(CartContext);

  // Check if the product ID is already in the cart
  const productInCart = cart.find((item) => item.id === productID);

  useEffect(() => {
    if (productInCart) {
      console.log("Product is in the cart:", productInCart);
    } else {
      console.log("Product is not in the cart");
    }
  }, [productInCart]);

  const imagePath = './src/assets/productImages';

  useEffect(() => {
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
  }, [productID]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="product-detail">
        <h2>{product.name}</h2>
        {product.img && (
          <img src={`${imagePath}/${product.img.filepath}`} alt={product.img.alt} title={product.img.title} />
        )}
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <CartDiv productInCart={productInCart} product={product} />
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  productID: PropTypes.string.isRequired,
};

export default ProductDetails;