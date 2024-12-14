// 3. Shopping Cart:
  // o Displays a list of all products added to the cart.
  // o Shows the total price of the items in the cart.
  // o Allows users to remove products or update their quantities.

// 4. Checkout Page:
  // o Presents a summary of the cart items.
  // o Option to proceed with payment or simulate the checkout process.
  // o Simple confirmation message upon checkout.

import PropTypes from "prop-types";
import Slides from "../components/Slides.jsx";

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