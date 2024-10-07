import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./GoogleRegister.css";

const GoogleRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const googleUser = location.state; // Get googleUser from state
  const [additionalInfo, setAdditionalInfo] = useState({
    company: "",
    number: "+91",
    password: "",
  });
  const handleSubmitFinal = async (e) => {
    e.preventDefault();
    // Prepare data to send to backend
    const userData = {
      ...googleUser,
      company: additionalInfo.company,
      number: additionalInfo.number,
      password: additionalInfo.password,
    };
    
    try {
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
      console.log(response);
      const data = await response.json();
      if (response.ok) {
        setError(null);
        toast.success(data.message, {
          position: "top-center",
          autoClose: 3000,
        });

        setTimeout(() => {
          navigate("/home");
        }, 2000);
      }else{
        throw new Error(data.message);
      } 
    } catch (error) {
      
      setError(error.message);
      toast.error(error.message, { position: "bottom-center" });
    }
    // Make API call to save user data
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
            onChange={(e) => {
              setAdditionalInfo({
                ...additionalInfo,
                number: e.target.value.startsWith("+91")
                  ? e.target.value
                  : "+91" + e.target.value,
              });
            }}
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
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Register</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default GoogleRegister;
