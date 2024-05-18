import Chat from '../Chat/Chat';

import './ChatWindow.scss';

export default function chatWindow() {
  return (
    <div className="ChatWindow">
      <h1>Chat</h1>
      <Chat />
    </div>
  );
}
