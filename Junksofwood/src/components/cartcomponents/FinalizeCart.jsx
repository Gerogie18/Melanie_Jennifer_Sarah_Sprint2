
import { useContext } from 'react';
import { CartContext } from '../../utils/CartProvider';
import PropTypes from 'prop-types';
import FinalizeCart from '../cartcomponents/FinalizeCart';

const CheckoutFinal = ({ shippingData }) => {
  const { cart, cartTotal } = useContext(CartContext);

  const formatTotal = (total) => {
    const amount = Number(total) || 0;
    return `$${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
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
          <td colSpan="3">Cart Total</td>
          <td>{formatTotal(cartTotal)}</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div>
      {cartFinal}
      <h2>Shipping Data</h2>
      <div>
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
};

export default CheckoutFinal;