import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MovieCart";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./Home";
import Checkout from "./Checkout";

const { v4: uuidv4 } = require('uuid');

const T = ({ r, search, imgUri, setr, }) => {
  
  const { user, isAuthenticated } = useAuth0();


   // Listen for changes to the `fav` state and update local storage
   
  // Retrieve the `fav` state from local storage when the component mounts
  useEffect(() => 
  {
     const favFromStorage = JSON.parse(localStorage.getItem("r")) || [];
    if (isAuthenticated) 
    {
      setr(favFromStorage);
    }
   }, [isAuthenticated, setr]);

        // Listen for changes to the `fav` state and update local storage
   
        // Retrieve the `fav` state from local storage when the component mounts
     useEffect(() =>
      {
        const favFromStorage = JSON.parse(localStorage.getItem("r")) || [];
        setr(favFromStorage);
      }, [setr]);

        // Save the `fav` state to local storage whenever it changes
     useEffect(() => 
      {
        localStorage.setItem("fav", JSON.stringify(r));
      }, [r]);
  
  const handleRemove = (movie) => 
  {
    if (isAuthenticated) 
    {
      const newCart = JSON.parse(localStorage.getItem("r")).filter((m) => m.id !== movie.id);
      localStorage.setItem("r", JSON.stringify(newCart));      
      setr(newCart);
    } else 
    {
      alert("Please log in to remove movies from your favorites.");
    }
  };
  

  return (
    
        <>
          <Home />
         
            <div className="card-grid">
              {r?.filter((movie) =>
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
                        <button onClick={() => handleRemove(movie)}>remove</button>
                      </div>
                    </div>
                  </section>
                ))}
            </div>
          
        </>
        
  );
};

export default T;
