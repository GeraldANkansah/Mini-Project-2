import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate("/login"); 
  };

  return (
    <div className="main">
      <h1>Create Your Account</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" placeholder="Enter First Name" required />

        <label>Last Name:</label>
        <input type="text" placeholder="Enter Last Name" required />

        <label>Email:</label>
        <input type="email" placeholder="Enter Email" required />

        <label>Password:</label>
        <input type="password" placeholder="Enter Password" required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
