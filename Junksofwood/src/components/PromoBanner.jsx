import React from 'react';
import { Link } from 'react-router-dom';

const PromoBanner = () => {
  return (
    <div className='promo-banner'>
      <Link to="/shop">
        This is a promotion
      </Link>
    </div>
  )
}

export default PromoBanner;