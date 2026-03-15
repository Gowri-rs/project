import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper
} from "@mui/material";

import axios from "axios";

const Chat = () => {

  const [message,setMessage] = useState("");
  const [chat,setChat] = useState([]);

  const sendMessage = async () => {

    if(!message) return;

    const userMessage = { sender:"user", text:message };

    setChat([...chat,userMessage]);

    const res = await axios.post("http://localhost:5000/api/chat",{
      message
    });

    const botMessage = {
      sender:"bot",
      text:res.data.reply
    };

    setChat(prev=>[...prev,botMessage]);

    setMessage("");
  };

  return(

    <Box
      sx={{
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        background:"#f5f7fb"
      }}
    >

      {/* Header */}

      <Box sx={{p:2,background:"#1976d2",color:"white"}}>
        <Typography variant="h6">
          Mental Wellness Chatbot
        </Typography>
      </Box>

      {/* Chat Area */}

      <Box
        sx={{
          flex:1,
          p:3,
          overflowY:"auto"
        }}
      >

        {chat.map((msg,index)=>(

          <Box
            key={index}
            sx={{
              display:"flex",
              justifyContent:
                msg.sender==="user"
                ? "flex-end"
                : "flex-start",
              mb:2
            }}
          >

            <Paper
              sx={{
                p:2,
                maxWidth:"60%",
                background:
                  msg.sender==="user"
                  ? "#1976d2"
                  : "#e0e0e0",
                color:
                  msg.sender==="user"
                  ? "white"
                  : "black"
              }}
            >
              {msg.text}
            </Paper>

          </Box>

        ))}

      </Box>

      {/* Input */}

      <Box
        sx={{
          p:2,
          display:"flex",
          gap:2,
          borderTop:"1px solid #ddd"
        }}
      >

        <TextField
          fullWidth
          placeholder="Type your message..."
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={sendMessage}
        >
          Send
        </Button>

      </Box>

    </Box>

  );
};

export default Chat;