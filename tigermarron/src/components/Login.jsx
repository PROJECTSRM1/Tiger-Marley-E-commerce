import React from "react";
import "./Login.css";
import { useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   // Perform login logic here
  //   navigate("/dashboard");
  // };

  return (
    <div className="login-container">
      <div className="login-box">
        <h3>LOGIN</h3>
        <h5>Enter your email and password to login:</h5>
        <form>
          <input type="E-mail" placeholder="E-mail" required />
          <input type="Password" placeholder="Password" required />
          <button type="submit">LOGIN</button>
        </form>

        <div className="forgot">
          <div onClick={() => navigate("/recover")}>Forgot Password?</div>
        </div>

        <div className="signup-link">
         <div onClick={() => navigate("/signup")}>Don't have an account? Signup</div>
        </div>
          
        
      </div>
    </div>
  );
};

export default Login;
