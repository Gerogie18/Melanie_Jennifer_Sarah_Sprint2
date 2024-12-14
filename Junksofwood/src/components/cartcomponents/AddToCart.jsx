import {useState, useContext} from 'react'
import { CartContext } from '../../utils/CartProvider.jsx';
import { BsBagPlusFill } from "react-icons/bs";
import QuantityContainer from './QuantityContainer';
import PropTypes from 'prop-types';

const AddToCart = ({id, name, price, img, maxQuantity }) => {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    
    const handleClick = () => {
        addToCart({ id, quantity, name, price, img }),
        console.log(`Adding to cart: ${id}, ${quantity}, ${name}, ${price}, ${img}`);
        console.log(`Added to cart: ${name} (${quantity})`);
      };

  return (
    <div className="add-container">
        <QuantityContainer quantity={quantity} onChange={setQuantity} maxQuantity={maxQuantity}/>
        <button 
            className='add-button'
            title='Add to cart'
            onClick={handleClick}
            ><BsBagPlusFill /></button>
    </div>
  )
}

export default AddToCart

AddToCart.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.object.isRequired,
    maxQuantity: PropTypes.number.isRequired
};


