import { useContext } from 'react'
import { CartContext } from '../utils/CartProvider';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import PropTypes from 'prop-types';

const FinalizeCart = () => {
    const { finalizeCart } = useContext(CartContext);
    const user = Math.floor(Math.random() *10000)+1
    const date = new Date().toLocaleDateString()
    
    const handleclick = () => {
        addToCart(user, date),
        console.log(`Order Finilized: ${user}, ${date}`);
    }

  return (
    <button
        className='finilize-cart'
        title='Checkout'
        onClick={handleclick}
        >
            <MdOutlineShoppingCartCheckout />Checkout
        </button>
  )
};

export default FinalizeCart;

FinilizeCart.propTypes = {};

FinilizeCart.defaultProps = {};
