import React from 'react';
import { Link } from 'react-router-dom';

const PromoBanner = () => {
  return (
    <div className='promo-banner'>
      <Link to="/shop">
        Our holiday ornaments with make great gifts - Crafted in Newfoundland
      </Link>
    </div>
  )
}

export default PromoBanner;