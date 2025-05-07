import { Link } from 'react-router-dom';
import './index.css';

function Home() {
  return (
    <div className="page">
       <video autoPlay loop muted playsInline id="background-video">
          <source src="/homebg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <h1 className="title"> Retro Flicks </h1>
      <p className="subtitle">Pick your vibe. We'll pick your movie.</p>
      
      <Link to="/moods">
        <button className="start-button">Start Picking</button>
      </Link>
    </div>
  );
}

export default Home; 