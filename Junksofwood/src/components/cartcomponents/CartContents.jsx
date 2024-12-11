import { useContext } from 'react';
import { CartContext } from '../../utils/CartProvider.jsx';
import CartItem from './CartItem';
import FinalizeCart from './FinalizeCart.jsx';
import ClearCart from './ClearCart.jsx';

const CartContents = () => {
  const { cart } = useContext(CartContext);

  if (!cart) {
    return <div>Loading cart...</div>;
  }

  return (
    <div className="cart-contents">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      {/* <div className="cart-actions">
        <FinalizeCart />
        <ClearCart />
      </div> */}
    </div>
  );
};

export default CartContents;