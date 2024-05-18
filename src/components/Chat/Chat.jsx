import { useState, useEffect } from 'react';
import Articles from '../Articles/Articles';
import './Chat.scss';

export default function Chat() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [messages, setMessages] = useState([]);
  const fetch_url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;
  const [submission, setSubmission] = useState(false);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const message = e.target.input.value;
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        `Show me articles about ${message}`,
      ]);
    }

    e.target.input.value = '';
    fetch(fetch_url)
      .then((response) => response.json())
      .then((JSONresponse) => {
        console.log(JSONresponse);
        setArticles(JSONresponse.articles);
      })
      .catch(console.error);
    setSubmission(true);
  }

  return (
    <div className="Chat">
      <div className="messages">
        {messages.map((message, i) => (
          <div key={i} className="message">
            <p>{message}</p>
          </div>
        ))}
        {submission && <Articles query={query} articles={articles} />}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div>
            <textarea
              name="input"
              id="input"
              placeholder="Show me articles about..."
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <input className="button" type="submit" value="Send"></input>
          </div>
        </div>
      </form>
    </div>
  );
}
