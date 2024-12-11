// 3. Shopping Cart:
  // o Displays a list of all products added to the cart.
  // o Shows the total price of the items in the cart.
  // o Allows users to remove products or update their quantities.

import CartContents from "../components/cartcomponents/CartContents";


function Cart () {


    return (
    <div>
    <h1>Your Cart</h1>
      <CartContents />
    </div>
      );

  };



export default Cart;

