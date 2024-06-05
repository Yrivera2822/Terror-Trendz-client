import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HatCard() {
    const [hats, setHats] = useState(null);
    
  <p> hats </p>

  useEffect(() => {
    const fetchHats = async () => {
      try {
        const response = await axios.get("https://cats-dogs-abner.adaptable.app/")
        setHats(response.data)
      } catch (error) {
        console.log(error)
        
      } 
    }
     fetchHats();
    } , [])

  
    
  
  return (
    <>

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {hats &&
          hats.map((hat, i) => {
            return (
              <div key={i}>
                <Link to={"/hats/" + hat.id}>
                  <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                    <div className="card-body">
                      <img
                        src={hat.image_url}
                        style={{ height: "6rem" }}
                        alt={"image of" + hat.name}
                      />
                      <h5 className="card-title text-truncate mt-2">{hats.title}</h5>
                      <h6 className="card-subtitle mb-3 text-muted">
                        <em>{hats.description}</em>
                      </h6>
                      <p className="card-text">
                        Created by: {hats.price}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default HatCard;
