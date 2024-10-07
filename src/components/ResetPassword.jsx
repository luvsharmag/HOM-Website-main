import React, { useState } from "react";
import "./ResetPassword.css"; // Make sure to create this CSS file
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { token } = useParams();
  const navigate = useNavigate();
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
        setError("Passwords do not match!");
        setSuccess("");
    }
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/user/reset-password/${token}`,
        { newPassword}
      );
      
      // Success case
      setError(false); // Set error to false
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 3000,
      });
    //   navigate("/home");
    } catch (err) {

      // Error case
      setError(true); // Set error to true
      toast.error(err.response?.data?.message || "An error occurred", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };
  return (
    <div className="reset-page">
      <div className="reset-password-container">
        {/* Left Section */}
        <div className="reset-password-left">
          <img className="reset-password-logo" src="logo.png" alt="logo" />
          <h2>
            Secure your account <br /> <span>with a new password</span>
          </h2>
          <p>Choose a strong password to protect your account</p>
          <ul className="register-points">
            <li>
              <i className="bi bi-check2"></i>
              Enhanced security measures
            </li>
            <li>
              <i className="bi bi-check2"></i>
              Protect your personal data
            </li>
            <li>
              <i className="bi bi-check2"></i>
              Simple and secure reset process
            </li>
          </ul>
          {/* <img
            className="login-background-image"
            src="https://firebasestorage.googleapis.com/v0/b/winkl-1095.appspot.com/o/saas%2Fauth_modal_boy.svg?alt=media&token=cb98e0da-ec4b-4483-854d-db7abf6f71db"
            alt="background"
          /> */}
        </div>

        {/* Right Section */}
        <div className="reset-password-right">
          <form onSubmit={handleResetPassword} className="reset-password-form">
            <h2>
              Reset <span>your password</span>
            </h2>
            <p>Enter and confirm your new password to secure your account.</p>

            <div className="form-group">
              <label htmlFor="new-password">New Password</label>
              <input
                type="password"
                id="new-password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Confirm New Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}

            <button type="submit" className="submit-btn">
              Reset Password
            </button>

            <p>
              Don't have an account? <a href="/register">Sign up for free</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
