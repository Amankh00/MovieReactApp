import { useState } from 'react';
import Checkout from './Checkout';
import "./SeatBooking.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
const SEATS_PER_ROW = 10;
const NUM_ROWS = 5;


const SeatBooking = ({  bookedSeats,setBookedSeats}) => 
{

    
      const { user, isAuthenticated } = useAuth0();
      const { loginWithRedirect, logout} = useAuth0();
          // Initialize state to keep track of which seats are booked
          //   const [bookedSeats, setBookedSeats] = useState([]);

          // Function to toggle a seat's booked status
     const toggleBooked = (seatNum) => 
     {
      const index = bookedSeats.indexOf(seatNum);
      if (index === -1) 
          {
          // If the seat is not already booked, add it to the bookedSeats array
          setBookedSeats([...bookedSeats, seatNum]);
          } 
     else 
         {
           // If the seat is already booked, remove it from the bookedSeats array
          const newBookedSeats = [...bookedSeats];
          newBookedSeats.splice(index, 1);
          setBookedSeats(newBookedSeats);
         }
  };

  const handleBookTicket = () => 
  {
   
    if (bookedSeats.length > 0)
     {
      // Redirect to the Ticket page if at least one seat is selected
      window.location.href = "/Ticket";
    } 
    else 
    {
      // Display an alert message if no seats are selected
      alert("Please select at least one seat.");
    }
  };


  // Function to generate an array of seat numbers for a given row
    const getSeatNumbersForRow = (rowNum) => 
    {
      const seatNumbers = [];
      for (let i = 1; i <= SEATS_PER_ROW; i++)
     {
       seatNumbers.push((rowNum - 1) * SEATS_PER_ROW + i);
     }
    return seatNumbers;
  };


<Checkout amount={bookedSeats.length * 10} bookedSeats={bookedSeats} />

  // Render the seat map
  return (
    
    <div className="seat-booking">
      
      <h2>Seat Booking</h2>
      <p>Click on a seat to book or unbook it:</p>
      <div className="seat-map">
        {Array.from({ length: NUM_ROWS }).map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            <div>{rowIndex + 1}</div>
            {getSeatNumbersForRow(rowIndex + 1).map((seatNum) => (
              <div
                key={seatNum}
                className={`seat${bookedSeats.includes(seatNum) ? ' booked' : ''}`}
                onClick={() => toggleBooked(seatNum)}>
                {seatNum}
              </div>
            ))}
          </div>
        ))}
      </div>
      <p>You have booked {bookedSeats?.length} seat(s): {bookedSeats?.join(', ')}</p>
        <p>Amount ${bookedSeats.length *25}</p>
        <Link to="/Ticket">
         <button type="submit" className="checkout-btn" >
          Book Ticket
         </button>
       </Link>
    </div>
  );
};

export default SeatBooking;
