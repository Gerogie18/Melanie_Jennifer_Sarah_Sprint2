import { useContext } from 'react';
import { CartContext } from '../../utils/CartProvider';
import PropTypes from 'prop-types';
import FinalizeCart from '../cartcomponents/FinalizeCart';

const CheckoutFinal = ({ shippingData, BillingData }) => {
  const grandTotal = cartTotal + shippingTotal;
  const { cartCarts, cartTotal} = useContext(CartContext);

  return (
    <div>
      <h2>Order Summary</h2>
      <div>
        {cartCarts.map((cart) => (
          <div key={cart.id}>
            <img title={cart.img.title} src={cart.img.filepath} alt={cart.img.alt} />
            <h2>{cart.name}</h2>
            <p>Price: {cart.price}</p>
            <p>Quantity: {cart.quantity}</p>
            <p>Total: {cart.price * cart.quantity}</p>
          </div>
        ))}
      </div>
      <div>
        <p>Cart Total: {cartTotal}</p>
        <p>Shipping Total: {shippingTotal}</p>
        <p>Grand Total: {grandTotal}</p>
      </div>

      <h2>Shipping Information</h2>
      <div>
        <p>Full Name: {address.fullName}</p>
        <p>Address Line 1: {address.address1}</p>
        <p>Address Line 2: {address.address2}</p>
        <p>City: {address.city}</p>
        <p>State/Province: {address.state}</p>
        <p>ZIP/Postal Code: {address.zip}</p>
        <p>Country: {address.country}</p>
        <p>Phone: {address.phone}</p>
        <p>Email: {address.email}</p>
      </div>

      <h2>Billing Information</h2>
      <div>
        <p>Full Name: {personal.fullName}</p>
        <p>Card Number: {personal.cardNumber}</p>
        <p>Expiration Date: {personal.expirationDate}</p>
        <p>CVV: {personal.cvv}</p>
      </div>

      <FinalizeCart />
    </div>
  );
};

CheckoutFinal.propTypes = {
  cartCarts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  cartTotal: PropTypes.number.isRequired,
  shippingTotal: PropTypes.number.isRequired,
  address: PropTypes.object.isRequired,
  personal: PropTypes.object.isRequired,
};

export default CheckoutFinal;