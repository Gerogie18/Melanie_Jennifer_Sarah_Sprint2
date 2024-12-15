
import PropTypes from 'prop-types';
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";

const QuantityContainer = ({quantity, onChange, minQuantity, maxQuantity = 99, }) => {

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (isNaN(newQuantity)) {
      onChange(quantity);
    } else if (newQuantity < minQuantity) {
      onChange(minQuantity);
    } else if (newQuantity > maxQuantity) {
      onChange(maxQuantity);
    } else {
      onChange(newQuantity);
    }
  };

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      onChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > minQuantity) {
      onChange(quantity - 1);
    }
  };

  return (
    <div className='quantity-container'>
      <button
        onClick={handleDecrement}
        disabled={quantity === minQuantity}
      >
        <FaRegSquareMinus />
      </button>
      <input class='checkout_forms'
        type="number"
        min={minQuantity}
        max={maxQuantity}
        // defaultValue={quantity}
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button
        onClick={handleIncrement}
        disabled={quantity === maxQuantity}
      >
        <FaRegSquarePlus />
      </button>
    </div>
  );
};

QuantityContainer.propTypes = {
  quantity: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  minQuantity: PropTypes.number,
  maxQuantity: PropTypes.number,
};

export default QuantityContainer;