import React, { useContext } from 'react';
import { CartContext } from '../../utils/CartProvider.jsx';
import PropTypes from 'prop-types';
import FinalizeCart from '../cartcomponents/FinalizeCart.jsx';

const CheckoutFinal = ({ shippingData }) => {
  const { cart, cartTotal } = useContext(CartContext);

  const formatTotal = (total) => {
    const amount = Number(total) || 0;
    return `$${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  };

  const tableLineStyle = { 
    borderTop: '2px solid black',
  };

  const cartFinal = (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
        <tr>
          <td style={tableLineStyle} colSpan="3">Cart Total:</td>
          <td style={tableLineStyle}>{formatTotal(cartTotal)}</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div>
      {cartFinal}
      <h2>Shipping Data</h2>
      <div class='shipping_data'>
        {Object.entries(shippingData).map(([key, value]) => (
          <p key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
          </p>
        ))}
      </div>
      <FinalizeCart shippingData={shippingData} />
    </div>
  );
};

CheckoutFinal.propTypes = {
  shippingData: PropTypes.object.isRequired,
  // Uncomment if billingData is used later
  // billingData: PropTypes.object.isRequired,
};

export default CheckoutFinal;