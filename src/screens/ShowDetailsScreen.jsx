import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowDetails from "../components/ShowDetails";
import { fetchShowDetails } from "../services/api";

const ShowDetailsScreen = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchShowDetails(id).then((data) => setShow(data));
  }, [id]);

  return (
    <div className="h-[100vh] bg-gradient-to-r from-cyan-500 to-green-500 ">
      {show && <ShowDetails show={show} />}
    </div>
  );
};

export default ShowDetailsScreen;
