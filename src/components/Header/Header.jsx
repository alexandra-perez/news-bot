import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <header className="Header">
      <Link to="/">
        <div className="logo">NewsBot</div>
      </Link>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/projects">
          <li>More Projects</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </header>
  );
}
