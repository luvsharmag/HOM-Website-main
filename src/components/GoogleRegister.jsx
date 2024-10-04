import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./GoogleRegister.css";

const GoogleRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const googleUser = location.state; // Get googleUser from state
  const [additionalInfo, setAdditionalInfo] = useState({
    company: "",
    number: "",
    password: "",
  });
  console.log(googleUser);
  const handleSubmitFinal = async (e) => {
    e.preventDefault();
    
    // Prepare data to send to backend
    const userData = {
      ...googleUser,
      company: additionalInfo.company,
      number: additionalInfo.number,
      password: additionalInfo.password
    };
  
    // Make API call to save user data
    const response = await fetch(
      "http://localhost:5000/api/v1/user/google/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
  
    if (response.ok) {
      // Navigate to home page after successful registration
      console.log(response);
      navigate("/home");
    } else {
      console.error("Error completing registration");
    }
  };
  
  return (
    <div>
      <h2>Complete Your Registration</h2>
      <form onSubmit={handleSubmitFinal}>
        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company" // Added ID here
            value={additionalInfo.company}
            onChange={(e) =>
              setAdditionalInfo({ ...additionalInfo, company: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="text"
            id="phone-number" // Added ID here
            value={additionalInfo.number}
            onChange={(e) =>
              setAdditionalInfo({ ...additionalInfo, number: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password" // Added ID here
            value={additionalInfo.password}
            onChange={(e) =>
              setAdditionalInfo({ ...additionalInfo, password: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default GoogleRegister;
