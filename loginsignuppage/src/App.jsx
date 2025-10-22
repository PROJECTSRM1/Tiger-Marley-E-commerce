
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login.jsx";
import Signup from "./components/Signup.jsx";
import RecoverPassword from "./components/RecoverPassword.jsx"

export default function App() {
  return (
    <div className="site-root">
      <main className="main-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/recover" element={<RecoverPassword />} />

          <Route path="/" element={<Navigate to="/login" replace />} />
        
        </Routes>
      </main>
    </div>
  );
}
