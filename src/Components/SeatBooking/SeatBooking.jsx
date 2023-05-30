import "./SeatBooking.css";
import { Link } from "react-router-dom";

const SeatBooking = ({ seatId, setSeatId }) => 
{
 
  const handleSeatClick = (index) => {
    setSeatId((prevState) => {
      const updatedSeatId = [...prevState];
      updatedSeatId[index].selected = !updatedSeatId[index].selected;
      return updatedSeatId;
    });
  };

  const selectedSeats = seatId.filter((seat) => seat.selected);
  const totalAmount = selectedSeats.reduce((acc, seat) => acc + seat.amount, 0);
  const selectedSeatNumbers = selectedSeats.map((seat) => seat.seatId).join(", ");


  
  return (
    <>
      <div className="bookingContainer">
        Seat No: <span>{selectedSeatNumbers}</span>
        <br />
        Total Amount: <span style={{ textDecoration: "underline" }}>{totalAmount} Rupees</span>
        <br /> Total No.of Seats: <span>{selectedSeats.length}</span>
      </div>
      <div className="seatContainer">
        {seatId.map((value, index) => (
          <div
            className={`seat ${value.selected ? "selected" : ""}`}
            key={value.seatId}
            onClick={() => handleSeatClick(index)}
          >
            {value.seatId}
            <br />
            {value.amount}
          </div>
        ))}
      </div>
      <div className="InputField">
        <Link to="/Ticket">
          <button id="bbtn">BookSeat</button>
        </Link>
      </div>
    </>
  );
};

export default SeatBooking;
