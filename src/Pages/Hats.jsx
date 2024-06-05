// import HatCard from "../components/HatCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const arrHats = [
  "https://starter.com/cdn/shop/products/6C3G0156-LBL_b.jpg?v=1675362364&width=1445",
  "https://www.mammothheadwear.com/cdn/shop/products/2_e2042dde-4c9f-4eb8-b8fe-a652b123e499.jpg?v=1679965162",
  "https://www.mammothheadwear.com/cdn/shop/products/Brown1.jpg?v=1620087568",
];

function Hats() {
  const [hats, setHats] = useState(null);

  <p> hats </p>;

  useEffect(() => {
    const fetchHats = async () => {
      try {
        const response = await axios.get(
          "https://cats-dogs-abner.adaptable.app/hats"
        );

        setHats(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHats();
  }, []);

  return (
    <>
      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {hats &&
          hats.map((hat, i) => {
            return (
              <div key={i}>
                <Link to={"/hats/" + hat.id}>
                  <div
                    className="card m-2 p-2 text-center"
                    style={{ width: "24rem", height: "18rem" }}
                  >
                    <div className="card-body">
                      <img
                        src={
                          arrHats[Math.floor(math.random() * arrHats.length)]
                        }
                        style={{ height: "6rem" }}
                        alt={"image of" + hat.title}
                      />
                      <h5 className="card-title text-truncate mt-2">
                        {hat.title}
                      </h5>
                      <h6 className="card-subtitle mb-3 text-muted">
                        <em>{hat.description}</em>
                      </h6>
                      <p className="card-text">Created by: {hat.price}</p>
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

export default Hats