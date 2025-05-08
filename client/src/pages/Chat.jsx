import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./Chat.css";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => socket.off("receiveMessage");
  }, []);

  const sendMessage = () => {
    if (inputText.trim() !== "") {
      socket.emit("sendMessage", { sender: "User1", text: inputText });
      setInputText("");
    }
  };

  return (
    <div className="chat-container">
      <h2>Chat with Recruiters</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
