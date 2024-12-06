// 3. Shopping Cart:
  // o Displays a list of all products added to the cart.
  // o Shows the total price of the items in the cart.
  // o Allows users to remove products or update their quantities.

import PropTypes from "prop-types";
import Button from "../components/Button"
function Cart ({cartItems, onDelete}) {
    return (
    <div>
      <h1>This is the Cart</h1>
      <p>{cartItems}</p>
      <Button text="delete items" click={onDelete}/>
    </div>
      );

  };


Cart.propTypes = {
   cartItems: PropTypes.array.isRequired,
   onDelete: PropTypes.func.isRequired
   };

export default Cart;


