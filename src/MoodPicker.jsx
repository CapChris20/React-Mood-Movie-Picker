// Import useNavigate from react-router-dom for programmatic navigation
import { useNavigate } from 'react-router-dom';

// Define an array of mood objects, each with a name and image path
const moods = [
  { name: "Chill", image: "/chill.jpeg" },
  { name: "Dreamy", image: "/dreamy.jpg" },
  { name: "Hype", image: "/hype.png" },
  { name: "Melancholy", image: "/melancholy.jpeg" },
  { name: "Nostalgic", image: "/nostalgia.jpeg" },
  { name: "Energetic", image: "/energatic.jpeg" },
  { name: "Lonely", image: "/lonely.jpeg" },
  { name: "Superhero", image: "/hero.jpeg" }
];

// Define the MoodPicker functional component
function MoodPicker() {

  // Initialize the navigation hook for redirecting users on button click
  const navigate = useNavigate();

  // Define a function to handle when a mood is clicked
  const handleClick = (moodName) => {
    const moodSlug = moodName.toLowerCase(); // Convert mood name to lowercase (used in URL path)
    navigate(`/movies/${moodSlug}`); // Navigate to the corresponding route for the selected mood
  };

  // Return the JSX structure to be rendered
  return (
    <div className="page"> {/* Main wrapper for the page layout */}
      <div className="container"> {/* Container for the mood cards */}

        {/* Map over the moods array to generate a card for each mood */}
        {moods.map((mood, i) => (
          <div key={i} className="card"> {/* Unique key for each card, and apply card styling */}
            <h2 className="card-title">{mood.name}</h2> {/* Display the mood name */}
            <img src={mood.image} alt={mood.name} className="card-image" /> {/* Display the image for the mood */}
            <button
              className="card-button"
              onClick={() => handleClick(mood.name)} // On click, call handleClick with mood name
            >
              View Movies
            </button>
          </div>
        ))}
      </div>
    </div>
  ); // End of JSX return block
}

// Export the component so it can be used in other parts of the app
export default MoodPicker;