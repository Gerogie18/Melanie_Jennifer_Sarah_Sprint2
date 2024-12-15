import { useState, useContext } from 'react'
import { CartContext } from '../../utils/CartProvider.jsx';
import QuantityContainer from './QuantityContainer';
import PropTypes from 'prop-types';
import { IoBagCheck } from "react-icons/io5";

const UpdateCart = ({ id, itemQuantity, maxQuantity }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(itemQuantity);

  const handleClick = () => {
    if (quantity === 0) {
      console.log(`Removed from cart: ${id}`);
      removeFromCart( {id} );
    } else if (quantity > 0) {
      try {
        console.log(`Updating quantity: ${id}, ${quantity}`);
        updateQuantity({ id, quantity });
      } catch (error) {
        console.error('Error updating quantity:', error);
      }
    }
  };

  return (
    <div classname = "update-containter">
      <QuantityContainer quantity={quantity} onChange={setQuantity} minQuantity={0} maxQuantity={maxQuantity} />
      <button
        title='Update Cart'
        onClick={handleClick}
      ><IoBagCheck /></button>
    </div>
  )
}

export default UpdateCart

UpdateCart.propTypes = {
  id: PropTypes.string.isRequired,
  itemQuantity: PropTypes.number.isRequired,
  maxQuantity: PropTypes.number.isRequired
};