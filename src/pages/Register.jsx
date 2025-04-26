import React from 'react';
import {useNavigate} from 'react-router-dom';
import './register.css';


export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Register</h2>
        <form className="register-form">
          <div>
            <label className="register-label">Username</label>
            <input type="text" className="register-input" placeholder="Enter Username" />
          </div>
          <div>
            <label className="register-label">Email</label>
            <input type="email" className="register-input" placeholder="Enter Email" />
          </div>
          <div>
            <label className="register-label">Password</label>
            <input type="password" className="register-input" placeholder="Password" />
          </div>
          <button className="register-button">Register</button>
        </form>
        <p className="register-text">
          Already have an account? <button className="login-button" onClick={()=>navigate('/login')}>Login</button>
        </p>
      </div>
    </div>
  );
}