import {useState, useContext} from 'react'
import { CartContext } from '../utils/CartProvider';
import QuantityContainer from './QuantityContainer';
import PropTypes from 'prop-types';
import { IoBagCheck } from "react-icons/io5";

const UpdateCart = (id) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  
  const handleClick = () => {
    if (quantity === 0) {
      removeFromCart(id),
      console.log(`Removed from cart: ${id}`);
    }
    else if (quantity > 0) {
      updateQuantity(id, quantity, setQuantity),
      console.log(`Added to cart: ${id} ${quantity}`);
    }
  }


return (
  <div className="update-container">
      <QuantityContainer quantity={quantity} onChange={setQuantity} minQuantity={0}/>
      <button 
          className='update-button'
          title='Update Cart'
          onClick={handleClick}
          style={{
              backgroundColor: 'none',
              border: 'none',
              color: 'green',
              cursor: 'pointer',
              padding: '1em',
              borderRadius: '5px',
              fontSize: '1.2em',
          }}><IoBagCheck /></button>
      
  </div>
)
}

export default UpdateCart

AddToCart.propTypes = {
  //    id: PropTypes.number.isRequired
  //    name: PropTypes.string.isRequired,
  //    price: PropTypes.number.isRequired,
  //    filepath: PropTypes.string.isRequired
  };
  
  //testing
  AddToCart.defaultProps = {
       id: 0,
       name: 'Canada Brooch',
       price: 10.00,
       filepath: 'productImage.jpg'
  };