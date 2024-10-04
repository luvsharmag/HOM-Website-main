export const handleSubmitFinal = async (e) => {
  e.preventDefault();

  // Prepare data to send to backend
  const userData = {
    ...googleUser,
    company: additionalInfo.company,
    number: additionalInfo.number,
    password: additionalInfo.password,
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
    navigate("/home");
  } else {
    console.error("Error completing registration");
  }
};
