// 3. Shopping Cart:
  // o Displays a list of all products added to the cart.
  // o Shows the total price of the items in the cart.
  // o Allows users to remove products or update their quantities.

import PropTypes from "prop-types";
import Button from "../components/Button"
import { useContext } from 'react'
import { CartContext } from '../utils/CartProvider';


function Cart ({onDelete}) {
  const { cart } = useContext(CartContext);

    return (
    <div>

     <h1>Your Cart</h1>
     {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    )}
      <Button text="delete items" click={onDelete}/>
    </div>
      );

  };


Cart.propTypes = {
   cartItems: PropTypes.array,
   onDelete: PropTypes.func
   };

export default Cart;

