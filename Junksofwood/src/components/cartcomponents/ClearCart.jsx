import { useContext } from 'react'
import { CartContext } from '../../utils/CartProvider.jsx';
import { BsCartXFill } from "react-icons/bs";

const ClearCart = () => {
    const { clearCart } = useContext(CartContext);
    
    const handleClick = () => {
      try {
        clearCart();
        console.log('Cart cleared');
      } catch (error) {
        console.error('Error clearing cart:', error);
      }
    }

  return (
    <button
        className='clear-cart'
        title='Clear Cart'
        onClick={handleClick}

        >
            <BsCartXFill />Clear Cart</button>
  )
}

export default ClearCart;