// Fully Annotated: App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import required modules or components
import Home from './Home';               // ✅ Your actual Home.jsx  // Import required modules or components
import MoodPicker from './MoodPicker';  // Import required modules or components
import MovieList from './MovieList';  // Import required modules or components
import './index.css';  // Import required modules or components
  // [No specific comment]
function App() {  // Define a functional component
  return (  // Begin JSX return block
    <Router>  
      <div className="App">  
        <video autoPlay loop muted playsInline id="background-video"> 
          <source src="/BG1.mp4" type="video/mp4" />  
        </video>  
  
        <div className="overlay"></div>  
 
        <Routes>  
          <Route path="/" element={<Home />} />                   {/* ✅ YOUR Home.jsx */}  
          <Route path="/moods" element={<MoodPicker />} />  
          <Route path="/movies/:mood" element={<MovieList />} /> 
        </Routes>  
      </div>  
    </Router>  // JSX element end
  );  // [No specific comment]
}  // Open or close block scope
  // [No specific comment]
export default App;  // Export this component as default