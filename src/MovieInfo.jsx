import { useState,useEffect
 } from "react";
 import axios from "axios";
const MovieInfo = ({ movie, imgUri, onClose }) => 
{
    const [cast, setCast] = useState([]);
  
    useEffect(() => {
      const fetchCast = async () => 
      {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=5734bda21a5245b75d2933c869017937&language=en-US`
        );
        setCast(res.data.cast);
      };
      fetchCast();
    }, [movie]);
  
    return (
      <div className="movie-details">
        <div className="backdrop-box">
          <img src={`${imgUri}${movie?.backdrop_path}`} alt={movie?.title} />
        </div>
        <div className="cast-box">
          <h1>{movie?.title}</h1>
          <p>{movie?.overview}</p>
          <h2>Cast</h2>
          <ul>
            {cast?.map((actor) => (
              <li key={actor.id}>{actor.name}</li>
            ))}
          </ul>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default MovieInfo;