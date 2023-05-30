import React, { useState } from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ totalAmount, selectedSeats }) => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '') {
      alert('Name is required');
      return;
    }

    alert('This is a dummy payment');
    navigate('/');
    
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <p className="check">Total Number of Seats Booked: {selectedSeats}</p>
      <p className="check">Total Amount: {totalAmount} /- Rupees</p>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="cardNumber" className="form-label">Card Number:</label>
          <input type="NUMBER"  id="cardNumber" maxLength="12" minLength="12" className="form-input" required/>
        </div>
        <div className="form-row">
          <label htmlFor="expiryDate" className="form-label">Expiry Date:</label>
          <input type="DATE" id="expiryDate" className="form-input" required/>
        </div>
        <div className="form-row">
          <label htmlFor="cvv" className="form-label">CVV:</label>
          <input type="NUMBER" id="cvv" className="form-input" required/>
        </div>
        <a href="/">
        <button type="submit" className="checkout-btn">Pay ${totalAmount}</button></a>
      </form>
    </div>
  );
};

export default Checkout;
