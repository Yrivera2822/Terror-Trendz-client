import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// const arrTshirts = [
//   "https://th.bing.com/th/id/OIP.d00EJjYg-IFFNOoTasMw6AHaHD?rs=1&pid=ImgDetMain",
//   "https://ih1.redbubble.net/image.257316814.8702/gtdf,x1000,black-pad,750x1000,f8f8f8.u2.jpg",
//   "https://i5.walmartimages.com/asr/027bce48-0157-4275-8b18-3646b9f1000f_1.23d45468b16574fe8e887c31859c3a55.jpeg",
//   "https://padshops.com/wp-content/uploads/2022/05/Bad-Bunny-Tour-Merch-t-shirt-280x280.jpg",
//   "",
// ];
<p> Tshirts </p>;

function Tshirts() {
  const [tshirts, setTshirts] = useState(null);

  useEffect(() => {
    const fetchTshirts = async () => {
      try {
        const response = await axios.get(
          "https://cats-dogs-abner.adaptable.app/tshirts"
        );

        setTshirts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTshirts();
  }, []);

  return (
    <>
      <div className=" d-inline-flex flex-wrap align-items-left p-5 m-5">
        {tshirts &&
          tshirts.map((tshirt, i) => {
            return (
              <div key={i}>
                <div
                  className="card m-3 p-3 shadow-sm"
                  style={{ width: "24rem", height: "auto" }}
                >
                  <div className="card-body ">
                    <img
                      src={tshirt.url}
                      className="card-img-top npm w-lg-75 w-md-50 w-100"
                      style={{ height: "20rem" }}
                      alt={"image of" + tshirt.title}
                    />
                    <h2 className="card-title mt-2 text-bg-danger ps-3">{tshirt.title}</h2>
                    <h5 className="card-subtitle mb-3 ps-3">
                      {tshirt.description}
                    </h5>
                    <h3 className="card-text ps-3">${tshirt.price}</h3>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Tshirts;
