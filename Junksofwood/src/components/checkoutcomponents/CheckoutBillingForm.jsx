import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CheckoutBillingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    zip: '',
    country: '',
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
      <h2>Billing Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address Line 1:</label>
          <input
            type="text"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address Line 2:</label>
          <input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Province/Province:</label>
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>ZIP/Postal Code:</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

CheckoutBillingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CheckoutBillingForm;