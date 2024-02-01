import React from "react";

const ShowList = ({ shows, onShowClick }) => {
  return (
    <div className="container mx-auto text-center  ">
      <h1 className="text-4xl font-bold mb-8 text-white p-4 rounded-md">
        Shows List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 justify-center">
        {shows.map((el) => (
          <div
            key={el.id}
            className="flex flex-col items-center bg-gradient-to-r from-red-300 to-yellow-300 p-4 rounded-md shadow-md"
          >
            {el.image && (
              <img
                src={el.image?.medium}
                alt={el.name}
                className="w-[80%] mb-2 cursor-pointer"
                onClick={() => onShowClick(el.id)}
              />
            )}
            <h2 className="text-lg font-semibold mb-2">Name : {el.name}</h2>
            <p className="text-md mb-2">Type : {el.type}</p>
            <p className="text-md mb-2">Language : {el.language}</p>
            <p className="text-md mb-2">Genre : {el.genres.join(", ")}</p>
            <p className="text-md mb-2">Rating: {el.rating.average}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
