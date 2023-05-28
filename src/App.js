import { useState } from 'react';
import MovieCart from "./MovieCart"
import GenreSection from './GenreSection';
import AddToFav from './AddToFav';
import NavBar from './NavBar';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SeatBooking from './SeatBooking';
import Checkout from './Checkout';
import Footer from './Footer';



function App() {
  const[data , setData] = useState([]);
  const[search , setSearch] = useState('');
  const[fav, setFav] = useState([]);
 
  const [seatId, setSeatId] = useState([
    { seatId: 1, amount: 100 },
    { seatId: 2, amount: 100 },
    { seatId: 3, amount: 200 },
    { seatId: 4, amount: 200 },
    { seatId: 5, amount: 300 },
    { seatId: 6, amount: 300 },
    { seatId: 7, amount: 400 },
    { seatId: 8, amount: 400 },
    { seatId: 9, amount: 400 },
    { seatId: 10, amount: 500 },
    { seatId: 11, amount: 500 },
    { seatId: 12, amount: 800 },
    { seatId: 13, amount: 1000 },
    { seatId: 14, amount: 1000 },
    { seatId: 15, amount: 1200 },
    { seatId: 16, amount: 1200 },
    { seatId: 17, amount: 1500 },
    { seatId: 18, amount: 1500 },
    { seatId: 19, amount: 1500 },
    { seatId: 20, amount: 1500 },
    { seatId: 21, amount: 1500 },
    { seatId: 22, amount: 1500 },
    { seatId: 23, amount: 1500 },
    { seatId: 24, amount: 1500 },
    { seatId: 25, amount: 1500 },
    { seatId: 26, amount: 1500 },
    { seatId: 27, amount: 1500 },
    { seatId: 28, amount: 1500 },
    { seatId: 29, amount: 1500 },
    { seatId: 30, amount: 1500 },
    { seatId: 31, amount: 1500 },
    { seatId: 32, amount: 1500 },
    { seatId: 33, amount: 1500 },
    { seatId: 34, amount: 1500 }
  ]);

  
  const API = "https://api.themoviedb.org/3/movie/now_playing?api_key=5734bda21a5245b75d2933c869017937&language=en-us"
   const imgUri = "https://image.tmdb.org/t/p/w300/";

   const selectedSeats = seatId.filter((seat) => seat.selected);
   const totalAmount = selectedSeats.reduce((acc, seat) => acc + seat.amount, 0);
   const selectedSeatNumbers = selectedSeats.map((seat) => seat.seatId).join(", ");
 

<GenreSection setData={setData} API={API} />

  return (
   
   <>
    <Auth0Provider
      domain="dev-6zxetbkuxbiphzug.us.auth0.com"
      clientId="iZ07KqoMhtLkEUQJsw7kaNA099rvuqCM"
      authorizationParams=
      {{redirect_uri: window.location.origin}} >
        
        
    
      <BrowserRouter> <NavBar fav={fav} setFav={setFav} search={search} setSearch={setSearch} imgUri={imgUri} />
      <Routes>
      
      <Route path='/' element={<MovieCart data={data} setData={setData} fav={fav} 
       setFav={setFav} API={API} imgUri={imgUri}  search={search} setSearch={setSearch}/>} />
     
      <Route path='fav' element={  <AddToFav fav={fav} setFav={setFav} 
       API={API} imgUri={imgUri} search={search} />} />
      
      <Route path="seatBook" element={<SeatBooking seatId={seatId} setSeatId={setSeatId} />}></Route>
     
      <Route path="/Ticket" element={ <Checkout selectedSeats={selectedSeats.length} totalAmount={totalAmount} />}></Route>
     
      
        {/* <NavBar search={search} setSearch={setSearch}/> */}
  
    </Routes> 
   
    </BrowserRouter>

     </Auth0Provider>
 
        </>
  );
}

export default App;
