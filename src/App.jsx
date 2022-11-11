import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Import Pages
import Admin from "./pages/Admin/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Transporter from "./pages/Transporter/TransporterDashboard";
import Client from "./pages/Client/ClientDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/client" element={<Client />} />
        <Route path="/transporter" element={<Transporter />} />
        <Route path="*" element={<h1>404: Not found </h1>} />
      </Routes>
    </div>
  );
}

export default App;
