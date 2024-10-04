/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Bubbletopics.css";
import image from "../../assets/images/arrow.png";

const names = [
  "Design",
  "Development",
  "Marketing",
  "Data Science",
  "AI & ML",
  "Cloud Computing",
  "Cybersecurity",
  "Blockchain",
  "Game Dev",
];

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", number: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://sendemail-phi.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        console.log("Email sent successfully:", result);
        alert("Proposal sent to your email!");
      } else {
        console.error("Failed to send email:", result.message);
        alert("Failed to send the proposal. Please try again.");
      }
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
      <div className="bg-gray-800 text-white rounded p-6 w-full max-w-md shadow-lg">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Request a FREE Proposal Now!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-300 mb-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>{" "}
            <div className="mb-4">
              <label
                htmlFor="number"
                className="block text-gray-300 mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                number
              </label>
              <input
                type="number"
                id="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition"
              onClick={onClose}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const SolutionsHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white ">
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black px-5 sm:px-10 py-10 sm:py-20">
        <div className="flex flex-col sm:flex-row items-center justify-start w-full sm:ml-8">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 tracking-wider text-center sm:text-left"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Smart marketing starts here.
          </h1>
          <img
            src={image}
            alt="Downward arrow"
            className="w-14 h-14 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mt-4 sm:mt-0 sm:ml-4"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center w-full space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <p
            className="text-sm sm:text-lg lg:text-2xl font-normal text-gray-400"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Join over 200,000 marketing managers
          </p>
          <button
            className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-b from-gray-400 via-blue-600 to-blue-800 text-white font-bold rounded-full border-1 border-transparent hover:border-white hover:scale-105 transition-all duration-300"
            onClick={openModal}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Get a Proposal
          </button>
        </div>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 p-5 sm:p-10 bg-cover bg-center"
        // style={{
        //   backgroundImage:
        //     "url('https://images.unsplash.com/photo-1651833826115-7530e72ce504?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

        // }}
      >
        {names.map((name, index) => (
          <Link
            to={`/description/${name}`}
            key={index}
            className="flex justify-center items-center"
          >
            <div className="bubble w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              {name}
            </div>
          </Link>
        ))}
      </div>

      {/* Modal Popup */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default SolutionsHome;
