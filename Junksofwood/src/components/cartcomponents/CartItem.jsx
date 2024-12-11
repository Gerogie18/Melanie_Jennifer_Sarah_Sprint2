import React, { memo } from 'react';
import PropTypes from 'prop-types';
import UpdateCart from './UpdateCart';
import RemoveFromCart from './RemoveFromCart';

const CartItem = memo(({ item }) => {
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const formatPriceTotal = (price, quantity) => {
    return `$${(price * quantity).toFixed(2)}`;
  }
  console.log(`${item}`);
  return (
    <div key={item.id} className="cart-item">
      <img
        src={`/assets/productimages${item.img.filepath}`}
        alt={item.img.alt}
        title={item.img.title}
      />
      <h3>{item.name}</h3>
      <p>{formatPrice(item.price)}</p>
      <UpdateCart id={item.id} quantity={item.quantity} />
      <RemoveFromCart item={item} />
      <p>{formatPriceTotal(item.price, item.quantity)}</p>
    </div>
  );
});

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.shape({
      title: PropTypes.string.isRequired,
      filepath: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CartItem;