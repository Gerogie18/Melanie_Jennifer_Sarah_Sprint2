// 3. Shopping Cart:
  // o Displays a list of all products added to the cart.
  // o Shows the total price of the items in the cart.
  // o Allows users to remove products or update their quantities.

// 4. Checkout Page:
  // o Presents a summary of the cart items.
  // o Option to proceed with payment or simulate the checkout process.
  // o Simple confirmation message upon checkout.

import { useContext } from 'react'
import PropTypes from "prop-types";
//import Slider from "../components/Slider.jsx";
//import CartItem from "../components/CartItem.jsx";
//import CheckoutAddressForm from "../components/checkoutcomponents/CheckoutAddressForm.jsx";
//import CheckoutPersonalForm from "../components/checkoutcomponents/CheckoutPersonalForm.jsx";
//import CheckoutFinal from "../components/checkoutcomponents/CheckoutFinal.jsx";
//import CheckoutLoading from "../components/checkoutcomponents/CheckoutLoading.jsx";
//import { CartContext } from "../utils/CartProvider.jsx";

const Checkout = () => {
  const { checkoutFinilized } = useContext(CartContext);

  if (checkoutFinilized) { 

    return <CheckoutLoading />;
  }
  return (
    <div className='checkout-container'>
      <p> oopsie </p>
    </div>
  )
};
  
Checkout.propTypes = {
  cartItems: PropTypes.array.isRequired
};
 
export default Checkout;