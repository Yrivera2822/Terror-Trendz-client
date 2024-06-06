import React from "react";

function About() {
  return (
    <div className="justify-content-center d-flex flex-wrap gap-5 p-5">
      <div className="card mb-3 object-fit-sm-contain shadow-sm">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="card-title">Yamil Rivera</h1>
          <p className="card-text"></p>
          <p className="card-text">
            <small className="text-body-secondary">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
      <div className="card mb-3 object-fit-sm-contain shadow-sm">
        <img
          src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717703731/Abner_xmnupa.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h1 className="card-title">Abner Nieves</h1>
          <p className="card-text"></p>
          <h3 className="card-text text-body-secondary">@el787</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
