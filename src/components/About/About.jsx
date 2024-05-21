import emailIcon from '../../assets/email.png';
import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import { Link } from 'react-router-dom';
import './About.scss';

export default function About() {
  return (
    <div className="About">
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/143456667?v=4"
          alt="Profile"
        />
      </div>
      <div>
        <h1>Alexandra Perez</h1>
        <h3>Full Stack Developer</h3>
        <div className="icons">
          <img src={emailIcon} alt="Email" className="icon" />
          <Link to="https://github.com/alexandra-perez" target="_blank">
            <img src={githubIcon} alt="Github" className="icon" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/ap-alexandraperez/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin" className="icon linkedin" />
          </Link>
        </div>
      </div>
      <div className="info">
        <p>
          I'm a Full Stack Developer with a strong passion for creating
          efficient and user-friendly web applications.
        </p>
        <p>
          I'm dedicated to learning and growing my skills in both front-end and
          back-end technologies.
        </p>
        <p>Feel free to check out my work and connect with me.</p>
        <Link to="/projects">
          <button>View My Projects</button>
        </Link>
        <Link to="/contact">
          <button>Contact Me</button>
        </Link>
      </div>
    </div>
  );
}
