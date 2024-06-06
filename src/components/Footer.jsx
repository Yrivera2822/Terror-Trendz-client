import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="bg-warning">
        {/* <div className='footer-top'> 
          <p>JOIN THE TERROR CLUB NOW</p> 
        </div> */}

       <img src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717685535/arcade-fast-game-over_w8nqdr.gif" className="img-fluid"  alt="F-img" />
   
     
        <div className="footer-content" style={{height: "70px", color:"#4b0082"}} >
          <h3>Contact us:</h3>
          <p>Email: Terrorfriends@gmail.com</p>
          <p>Phone: 723-780-3903</p>
          <p>1601 Apt #201 Ave Fernandez Juncos San Juan PR.</p>
        </div>

        
        <div className="footer-content">
           
    
          <h3 className='follow-us' style={{color:"#4b0082"}}>Follow Us:</h3>
          <ul className="social-media d-flex">
             <Link to= "https://www.youtube.com/watch?v=xvFZjo5PgG0" target="blank">  
            <img src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717685535/logo-black_nvbkev.png" className="T-logo"  alt="T-img" />
            </Link>
            
            <Link to="https://www.instagram.com/terror.trendz/" target="_blank" >
            <img src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717685535/Instagram_Glyph_Black_rjzxcn.png" className="T-logo"  alt="T-img" />
            </Link>

            <Link to="https://www.facebook.com/people/Terror-Trendz/100088390365188/" target="blank" alt= "T-img">
            <img src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717702955/Facebook_Logo_Secondary_eib83f.png" className="T-logo"  alt="T-img" />
            </Link>
           

          </ul>
        </div>
     
    </footer>
  );
}

export default Footer;

      
    {/* <footer>
    
      <div className="footer-container" >
      <img src="src/assets/lib/arcade-fast-game-over.gif" className="img-fluid" alt="F-img" />
        <div className="footer-content" style={{height: '100px'}} >
          <h3>Join the Terror Club  </h3>
          <p>Email:Terrorfriends@gmail.com</p>
          <p>Phone:723-780-3903</p>
          <p>1601 Apt #201 Ave Fernandez Juncos San Juan PR.</p>
        </div>
        <div className="footer-content">
          <h3>Quick Links</h3>
          <ul className="list">
            <li>
              <NavLink to="/">
                <a href="">Home</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <a href="">About</a>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <a href="">Contact</a>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-content ">
          <h3>Follow Us</h3>
          <ul className="social-media">
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-bar">
          <p>2024 Taste the World. All rights reserved</p>
      </div>
    </footer>
  );
} */}




