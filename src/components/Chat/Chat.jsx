import { useState, useEffect, useRef } from 'react';
import Articles from '../Articles/Articles';
import sendIcon from '../../assets/send.png';
import './Chat.scss';

export default function Chat() {
  const [query, setQuery] = useState('');
  const [submission, setSubmission] = useState(false);
  const [chatBox, setChatBox] = useState([]);
  const messagesEndRef = useRef(null);
  const fetch_url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${import.meta.env.VITE_API_KEY}`;

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Set user message
    const message = e.target.input.value;
    if (message.trim()) {
      const currMessage = `Show me articles about ${message}`;

      const currChatItem = {
        type: 'message',
        content: currMessage,
      };
      setChatBox((prevChatBox) => [...prevChatBox, currChatItem]);
    }

    // Reset input to blank after submission
    e.target.input.value = '';

    fetch(fetch_url)
      .then((response) => response.json())
      .then((JSONresponse) => {
        // Set bot articles
        const articles = JSONresponse.articles;
        const currArticleItem = {
          type: 'articles',
          content: articles,
          query: message,
        };

        setChatBox((prevChatBox) => [...prevChatBox, currArticleItem]);
      })
      .catch((error) => {
        console.error;
      });

    setSubmission(true);
  }

  // Auto-scroll to last chat message
  useEffect(() => {
    messagesEndRef.current?.lastElementChild?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [chatBox]);

  return (
    <>
      <div className="Chat">
        {!submission && (
          <div className="welcome">
            <h1>Welcome to NewsBot</h1>
            <p>
              Enter a keyword below and NewsBot will search for articles on that
              topic{' '}
            </p>
          </div>
        )}
        <div
          className={`messages ${chatBox.length ? 'visible' : 'hidden'}`}
          ref={chatBox.length > 2 ? messagesEndRef : null}
        >
          {chatBox.map((item, i) =>
            item.type === 'message' ? (
              <div key={i} className="item">
                <p className="message">{item.content}</p>
              </div>
            ) : (
              submission && (
                <div key={i} className="bot-message">
                  <Articles query={item.query} articles={item.content} />
                </div>
              )
            )
          )}
          <div ref={messagesEndRef}></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div>
              <input
                name="input"
                id="input"
                placeholder="Show me articles about..."
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <button type="submit">
                <img src={sendIcon} alt="" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
