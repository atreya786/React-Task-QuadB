import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowListScreen from "./screens/ShowListScreen";
import ShowDetailsScreen from "./screens/ShowDetailsScreen";
import MovieBookingForm from "./screens/MovieBookingForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ShowListScreen />} />
        <Route path="/bookingForm/:id" exact element={<MovieBookingForm />} />
        <Route path="/show/:id" element={<ShowDetailsScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
