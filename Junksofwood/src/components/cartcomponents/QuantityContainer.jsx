
import PropTypes from 'prop-types';
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";

const QuantityContainer = ({quantity, onChange, minQuantity, maxQuantity = 99, size = '40px'}) => {

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
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        style={{
          backgroundColor: 'transparent',
          marginRight: '0.3em',
          color: 'blue',
          width: size,
          height: size,
          borderRadius: '5px',
          padding: '0.3em',
          border: 'none',
          cursor: 'pointer',

        }}
        onClick={handleDecrement}
        disabled={quantity === minQuantity}
      >
        <FaRegSquareMinus />
      </button>
      <input
        type="number"
        min={minQuantity}
        max={maxQuantity}
        // defaultValue={quantity}
        value={quantity}
        onChange={handleQuantityChange}
        style={{
          width: size,
          height: size,
          borderRadius: '5px',
          padding: '0.3em',
          textAlign: 'center',
          border: 'none'
        }}
      />
      <button
        style={{
          width: size,
          marginLeft:'0.3em',
          height: size,
          borderRadius: '5px',
          padding: '0.3em',
          border: 'none',
          cursor: 'pointer',
        }}
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
  size: PropTypes.string
};

export default QuantityContainer;