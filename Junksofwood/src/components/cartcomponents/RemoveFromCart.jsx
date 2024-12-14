import { useContext } from 'react'
import { CartContext } from '../../utils/CartProvider.jsx';
import PropTypes from 'prop-types';
import { IoBagRemove } from "react-icons/io5";

const RemoveFromCart = ( {id} ) => {
  const { removeFromCart } = useContext(CartContext);

  
  const handleClick = () => {
    removeFromCart( {id} ),
    console.log(`Removed from cart: ${id}`);
  }

return (
          <button 
          className='update-button'
          title='Remove from Cart'
          onClick={handleClick}
          ><IoBagRemove /></button>
)
}

export default RemoveFromCart

RemoveFromCart.propTypes = {
  id: PropTypes.string
  };