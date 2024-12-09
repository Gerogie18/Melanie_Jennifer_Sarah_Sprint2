import { useContext } from 'react';
import { CartContext } from '../../utils/CartProvider.jsx';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import PropTypes from 'prop-types';

const FinalizeCart = () => {
  const { finalizeCart } = useContext(CartContext);
  const orderNumber = Math.floor(Math.random() * 10000) + 1;
  const date = new Date().toLocaleDateString();

  const handleClick = () => {
    finalizeCart(orderNumber, date);
    console.log(`Order Finalized: ${orderNumber}, ${date}`);
  };

  return (
    <button
      className='finalize-cart'
      title='Checkout'
      onClick={handleClick}
    >
      <MdOutlineShoppingCartCheckout /> Checkout
    </button>
  );
};

export default FinalizeCart;

FinalizeCart.propTypes = {};

FinalizeCart.defaultProps = {};
