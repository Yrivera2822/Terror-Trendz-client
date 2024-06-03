import { Link } from "react-router-dom";

function Navbar() {
  return (
 <nav>
   
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Terror Club
    </a>
    
    <button 
    className="navbar-toggler" 
    type="button"
     data-bs-toggle="collapse" 
    data-bs-target="#navbarNavAltMarkup" 
    aria-controls="navbarNavAltMarkup"
     aria-expanded="false" 
     aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link className="nav-link active" aria-current="page" to="/">Homepage</Link>
      <Link className="nav-link active" aria-current="page" to="/jewelry">See jewelry</Link>
      <Link className="nav-link active" aria-current="page" to= "/hats">See hats</Link>
      <Link className="nav-link active" aria-current="page" to= "/about">About</Link>
        
      </div>
    </div>
  </div>
</nav>
</nav>
  )
}

export default Navbar

{/* <nav>

      
<Link to="/">Home</Link>
<Link to="/hats">Hats</Link>
<Link to="/about">About</Link>
<Link to="/jewelry">Jewerly</Link>
</nav> */}