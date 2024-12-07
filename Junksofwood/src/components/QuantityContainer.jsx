import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";

const QuantityContainer = ({quantity, onChange, minQuantity, maxQuantity, size}) => {

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

          //disabled
          backgroundColor: quantity === minQuantity ? '#ccc' : '',
          color: quantity === minQuantity ? '#666' : '',
          cursor: quantity === minQuantity ? 'not-allowed' : 'pointer'
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

          //disabled
          backgroundColor: quantity === maxQuantity ? '#ccc' : '',
          color: quantity === maxQuantity ? '#666' : '',
          cursor: quantity === maxQuantity ? 'not-allowed' : 'pointer'
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
  onChange: PropTypes.func.isRequired
};

QuantityContainer.defaultProps = {
  minQuantity: 1,
  maxQuantity: 99,
  size: '40px'
};

export default QuantityContainer;