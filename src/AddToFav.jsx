import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MovieCart";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./Home";

const { v4: uuidv4 } = require('uuid');

const AddToFav = ({ fav, search, imgUri, setFav }) => {
  
  const { user, isAuthenticated } = useAuth0();


   // Listen for changes to the `fav` state and update local storage
   
  // Retrieve the `fav` state from local storage when the component mounts
  useEffect(() => 
  {
     const favFromStorage = JSON.parse(localStorage.getItem("fav")) || [];
    if (isAuthenticated) 
    {
      setFav(favFromStorage);
    }
   }, [isAuthenticated, setFav]);

        // Listen for changes to the `fav` state and update local storage
   
        // Retrieve the `fav` state from local storage when the component mounts
     useEffect(() =>
      {
        const favFromStorage = JSON.parse(localStorage.getItem("fav")) || [];
        setFav(favFromStorage);
      }, [setFav]);

        // Save the `fav` state to local storage whenever it changes
     useEffect(() => 
      {
        localStorage.setItem("fav", JSON.stringify(fav));
      }, [fav]);
  
  const handleRemove = (movie) => 
  {
    if (isAuthenticated) 
    {
      const newCart = JSON.parse(localStorage.getItem("fav")).filter((m) => m.id !== movie.id);
      localStorage.setItem("fav", JSON.stringify(newCart));      
      setFav(newCart);
    } else 
    {
      alert("Please log in to remove movies from your favorites.");
    }
  };
  
  
  return (
    <>
      {
      isAuthenticated ? (
        <>
        
         
            <div className="card-grid">
              {fav
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
                        <button onClick={() => handleRemove(movie)}>remove</button>
                      </div>
                    </div>
                  </section>
                ))}
            </div>
          
        </>
            )
        
       : (
        <>
         <Home />
          <div className="allMovieListl">
              <marquee
                style={{
                  textTransform: "uppercase",
                  color: "green",
                  padding: "16px",
                  fontSize: "25px",
                }}
                behavior="alternate"
                width="100%"
                direction="left"
              >
                Your cart is empty
              </marquee>
            </div>
        </>
      )}
    </>
  );
};

export default AddToFav;
