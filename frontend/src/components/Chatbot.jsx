import { useState } from "react";
import axios from "axios";

const Chatbot = () => {

  const [message,setMessage] = useState("");
  const [chat,setChat] = useState([]);

  const sendMessage = async () => {

    const res = await axios.post("http://localhost:5000/chat",{message});

    setChat([...chat,{user:message,bot:res.data.reply}]);
    setMessage("");
  };

  return(
    <div>
      <h2>Mental Wellness Chat</h2>

      {chat.map((c,i)=>(
        <div key={i}>
          <p>You: {c.user}</p>
          <p>Bot: {c.bot}</p>
        </div>
      ))}

      <input
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;