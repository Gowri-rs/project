import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // 1. Add user message to chat UI
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    
    const userText = input;
    setInput("");
    setLoading(true);

    try {
      // 2. Call your backend (Make sure your Node server is running on port 5000)
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: userText
      });

      // 3. Add Gemini's reply to chat UI
      setMessages((prev) => [...prev, { text: res.data.reply, sender: "bot" }]);
      
    } catch (err) {
      setMessages((prev) => [...prev, { text: "Sorry, I'm having trouble connecting.", sender: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
      <h2>Mental Wellness Assistant</h2>
      
      {/* Chat Window */}
      <div style={{ height: '400px', overflowY: 'auto', borderBottom: '1px solid #eee', marginBottom: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '10px 0' }}>
            <span style={{ 
              backgroundColor: msg.sender === 'user' ? '#007bff' : '#f1f1f1', 
              color: msg.sender === 'user' ? 'white' : 'black',
              padding: '8px 12px', 
              borderRadius: '12px',
              display: 'inline-block' 
            }}>
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <p style={{ fontSize: '12px', color: '#888' }}>Gemini is thinking...</p>}
      </div>

      {/* Input Area */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
          style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button onClick={handleSend} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;