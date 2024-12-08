import { useContext } from 'react'
import { CartContext } from '../utils/CartProvider';
import PropTypes from 'prop-types';
import { IoBagRemove } from "react-icons/io5";

const RemoveFromCart = (id) => {
  const { removeFromCart } = useContext(CartContext);

  
  const handleClick = () => {
    removeFromCart(id),
    console.log(`Removed from cart: ${id}`);
  }

return (
          <button 
          className='update-button'
          title='Remove from Cart'
          onClick={handleClick}
          style={{
              backgroundColor: 'none',
              border: 'none',
              color: 'red',
              cursor: 'pointer',
              padding: '1em',
              borderRadius: '5px',
              fontSize: '1.2em',
          }}><IoBagRemove /></button>
)
}

export default RemoveFromCart

RemoveFromCart.propTypes = {
  //    id: PropTypes.number.isRequired
  };
  
  //testing
RemoveFromCart.defaultProps = {
       id: 0,
  };