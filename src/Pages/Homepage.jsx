import React from "react";
import AddMusic from "../components/AddMusic";

function Homepage() {
  return (
    // <div>
    //   <div id="carouselExampleIndicators" className="carousel slide">
    //     <div className="carousel-indicators">
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="0"
    //         className="active"
    //         aria-current="true"
    //         aria-label="Slide 1"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="1"
    //         aria-label="Slide 2"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleIndicators"
    //         data-bs-slide-to="2"
    //         aria-label="Slide 3"
    //       ></button>
    //     </div>
    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         <img src='src\assets\lib\terror-background.jpg' className="d-block w-100" alt="..." />
    //       </div>
    //       <div className="carousel-item">
    //         <img src="src\assets\lib\terror3.jpg" className="d-block w-100" alt="..." />
    //       </div>
    //       <div className="carousel-item">
    //         <img src="src\assets\lib\terror-background.jpg" className="d-block w-100" alt="..." />
    //       </div>
    //     </div>
    //     <button
    //       className="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide="prev"
    //     >
    //       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       className="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide="next"
    //     >
    //       <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>

    <div className="background">
      <AddMusic />

      {/* <img src="src\assets\lib\terror-background.jpg" /> */}

      <div className="footer-top">
        <p style={{ paddingLeft: "70px", fontSize: "20px" }}>
          JOIN THE TERROR CLUB NOW!
        </p>
      </div>
    </div>
  );
}

export default Homepage;
