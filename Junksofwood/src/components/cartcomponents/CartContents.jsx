import { useContext } from 'react';
import { CartContext } from '../../utils/CartProvider.jsx';
import CartItem from './CartItem';
import FinalizeCart from './FinalizeCart.jsx';
import ClearCart from './ClearCart.jsx';

const CartContents = () => {
  const { cart, cartLength, cartTotal } = useContext(CartContext);

  const formatTotal = (cartTotal) => {
    console.log(cartTotal);
    return `$${cartTotal.toFixed(2)}`;
  };

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
    <div >
     <h2>Shopping Cart</h2>
     <div className='cart-contents'>
       {cartContents()}
     </div>
     {cartLength > 0 && <span>{formatTotal}</span>}
        <ClearCart />
    </div>
  );
};

export default CartContents;