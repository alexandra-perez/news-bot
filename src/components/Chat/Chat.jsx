import { useState, useEffect } from 'react';
import Articles from '../Articles/Articles';
import sendIcon from '../../assets/send.png';
import './Chat.scss';

export default function Chat() {
  const [query, setQuery] = useState('');
  const [submission, setSubmission] = useState(false);
  const [chatBox, setChatBox] = useState([]);
  const fetch_url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const message = e.target.input.value;
    if (message.trim()) {
      const currMessage = `Show me articles about ${message}`;

      const currChatItem = {
        type: 'message',
        content: currMessage,
      };

      setChatBox((prevChatBox) => [...prevChatBox, currChatItem]);
    }

    e.target.input.value = '';

    fetch(fetch_url)
      .then((response) => response.json())
      .then((JSONresponse) => {
        const articles = JSONresponse.articles;
        console.log(articles);
        const currArticleItem = {
          type: 'articles',
          content: articles,
          query: message,
        };

        setChatBox((prevChatBox) => [...prevChatBox, currArticleItem]);
      })
      .catch(console.error);
    setSubmission(true);
  }

  return (
    <div className="Chat">
      {!submission && (
        <div className="welcome">
          <h1>Welcome to NewsBot</h1>
          <p>Enter a keyword below and NewsBot will search for articles on that topic </p>
        </div>
      )}
      <div className="messages">
        {chatBox.map((item, i) => (
          <div key={i} className="item">
            {item.type === 'message' ? (
              <p className="message">{item.content}</p>
            ) : (
              submission && (
                <div className="bot-message">
                  <Articles query={item.query} articles={item.content} />
                </div>
              )
            )}
          </div>
        ))}
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
            <button type="submit">
              <img src={sendIcon} alt="" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
