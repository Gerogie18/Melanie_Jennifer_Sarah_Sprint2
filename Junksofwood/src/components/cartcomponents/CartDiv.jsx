import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart.jsx';
import RemoveFromCart from './RemoveFromCart.jsx';
import UpdateCart from './UpdateCart.jsx';

const CartDiv = ({ productInCart, product }) => {
  
  if (product === undefined) {
    return <span class ='loading'>Loading...</span>;
  };

  if (productInCart && productInCart.id !== product.id) {
    console.error(`Product ID mismatched: ${product.id} ${productInCart.id}`);
  };

  return (
    <div>
      {productInCart ? (
        <>
          <UpdateCart id={productInCart.id} itemQuantity={productInCart.quantity} />
          <RemoveFromCart id={productInCart.id} />
        </>
      ) : (
        <AddToCart id={product.id} name={product.name} price={product.price} img={product.images[0]} />
      )}
    </div>
  );
};

CartDiv.propTypes = {
  productInCart: PropTypes.object,
  product: PropTypes.object.isRequired,
};

export default CartDiv;