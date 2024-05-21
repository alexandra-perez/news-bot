import { useState, useEffect } from 'react';
import Article from '../Article/Article';
import './Articles.scss';

export default function Articles({ query, articles }) {
  // Set bot greeting
  const [greeting, setGreeting] = useState('');
  const responses = [
    'Hi!',
    'Okay.',
    'Sure thing.',
    'Absolutely!',
    'Of course!',
    'Gotcha.',
  ];

  function getRandomResponse() {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  useEffect(() => {
    setGreeting(getRandomResponse());
  }, [query]);

  return (
    <div className="Articles">
      <div className="bot-message">
        <h2>
          {/* Set bot message */}
          {articles.length
            ? `${greeting} Here are some articles related to ${query}.`
            : 'No articles found. Please try again.'}
        </h2>
        <div className="articles-list">
          {/* Display articles */}
          {articles
            .filter((art) => art.author)
            .slice(0, 4)
            .map((article, i) => (
              <Article key={i} article={article} />
            ))}
        </div>
      </div>
    </div>
  );
}
