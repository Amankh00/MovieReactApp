import React, { useState } from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';

const Checkout = ({ amount, bookedSeats }) =>
 {
    const [name, setName] = useState('');
    const handleNameChange = (event) => 
    {
    setName(event.target.value);
    };
const red = (e)=>
{
    e.preventDefault();
}
const goto = ()=>
{
   alert("this is dummy payment");
}

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      
      <p className="checkout-booked-seats">Booked Seats: {bookedSeats?.join(', ')}</p>
      <p type="submit" className="check">Total Number of seat Book - {bookedSeats?.length}</p>
      <p type="submit" className="check">Total Amount ${amount}</p>
      {/* <p type="submit" className="check">Total Amount ${amount}</p> */}
      <form className="checkout-form" onClick={red}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" className="form-input" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-row">
          <label htmlFor="cardNumber" className="form-label">Card Number:</label>
          <input type="text" id="cardNumber" className="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="expiryDate" className="form-label">Expiry Date:</label>
          <input type="text" id="expiryDate" className="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="cvv" className="form-label">CVV:</label>
          <input type="text" id="cvv" className="form-input" />
        </div>
    <Link to="/"> <button type="submit" className="checkout-btn" onClick={goto}>Pay ${amount}</button></Link>   
      </form>
    </div>
  );
};

export default Checkout;
