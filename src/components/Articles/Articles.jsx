import Article from '../Article/Article';
import './Articles.scss';

export default function Articles({ query, articles }) {
  const responses = ['Okay.', 'Sure thing.', 'Absolutely!', 'Of course!'];

function getRandomResponse() {
  return responses[Math.floor(Math.random() * responses.length)];
}

  return (
    <div className="Articles">
      <h2>
        {articles.length
          ? `${getRandomResponse()} Here are some articles related to ${query}.`
          : 'No articles found. Please try again.'}
      </h2>
      <div className="Articles_list">
        {articles
          .filter((art) => art.author)
          .slice(0, 4)
          .map((article, i) => (
            <Article key={i} article={article} />
          ))}
      </div>
    </div>
  );
}
