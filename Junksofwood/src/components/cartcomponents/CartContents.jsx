import { useContext } from 'react'
import { CartContext } from '../utils/CartProvider';
import FinalizeCart from './FinalizeCart.jsx';
import QuantityContainer from './QuantityContainer.jsx';
import UpdateCart from './UpdateCart.jsx';
import RemoveFromCart from './RemoveFromCart.jsx';
import ClearCart from './ClearCart.jsx';
import PropTypes from 'prop-types.jsx';

const CartContents = () => {
  const { cart } = useContext(CartContext);

  const cartContents = cart.map((item) => (
    <div key={item.id}>
      <img  src={`./src/assets/productimages'${item.img.filepath}`}
            title={item.img.title}
            alt={item.img.alt} />
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <QuantityContainer item={item} />
      <UpdateCart item={item} />
      <RemoveFromCart item={item} />
    </div>
  ));
  return (
    <Div
        classname='Cart-contents'>
            {cartContents}
            <div>
              <FinalizeCart />
              <ClearCart />
            </div>
            
        </Div>
  )
}

export default CartContents

CartContents.propTypes = {
  cart: PropTypes.array
};

