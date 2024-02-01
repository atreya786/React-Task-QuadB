import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchShowDetails } from "../services/api";

const MovieBookingForm = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    fetchShowDetails(id).then((data) => {
      setShowDetails(data);
    });
  }, [id]);
  const [formData, setFormData] = useState({
    showDetails: showDetails,
    name: "",
    phoneNumber: "",
    numberOfSeats: 1,
    timeSlot: "07:00 AM - 10:00 AM",
  });

  const calculateTotalPayment = () => {
    const ticketPrice = 150;
    return formData.numberOfSeats * ticketPrice;
  };

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Your ticket booked successfully. Return to home page.");
    sessionStorage.setItem("Form submitted : ", formData);
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-[100vh]">
      {showDetails && (
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-center mb-4 p-4 rounded-md">
            Show Name : {showDetails.name}
          </h1>
          <p className="text-lg text-center">
            <strong>Show Type:</strong> {showDetails.type}
          </p>
          <p className="text-lg text-center">
            <strong>Language:</strong> {showDetails.language}
          </p>
          <p className="text-lg text-center">
            <strong>Genres:</strong> {showDetails.genres.join(", ")}
          </p>
          <p className="text-lg text-center">
            <strong>Runtime:</strong> {showDetails.runtime} minutes
          </p>
        </div>
      )}
      <form
        onSubmit={handleFormSubmit}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-600"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-semibold text-gray-600"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="numberOfSeats"
            className="block text-sm font-semibold text-gray-600"
          >
            Number of Seats:
          </label>
          <select
            id="numberOfSeats"
            name="numberOfSeats"
            value={formData.numberOfSeats}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="totalPayment"
            className="block text-sm font-semibold text-gray-600"
          >
            Total Payment:
          </label>
          <input
            type="text"
            id="totalPayment"
            name="totalPayment"
            value={calculateTotalPayment()}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            readOnly
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="timeSlot"
            className="block text-sm font-semibold text-gray-600"
          >
            Time Slot:
          </label>
          <select
            id="timeSlot"
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            {Array.from({ length: 5 }, (_, index) => {
              const startHour = 7 + index * 3;
              const endHour = startHour + 3;
              const formattedStartTime = `${
                startHour < 10 ? "0" : ""
              }${startHour}:00 AM`;
              const formattedEndTime = `${
                endHour < 10 ? "0" : ""
              }${endHour}:00 AM`;
              const intervalLabel = `${formattedStartTime} - ${formattedEndTime}`;

              return (
                <option key={intervalLabel} value={intervalLabel}>
                  {intervalLabel}
                </option>
              );
            })}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MovieBookingForm;
