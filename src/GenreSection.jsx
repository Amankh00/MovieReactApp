import "./GenreSection.css"

const GenreSection = ({ genres, setGenreId }) => 
{
    const handleClick = (genreId) => 
    {
      setGenreId(genreId);
    };
  
    return (
      <>
        <div className="genre-section">
          <h2>GENRE SECTION</h2>
          <ul>
            {genres.map((genre) => (
              <button key={genre.id}>
                <a href="#" onClick={() => handleClick(genre.id)}>
                  {genre.name}
                </a>
              </button>
            ))}
          </ul>
        </div>
      </>
    );
  };
  
  export default GenreSection;