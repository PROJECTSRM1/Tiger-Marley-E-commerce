// src/components/Signup.jsx
import React, { use, useState } from "react";
import "./Login.css"; // reuse same styles
import { useNavigate} from 'react-router-dom';


export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: call signup API
    console.log("signup", { name, email, password });
    alert("Signup (mock) submitted for: " + email);
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h4>SIGN UP</h4>
  <h5>Please fill in the information below:</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name "
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
           <input
            type="text"
            placeholder="Last Name "
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-Mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Create account</button>
        </form>

        <div className="forgot">
          <div onClick={() => navigate("/login")}>Already have an account? Login</div>
        </div>
      </div>
    </div>
  );
}

