<h1>CharanGPT</h1>
import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userMessage }
    ]);

    setMessage("");

    try {
      const response = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: userMessage
        })
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: data.response }
      ]);

    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry, something went wrong. Please try again."
        }
      ]);
    }
  };

  return (
    <div className="app">

      <div className="sidebar">
        <h2>🤖 CharanGPT</h2>

        <button className="new-chat">
          + New Chat
        </button>
      </div>

      <div className="main">

        <div className="chat-area">

          {messages.length === 0 ? (
            <div className="welcome">
              <h1>Welcome to CharanGPT 👋</h1>
              <p>Ask me anything!</p>
            </div>
          ) : (
            <div className="messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.sender}`}
                >
                  <strong>
                    {msg.sender === "user" ? "You" : "CharanGPT"}:
                  </strong>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
          )}

        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Message CharanGPT..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />

          <button onClick={sendMessage}>
            Send
          </button>
        </div>

      </div>

    </div>
  );
}

export default App;