import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { googleProvider } from "./firebase";
import axios from "axios";

const Login = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [fullName, setFullName] = useState(""); // State for full name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const auth = getAuth(); // Initialize Firebase auth
  const provider = new GoogleAuthProvider(); // Initialize Google provider

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError(null); // Reset error state before attempting login

  //   // Check for valid email format
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     setError('Invalid email format.');
  //     toast.error('Invalid email format.', { position: 'bottom-center' });
  //     return;
  //   }

  //   try {
  //     // Try to sign in with email and password using Firebase auth
  //     const userCredential = await signInWithEmailAndPassword(auth, email, password);

  //     // If login is successful
  //     console.log('User logged in successfully:', userCredential.user);
  //     const displayName = userCredential.user.displayName || "User"; // Use displayName or default to "User"
  //     setFullName(displayName);
  //     localStorage.setItem("userName", displayName); // Save the user's name in local storage
  //     toast.success("User logged in successfully", { position: "top-center" });
  //     setSuccessMessage(`Welcome, ${displayName}!`); // Set success message
  //     navigate("/home"); // Redirect to your home or profile page after successful login
  //   } catch (error) {
  //     // Handle specific Firebase errors
  //     switch (error.code) {
  //       case 'auth/user-not-found':
  //         setError('No user found with this email.');
  //         toast.error('No user found with this email.', { position: "bottom-center" });
  //         break;
  //       case 'auth/wrong-password':
  //         setError('Incorrect password.');
  //         toast.error('Incorrect password.', { position: "bottom-center" });
  //         break;
  //       case 'auth/invalid-email':
  //         setError('Invalid email format.');
  //         toast.error('Invalid email format.', { position: "bottom-center" });
  //         break;
  //       default:
  //         setError('Login failed. Please try again.');
  //         toast.error('Login failed. Please try again.', { position: "bottom-center" });
  //     }
  //   }
  // };

  // Handle Google login
  // const handleGoogleSignIn = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     const userEmail = result.user.email;
  //     const displayName = result.user.displayName || "User"; // Get the display name
  //     setEmail(userEmail); // Update email state on Google sign in
  //     setFullName(displayName); // Set full name from Google account
  //     localStorage.setItem("userName", displayName); // Save user's name in local storage
  //     toast.success("Signed in with Google successfully", { position: "top-center" });
  //     setSuccessMessage(`Welcome, ${displayName}!`); // Set success message
  //     navigate("/home"); // Redirect to profile page after Google login
  //   } catch (error) {
  //     setError(error.message || "Failed to sign in with Google");
  //     toast.error(error.message || "Failed to sign in with Google", { position: "bottom-center" });
  //   }
  // };

  // const handleCheckboxChange = () => {
  //   setRememberMe(!rememberMe);
  //   if (!rememberMe) {
  //     localStorage.setItem('userToken', 'your-user-token'); // Handle token saving if required
  //   } else {
  //     localStorage.removeItem('userToken');
  //   }
  // };

  // const [isExistingUser, setIsExistingUser] = useState(false);
  // const [showAdditionalForm, setShowAdditionalForm] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!validateEmail(email)) {
  //     setError("Please enter a valid email address.");
  //     return;
  //   }

  //   console.log('Email submitted:', email);
  //   navigate('/completeregister', { state: { email } });
  // };

  const [user, setUser] = useState(null);
  //for google login If user exist redirect to home other register with additional information
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();

      const googleUser = {
        name: result.user.displayName,
        email: result.user.email,
        idToken: idToken,
      };

      //replace http://localhost:5000 by https://backend-dashboard-dsw0.onrender.com
      const response = await fetch(
        "http://localhost:5000/api/v1/user/google/check",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({idToken}),
        }
      );

      const data = await response.json();
      console.log(data);
      if (data.exists) {
        setUser(googleUser);
        // setIsExistingUser(true);
        toast.success(`welcome, ${data.username}`, {
          position: "top-center",
          autoClose: 3000,
        });
        setInterval(() => {          
          navigate("/home");
        }, 2000);

      } else {
        setUser(googleUser);
        // setIsExistingUser(false);
        navigate("/googleRegister", { state: googleUser });
        // setShowAdditionalForm(true);
      }
    } catch (error) {
      console.error("Error during sign-in", error);
    }
  };
  //for standard login
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        {
          email,
          password,
        }
      );
      console.log("Login successful:", response.data);

      setSuccessMessage(response.data.message);
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 3000,
      });
   
      setTimeout(()=>{
        navigate("/home");
      },2000)
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
      console.error("Login error:", err);
    }
  };
  return (
    <div className="login-container">
      <div className="login-content">
        {/* Success Message */}
        {/* {successMessage && (
          <div className="success-message">{successMessage}</div>
        )} */}

        {/* If there's no success message, show the login form */}
        {/* {!successMessage && ( */}
          <>
            <div className="login-left">
              <img
                className="login-logo"
                src="logo.png"
                alt="Smart Campaigns Logo"
              />
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
                src="model boy.svg"
                alt="Background"
              />
            </div>

            <div className="login-right">
              <div className="login-form-container">
                <button
                  onClick={handleGoogleSignIn}
                  className="google-login-btn"
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/winkl-1095.appspot.com/o/saas%2Fgoogle_icon.svg?alt=media&token=a6561d03-9cc8-4c26-903d-c796c2d448ec"
                    alt="Google logo"
                  />
                  Continue with Google
                </button>
                <div className="divider">or</div>

                {/* Email & Password Login Form */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="remember-forgot">
                    {/* <div className="remember-me">
                      <input 
                        type="checkbox" 
                        id="rememberMe" 
                        checked={rememberMe} 
                        onChange={handleCheckboxChange} 
                      />
                      <label htmlFor="rememberMe">Remember me</label>
                    </div> */}
                    <a href="/forgotpassword">Forgot password?</a>
                  </div>
                  <button type="submit" className="login-button">
                    Continue
                  </button>

                  {error && <p className="error-message">{error}</p>}

                  <p>
                    Don't have an account?{" "}
                    <a href="/completeregister" className="register-link">
                      Register
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </>
        {/* )} */}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
