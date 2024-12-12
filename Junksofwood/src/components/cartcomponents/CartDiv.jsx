import { useEffect } from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart.jsx';
import RemoveFromCart from './RemoveFromCart.jsx';
import UpdateCart from './UpdateCart.jsx';

const CartDiv = ({ productInCart, product, isLoading }) => {
  console.log('CartDiv');

  if (isLoading || !product) {
    return <span className='loading'>Loading...</span>;
  };

  if (productInCart !== null && (productInCart.id !== product.id)) {
    console.error(`Product ID mismatched: ${product.id} ${productInCart.id}`);
  };

  return (
    <div>
      {productInCart && productInCart.id === product.id ? (
        <>
          <UpdateCart id={Number(productInCart.id)} itemQuantity={productInCart.quantity} />
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