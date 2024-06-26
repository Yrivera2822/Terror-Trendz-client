import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning justify-content-end">
        <div className="container-fluid">
          <Link
            to="https://www.instagram.com/terror.trendz/"
            target="_blank"
            className="navbar-brand"
          >
            <img
              src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717685535/Nav-Terror-Logo_nmhanx.png"
              alt="Logo"
              style={{ height: "150px" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end pe-5" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active ps-5 ms-5"
                  style={{ color: "#4b0082" }}
                  href="#"
                  aria-current="page"
                  to="/"
                >
                  Homepage
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ps-5"
                  style={{ color: "#4b0082" }}
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul
                  className="dropdown-menu shadow-sm" 
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/tshirts">
                      Tshirts
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/hats">
                      Hats
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item" href="#">
                <Link
                  className="nav-link active ps-5"
                  style={{ color: "#4b0082" }}
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

{
  /* <nav>

      // links just in case 
<Link to="/">Home</Link>
<Link to="/hats">Hats</Link>
<Link to="/about">About</Link>
<Link to="/jewelry">Jewerly</Link>
</nav> */
}
