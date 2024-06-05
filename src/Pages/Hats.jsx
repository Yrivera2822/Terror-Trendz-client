import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import HatCard from "../components/HatCard";

function Hats() {
  const { hats, setHats } = useState();

  const getAllHats = async () => {
    try {
      const response = await axios.get(
        "https://cats-dogs-server.adaptable.app/hats"
      );

      setHats(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-5">
      <div className="d-flex  justify-content-center align-items-center flex-wrap gap-5 m-5">
        {" "}
        {getAllHats ? (
          hats.map((hat) => <HatCard hat={hats} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Hats;
