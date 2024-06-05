import axios from "axios"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom";

const arrTshirts = [
  "https://th.bing.com/th/id/OIP.d00EJjYg-IFFNOoTasMw6AHaHD?rs=1&pid=ImgDetMain",
  "https://ih1.redbubble.net/image.257316814.8702/gtdf,x1000,black-pad,750x1000,f8f8f8.u2.jpg",
  "https://i5.walmartimages.com/asr/027bce48-0157-4275-8b18-3646b9f1000f_1.23d45468b16574fe8e887c31859c3a55.jpeg",
  "https://padshops.com/wp-content/uploads/2022/05/Bad-Bunny-Tour-Merch-t-shirt-280x280.jpg",
  ""
];
<p> Tshirts </p>;

function Tshirts() {
  const [tshirts, setTshirts] = useState(null);

  useEffect(() => {
    const fetchTshirts = async () => {
      try {
        const response = await axios.get(
          "https://cats-dogs-abner.adaptable.app/tshirts"
        )

        setTshirts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTshirts();
  }, []);

  return (
    <>
      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {tshirts &&
          tshirts.map((tshirt, i) => {
            return (
              <div key={i}>
                <Link to={"/tshirts/" + tshirt.id}>
                  <div
                    className="card m-2 p-2 text-center"
                    style={{ width: "24rem", height: "18rem" }}
                  >
                    <div className="card-body">
                      <img
                        src={arrTshirts[Math.floor(Math.random() * arrTshirts.length)]
                        }
                        style={{ height: "6rem" }}
                        alt={"image of" + tshirt.title}
                      />
                      <h5 className="card-title text-truncate mt-2">
                        {tshirt.title}
                      </h5>
                      <h6 className="card-subtitle mb-3 text-muted">
                        <em>{tshirt.description}</em>
                      </h6>
                      <p className="card-text">Price ${tshirt.price}</p>
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


export default Tshirts
