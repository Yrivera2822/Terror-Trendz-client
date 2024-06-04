import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";

function Hats() {
  const {Hats, setHats} = useState();

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
      <Link>
      <div className="card" style={{ width: "18rem", height: "16rem", gap: "5px"}}>
        <img
          src="https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt74086f9b89cb9448/64819127131ecf31edf40d04/28716.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840"
          className="card-img-top"
          alt="..."
        style={{height: "16rem", objectFit: "contain"}}/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
      </Link>
      <Link>
      <div className="card" style={{ width: "18rem", height: "16rem", gap: "5px" }}>
        <img src="https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt74086f9b89cb9448/64819127131ecf31edf40d04/28716.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840" className="card-img-top" alt="..." 
        style={{height: "16rem", objectFit: "contain"}}/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Hats;
