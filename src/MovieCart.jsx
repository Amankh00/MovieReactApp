import { useState, useEffect } from 'react';
import axios from 'axios';
import "./MovieCart.css";
import { useAuth0 } from "@auth0/auth0-react";
import  GenreSection  from './GenreSection';
import { Link } from 'react-router-dom';
import Footer from './Footer';



const MovieCart = ({ data, setData, API, imgUri, search, fav, setFav,r,setr }) =>
 {

  const { v4: uuidv4 } = require('uuid');
  
      const { user, isAuthenticated } = useAuth0();
 
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(API);
  //     setData(res.data.results);
  //   };
  //   fetchData();
  //   const storedCart = localStorage.getItem("fav");
  //     if (storedCart) {
  //       setFav(JSON.parse(storedCart));
  //     }
  // }, []);


  const [genres, setGenres] = useState([]);
  const [genreId, setGenreId] = useState('');

  useEffect(() => {
    const fetchGenres = async () => 
    {
      const res = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=5734bda21a5245b75d2933c869017937&language=en-US"
      );
      setGenres(res.data.genres);
    };
    fetchGenres();
    const storedCart = localStorage.getItem("fav");
      if (storedCart)
       {
         setFav(JSON.parse(storedCart));
       }
  }, []);

  useEffect(() => 
  {
    const fetchData = async () => 
    {
      let url = API;
      if (genreId) {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=5734bda21a5245b75d2933c869017937&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`;
      }
      const res = await axios.get(url);
      setData(res.data.results);
    };
    fetchData();
    const storedCart = localStorage.getItem("fav");
    if (storedCart) 
    {
       setFav(JSON.parse(storedCart));
     }
  }, [genreId]);


  const handleAddToFav = (movie) => 
  {
    if (isAuthenticated) 
    {
      if (fav.some((m) => m.id === movie.id)) 
      {
        alert("This movie is already added to your favorites.");
      } else {
        const newCart = [...fav, movie];
        setFav(newCart);
        localStorage.setItem("fav", JSON.stringify(newCart));
      }
    } 
    else 
    {
      alert("Please log in to add movies to your favorites.");
    }
  };

 


  return (
  <>

  <GenreSection genres={genres} setGenreId={setGenreId}/>
      <div className="card-grid">
        {data
          .filter((movie) =>
            search === '' || movie.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((movie) => (
            <section key={uuidv4()}>
              <div className="card">
                <div className="image_box">
                  <img src={`${imgUri}${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="details">
                  <h1>{movie.title}</h1>
                  <p className="description">{movie.overview}</p>
                  <p>Release Date {movie.release_date}</p>
                  <button onClick={() => handleAddToFav(movie)}>Add to fav</button>
                  {(isAuthenticated)?
                  (<Link to="seatBook"> <button >Book seat</button></Link>
                 
                  ) :(
         <button onClick={()=> {alert("Log in First To Booking Ticket")}}>Book Seat</button>
          )
          }

         </div>
         </div>
         </section>
          ))}
      </div>
      <Footer/>
      </>
  );
};

export default MovieCart;
