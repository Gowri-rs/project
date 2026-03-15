import { Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Assessment from "./components/Assessment";
import TherapistPage from "./components/Therapists";
import SupportOptions from "./components/SupportOptions";
import AdminDashboard from "./components/AdminDashboard";
import Chatbot from "./components/Chatbot";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/home" element={<Home />} />

      <Route path="/supportoptions" element={<SupportOptions />} />

      <Route path="/chat" element={<Chatbot />} />

      <Route path="/assessment" element={<Assessment />} />

      <Route path="/therapists" element={<TherapistPage />} />

      <Route path="/admin" element={<AdminDashboard />} /> 
    </Routes>

  );
}

export default App;