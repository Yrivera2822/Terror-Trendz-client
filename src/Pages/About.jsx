import React from "react";

function About() {
  return (
    <div className="justify-content-center d-flex flex-wrap gap-5 p-5">
      <div className="card mb-3 object-fit-sm-contain shadow-sm">
        <img src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717711641/Yamil_wms7pv.png" className="card-img-top" alt="yamil head shot" />
        <div className="card-body">
          <h1 className="card-title">Yamil Rivera</h1>
          <p className="card-text"></p>
          <h3 className="card-text">@mailmanlegs</h3>
        </div>
      </div>
      <div className="card mb-3 object-fit-sm-contain shadow-sm">
        <img
          src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717711973/Abner_bpshyp.jpg"
          className="card-img-top"
          alt="abner head shot"
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
