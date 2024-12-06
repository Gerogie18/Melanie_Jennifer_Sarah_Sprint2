// 4. Checkout Page:
  // o Presents a summary of the cart items.
  // o Option to proceed with payment or simulate the checkout process.
  // o Simple confirmation message upon checkout.

import PropTypes from "prop-types";

const Checkout = ({cartItems}) => {
    return (
    <div>
      <h1>Checkout</h1>
      <p>{cartItems}</p>;
    </div>
    )
  };
  
Checkout.propTypes = {
  cartItems: PropTypes.array.isRequired
};
 
export default Checkout;