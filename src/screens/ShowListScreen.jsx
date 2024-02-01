import React, { useState, useEffect } from "react";
import ShowList from "../components/ShowList";
import { fetchShows } from "../services/api";
import { useNavigate } from "react-router-dom";

const itemsPerPage = 20;
const totalItems = 100;

const ShowListScreen = () => {
  const [shows, setShows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShowsPerPage = async () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const data = await fetchShows(currentPage, itemsPerPage);
      setShows(data.slice(startIndex, endIndex));
    };

    fetchShowsPerPage();
  }, [currentPage]);

  const handleShowClick = (showId) => {
    navigate(`/show/${showId}`);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container p-4 bg-gradient-to-r from-blue-500 to-purple-500">
      <ShowList shows={shows} onShowClick={handleShowClick} />
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={handlePrevPage}
          className="bg-green-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-700"
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <h1 className="text-xl font-bold">{currentPage}</h1>
        <button
          onClick={handleNextPage}
          className="bg-green-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-700"
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ShowListScreen;
