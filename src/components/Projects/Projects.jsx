import youtubeClone from '../../assets/youtube-clone.png';
import inventoryApp from '../../assets/inventoryapp.png';
import studentDashboard from '../../assets/student-dashboard.png';
import musicPlayer from '../../assets/musicplayer.png';
import imageSearchEngine from '../../assets/image-search-engine.png';
import weatherApp from '../../assets/weather-app.png';
import { Link } from 'react-router-dom';
import './Projects.scss';

export default function Projects() {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="container">
        <div className="container__item">
          <Link to="https://therealyoutube.netlify.app/" target="_blank">
            <img src={youtubeClone} alt="" />
            <h2>YouTube Clone</h2>
          </Link>
          <Link
            to="https://github.com/alexandra-perez/youtube-clone"
            target="_blank"
          >
            <h3>Source Code</h3>
          </Link>
        </div>

        <div className="container__item">
          <Link
            to="https://alexandraperez-studentdashboardproject.netlify.app/"
            target="_blank"
          >
            <img src={studentDashboard} alt="" />
            <h2>Student Dashboard</h2>
          </Link>
          <Link
            to="https://github.com/alexandra-perez/project-student-dashboard"
            target="_blank"
          >
            <h3>Source Code</h3>
          </Link>
        </div>

        <div className="container__item">
          <Link
            to="https://alexandra-perez.github.io/inventory-web-app/"
            target="_blank"
          >
            <img src={inventoryApp} alt="" />
            <h2>Inventory Management App</h2>
          </Link>
          <Link
            to="https://github.com/alexandra-perez/inventory-web-app"
            target="_blank"
          >
            <h3>Source Code</h3>
          </Link>
        </div>

        <div className="container__item">
          <Link
            to="https://alexandra-perez.github.io/music-player/"
            target="_blank"
          >
            <img src={musicPlayer} alt="" />
            <h2>JavaScript Music Player</h2>
          </Link>
          <Link
            to="https://github.com/alexandra-perez/music-player"
            target="_blank"
          >
            <h3>Source Code</h3>
          </Link>
        </div>

        <div className="container__item">
          <Link
            to="https://alexandra-perez.github.io/image-search-engine/"
            target="_blank"
          >
            <img src={imageSearchEngine} alt="" />
            <h2>Image Search Engine</h2>
          </Link>
          <Link
            to="https://github.com/alexandra-perez/image-search-engine"
            target="_blank"
          >
            <h3>Source Code</h3>
          </Link>
        </div>

        <div className="container__item">
          <Link
            to="https://alexandra-perez.github.io/weather-app/"
            target="_blank"
          >
            <img src={weatherApp} alt="" />
            <h2>Weather App</h2>
          </Link>
          <Link
            to="https://github.com/alexandra-perez/weather-app"
            target="_blank"
          >
            <h3>Source Code</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
