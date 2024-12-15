
import React, { useState, useContext } from 'react';
import { CartContext } from '../../utils/CartProvider.jsx';
import PropTypes from 'prop-types';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const FinalizeCart = ({ shippingData }) => {
  const { finalizeCart } = useContext(CartContext);
  const orderNumber = Math.floor(Math.random() * 10000) + 1;
  const date = new Date().toLocaleDateString();
  const [orderComplete, setOrderComplete] = useState(false);

  if (!shippingData || Object.keys(shippingData).length === 0) {
    return (
      <div>
        <h2>Error</h2>
        <p>Shipping data is required to complete the order.</p>
      </div>
    );
  }

  const handleClick = () => {
    try {
      finalizeCart(orderNumber, date, shippingData);
      console.log(`Order Finalized: ${orderNumber}, ${date}`);
      setOrderComplete(true);
    } catch (error) {
      console.error('Error finalizing order:', error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div>
      {orderComplete ? (
        <div>
          <h2>Order Complete</h2>
          <p>Your order number is {orderNumber}</p>
        </div>
      ) : (
        <button onClick={handleClick}>
          <MdOutlineShoppingCartCheckout /> Finalize Order
        </button>
      )}
    </div>
  );
};

FinalizeCart.propTypes = {
  shippingData: PropTypes.object.isRequired,
};

export default FinalizeCart;