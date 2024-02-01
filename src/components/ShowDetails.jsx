import React from "react";
import { useNavigate } from "react-router-dom";

const ShowDetails = ({ show }) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4  shadow-lg rounded-md">
      <h1 className="text-3xl font-bold mb-4">{show.name}</h1>
      <div className="flex flex-wrap  justify-center items-center">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            src={show.image.original}
            alt={show.name}
            className="w-[80%] h-auto rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 p-4">
          <p className="text-lg">
            <strong>Type : </strong> {show.type}
          </p>
          <p className="text-lg">
            <strong>Language : </strong> {show.language}
          </p>
          <p className="text-lg">
            <strong>Genres : </strong> {show.genres.join(", ")}
          </p>
          <p className="text-lg">
            <strong>Status : </strong> {show.status}
          </p>
          <p className="text-lg">
            <strong>Runtime : </strong> {show.runtime} minutes
          </p>
          <p className="text-lg">
            <strong>Premiered : </strong> {show.premiered}
          </p>
          <p className="text-lg">
            <strong>Official Site : </strong>{" "}
            <a
              href={show.officialSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {show.officialSite}
            </a>
          </p>
          <p className="text-lg">
            <strong>Rating : </strong> {show.rating.average}
          </p>
          <p className="text-lg">
            <strong>Network : </strong> {show.network.name},{" "}
            {show.network.country.name}
          </p>
          <p className="text-lg">
            <strong>Schedule : </strong> {show.schedule.days.join(", ")} at{" "}
            {show.schedule.time}
          </p>
          <p className="text-lg">
            <strong>IMDb : </strong>{" "}
            <a
              href={`https://www.imdb.com/title/${show.externals.imdb}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {show.externals.imdb}
            </a>
          </p>
          <div className="text-lg">
            <strong>Summary : </strong>
            {show.summary.slice(3, -4)}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          navigate(`/bookingForm/${show.id}`);
        }}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Book Ticket
      </button>
    </div>
  );
};

export default ShowDetails;
