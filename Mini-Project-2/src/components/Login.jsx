import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(password.length<8 || username.length<8){
        alert("Make your username or password longer than 8 characters");
    }else{
        navigate("/converter")
    }
  };

  return (
    <div className="main">
      <h1>The Digital Keypad</h1>
      <h3>Enter your login credentials</h3>

      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter your Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="wrap">
          <button type="submit">Submit</button>
        </div>
      </form>

      <p>
        <Link to="/register">Create an account</Link>
      </p>
    </div>
  );
}

export default Login;
