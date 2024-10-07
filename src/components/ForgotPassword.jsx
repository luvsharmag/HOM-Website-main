import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './ForgotPassword.css';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  // const [message, setMessage] = useState(""); // To store the message
  // const [error, setError] = useState(false);  // To track if there was an error

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/requestPasswordReset",
        { email }
      );
      console.log(response);
      // Success case
      // setMessage(response.data);
      // setError(false); // Set error to false
      toast.success(response.data, {
        position: "top-center",
        autoClose: 3000,
      });

    } catch (err) {
      console.log(err);
      // Error case
      // setMessage(err);
      // setError(true); // Set error to true
      toast.error(err.response?.data?.message || "An error occurred", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-left">
        <img className="forgot-password-logo" src="logo.png" alt="logo" />
        <h2>
          Login to access <br /> <span>Smart Campaigns</span>
        </h2>
        <p>Get 100+ influencers to boost your reach</p>
        <ul className="register-points">
          <li>
            <i className="bi bi-check2"></i>
            Guaranteed results on all your spends
          </li>
          <li>
            <i className="bi bi-check2"></i>
            100k nano and micro Influencers
          </li>
          <li>
            <i className="bi bi-check2"></i>
            ROI-focused campaigns
          </li>
        </ul>
        <img 
          className="login-background-image" 
          src="https://firebasestorage.googleapis.com/v0/b/winkl-1095.appspot.com/o/saas%2Fauth_modal_boy.svg?alt=media&token=cb98e0da-ec4b-4483-854d-db7abf6f71db" 
          alt="background" 
        />
      </div>

      <div className="forgot-password-right">
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <h2>Reset <span>your password</span></h2>
          <p>Enter the email address associated with your account and we'll send you a password reset link.</p>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Display message dynamically */}    

          <button type="submit" className="submit-btn">
            Continue
          </button>

          <p>
            Don't have an account? <a href="/register">Sign up for free</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
