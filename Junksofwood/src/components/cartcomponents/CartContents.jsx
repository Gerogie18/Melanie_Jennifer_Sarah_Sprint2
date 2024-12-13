import { useContext } from 'react';
import { CartContext } from '../../utils/CartProvider.jsx';
import CartItem from './CartItem';
import FinalizeCart from './FinalizeCart.jsx';
import ClearCart from './ClearCart.jsx';

const CartContents = () => {
  const { cart, cartLength } = useContext(CartContext);

  const cartContents = () => {
    if (cartLength === 0) {
      return <p>Cart is empty</p>;
    } else {
      return (
        <div className="cart-contents">
          {cart?.map((item) => {
            console.log(`Mapping item: ${item.id}, (${item.quantity})`);
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
      );
    }
  };

  return (
    <>
     {cartContents()}
      <div className="cart-actions">
        <FinalizeCart />
        <ClearCart />
      </div>
    </>
  );
};

export default CartContents;