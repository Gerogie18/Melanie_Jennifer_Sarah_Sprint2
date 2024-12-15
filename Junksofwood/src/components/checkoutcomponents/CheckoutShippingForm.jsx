import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CheckoutShippingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    zip: '',
    country: '',
    phone: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h2>Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input class='checkout_forms'
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address Line 1:</label>
          <input class='checkout_forms'
            type="text"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address Line 2:</label>
          <input class='checkout_forms'
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input class='checkout_forms'
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>State/Province:</label>
          <input class='checkout_forms'
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>ZIP/Postal Code:</label>
          <input class='checkout_forms'
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Country:</label>
          <input class='checkout_forms'
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input class='checkout_forms'
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input class='checkout_forms'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button className='submit-button' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutShippingForm;

CheckoutShippingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

