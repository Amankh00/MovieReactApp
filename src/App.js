import { useState } from 'react';
import MovieCart from "./MovieCart"
import GenreSection from './GenreSection';
import AddToFav from './AddToFav';
import NavBar from './NavBar';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SeatBooking from './SeatBooking';
import Checkout from './Checkout';



function App() {
  const[data , setData] = useState([]);
  const[search , setSearch] = useState('');
  const[fav, setFav] = useState([]);
  const[r, setr] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  
  const API = "https://api.themoviedb.org/3/movie/now_playing?api_key=5734bda21a5245b75d2933c869017937&language=en-us"
   const imgUri = "https://image.tmdb.org/t/p/w300/";
 
<>
<NavBar search={search} setSearch={setSearch}/>
<GenreSection setData={setData} API={API} /></>
  return (
   
   <>
     <Auth0Provider
      domain="dev-6zxetbkuxbiphzug.us.auth0.com"
      clientId="iZ07KqoMhtLkEUQJsw7kaNA099rvuqCM"
      authorizationParams=
      {{redirect_uri: window.location.origin}} >
        
    
      <BrowserRouter> <NavBar fav={fav} setFav={setFav} setSearch={setSearch} imgUri={imgUri} />
      <Routes>
      
      <Route path='/' element={<MovieCart data={data} setData={setData} fav={fav} 
       setFav={setFav} API={API} imgUri={imgUri}  search={search} setSearch={setSearch}/>} r={r} setr={setr} />
     
      <Route path='fav' element={  <AddToFav fav={fav} setFav={setFav} 
       API={API} imgUri={imgUri} search={search} />} />
      
      <Route path="seatBook" element={<SeatBooking amount={bookedSeats} 
       bookedSeats={bookedSeats} setBookedSeats={setBookedSeats}/>}></Route>
     
      <Route path="/Ticket" element={ <Checkout amount={bookedSeats.length *10}
      bookedSeats={bookedSeats} />}></Route>
     
      
        {/* <NavBar search={search} setSearch={setSearch}/> */}
   
   
    </Routes>
    </BrowserRouter>

     </Auth0Provider>
 
        </>
  );
}

export default App;
