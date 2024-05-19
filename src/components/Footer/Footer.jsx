import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Header() {
    return (
      <footer className="Footer">
        <div>
          <p>
            Built with React and
            <span>
              <Link to="https://newsapi.org/" target="_blank"> News API</Link>
            </span>
          </p>
        </div>
        <Link to="https://github.com/alexandra-perez/news-bot" target="_blank">
          <div>
            <ul>
              <li>See the Source Code</li>
            </ul>
          </div>
        </Link>
      </footer>
    );
}