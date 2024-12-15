import { useContext } from 'react';
import { CartContext } from '../../utils/CartProvider';
import PropTypes from 'prop-types';
import FinalizeCart from '../cartcomponents/FinalizeCart';

const CheckoutFinal = ({ shippingData }) => {
  const { cart, cartTotal } = useContext(CartContext);

  const formatTotal = (cartTotal) => {
    return `$${cartTotal.toFixed(2)}`;
  };

  const totalRowStyle = {
    
    borderBottom: '2px solid black',
    fontWeight: 'bold', // optional
  };

  const tableLineStyle = { 
    borderTop: '2px solid black',
  }
  
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
        <tr style={totalRowStyle}>
          <td style={tableLineStyle} colSpan="3">Cart Total</td>
          <td style={tableLineStyle}> {formatTotal(cartTotal)}</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div >
      {cartFinal}
      <h2>Shipping Data</h2>
      <div>
        {Object.entries(shippingData).map(([key, value]) => (
          <p key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
          </p>
        ))}
      </div>
      <FinalizeCart shippingData={shippingData}/>
    </div> // Added closing tag here
  );
};

CheckoutFinal.propTypes = {
  shippingData: PropTypes.object.isRequired,
  //billingData: PropTypes.object.isRequired,
};

export default CheckoutFinal;