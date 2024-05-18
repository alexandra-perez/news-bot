import Article from '../Article/Article';
import './Articles.scss';

export default function Articles({ query, articles}) {
  console.log(articles);

  return (
    <div className='Articles'>
          <h1 className="m-10px">{`Sure thing. Here are some articles related to ${query}.`}</h1>
      <div className="Articles_list">
        {articles.slice(0, 4).map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
