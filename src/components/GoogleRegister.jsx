import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./GoogleRegister.css";
import { handleSubmitFinal } from "../api/auth";
const GoogleRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const googleUser = location.state?.googleUser; // Get googleUser from state

  const [additionalInfo, setAdditionalInfo] = useState({
    company: "",
    number: "",
    password: "",
  });
 
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
