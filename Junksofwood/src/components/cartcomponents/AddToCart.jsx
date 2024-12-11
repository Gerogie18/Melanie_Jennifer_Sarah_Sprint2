import {useState, useContext} from 'react'
import { CartContext } from '../../utils/CartProvider.jsx';
import { BsBagPlusFill } from "react-icons/bs";
import QuantityContainer from './QuantityContainer';
import PropTypes from 'prop-types';

const AddToCart = ({id, name, price, img }) => {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    
    const handleClick = () => {
        addToCart(id, quantity, name, price, img),
        console.log(`Added to cart: ${name} ${quantity}`);
    };

  return (
    <div className="add-container">
        <QuantityContainer quantity={quantity} onChange={setQuantity}/>
        <button 
            className='add-button'
            title='Add to cart'
            onClick={handleClick}
            style={{
                backgroundColor: 'none',
                border: 'none',
                color: 'blue',
                cursor: 'pointer',
                padding: '1em',
                borderRadius: '5px',
                fontSize: '1.2em',
            }}><BsBagPlusFill /></button>
    </div>
  )
}

export default AddToCart

AddToCart.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.object.isRequired,
};


