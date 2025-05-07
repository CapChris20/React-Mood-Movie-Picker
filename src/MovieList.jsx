// Import React and React hooks
import React, { useEffect, useState } from 'react'; // useEffect lets you run code when the component loads or updates, useState is for handling state
import { useParams, Link } from 'react-router-dom'; // useParams gets URL parameters, Link helps with in-app navigation

// Define the MovieList component
function MovieList() {
  const { mood } = useParams(); // Get the mood from the route URL (e.g., /movies/chill → mood = 'chill')

  const [allMovies, setAllMovies] = useState([]); // State to hold all movies fetched from the JSON file
  const [shuffled, setShuffled] = useState([]); // State to hold the shuffled subset of movies
  const [loading, setLoading] = useState(true); // State to track if the data is still loading

  const actualMood = mood === 'superhero' ? 'epic' : mood; // If mood is 'superhero', use 'epic' JSON instead; else use mood as-is

  // useEffect runs when the component mounts or when actualMood changes
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`/${actualMood}_movies.json`); // Fetch the mood-specific JSON file
        const data = await response.json(); // Parse the JSON data
        const fullList = data[1]; // Access the array of movies (index 1 of the file format)
        setAllMovies(fullList); // Save the full list to state
        setShuffled(shuffleAndLimit(fullList)); // Shuffle and limit to 8 movies and set that to state
      } catch (err) {
        console.error('Error loading movies:', err); // Log any fetch/parsing errors
        setAllMovies([]); // Clear movie data on error
        setShuffled([]); // Clear shuffled data too
      } finally {
        setLoading(false); // Mark loading as false whether fetch succeeded or failed
      }
    };

    fetchMovies(); // Run the async function
  }, [actualMood]); // Dependency array — re-run this effect if actualMood changes

  // Function to randomly shuffle and return 8 items from the array
  function shuffleAndLimit(arr) {
    return [...arr].sort(() => Math.random() - 0.5).slice(0, 8); // Shuffle and slice the first 8 movies
  }

  // Click handler to reshuffle the displayed movies
  const handleShuffle = () => {
    setShuffled(shuffleAndLimit(allMovies)); // Update shuffled with a fresh 8-random selection
  };

  // JSX UI returned by this component
  return (
    <div className="movie-container"> {/* Container for the entire MovieList page */}

      {/* Background looping video */}
      <video autoPlay loop muted playsInline id="background-video">
        <source src="/movielist.mp4" type="video/mp4" /> {/* Source of the video */}
        Your browser does not support the video tag. {/* Fallback text if browser doesn't support video */}
      </video>

      {/* Top row of buttons: shuffle + back to home */}
      <div className="movie-top-buttons">
        <button className="movie-shuffle" onClick={handleShuffle}> {/* Click to shuffle the movies */}
          Shuffle Movies
        </button>
        <Link to="/" style={{ textDecoration: 'none' }}> {/* Navigate back to the homepage */}
          <button className="back-home-button">Back to Home</button> {/* Styled like shuffle button */}
        </Link>
      </div>

      {/* Grid of movie cards */}
      <div className="movie-card-grid">
        {!loading && // Only render the movie cards if we're done loading
          shuffled.map((movie) => ( // Loop over the shuffled movies
            <div key={movie.id} className="movie-card"> {/* Individual movie card with unique key */}
              <h1 className="movie-name">{movie.title}</h1> {/* Movie title */}
              <h2 className="movie-rating">⭐ {movie.vote_average}</h2> {/* Movie rating */}
              <img
                src={
                  movie.poster_path // If there's a poster path, use TMDB; else use placeholder image
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : '/placeholder.png'
                }
                alt={movie.title} // Image alt text for accessibility
              />
              <h3 className="movie-release-date">Released on: {movie.release_date}</h3> {/* Release date of the movie */}
            </div>
          ))}
      </div>

      {/* Show loading message while waiting for fetch */}
      {loading && (
        <p style={{ color: 'white', textAlign: 'center' }}>Loading...</p>
      )}

      {/* Show fallback if not loading and no movies found */}
      {!loading && shuffled.length === 0 && (
        <p style={{ color: 'white', textAlign: 'center' }}>
          No movies found for: {mood}
        </p>
      )}
    </div> // End of container div
  ); // End of return JSX
} // End of MovieList component

export default MovieList; // Export so this component can be used elsewhere