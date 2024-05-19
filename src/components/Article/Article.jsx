import { Link } from 'react-router-dom';
import './Article.scss';

export default function Article({ article }) {
  const { title, source, description, url } = article;

  return (
    <>
      <Link to={url} target="_blank">
        <article className="Article">
          <h3>{title}</h3>
          <p className="italic">{source.name}</p>
          <p>{description}</p>
        </article>
      </Link>
    </>
  );
}
