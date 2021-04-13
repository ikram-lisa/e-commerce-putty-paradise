import React from 'react';
import './footer.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
                <div className="container">
                    <div className=" row d-flex justify-content-between">
                      <div className="col-12 col-md-4 col-lg-4">
                      <Link to="" className="navbar-brand" href="#" style={{fontWeight:"bold"}}><i class="fab fa-slack" style={{fontSize:"2rem",color:"#354947",paddingRight:"10px",verticalAlign:"center"}}></i><span style={{verticalAlign:"center",color:"white",fontSize:"2rem"}}>Potty Paradise</span></Link>
                       <div className="pt-3">
                       <i class="fab fa-facebook" style={{fontSize:"1.2rem",color:"white"}}></i>
                       <i class="fab fa-instagram"  style={{color:"white",paddingLeft:"10px",paddingRight:"10px",fontSize:"1.2rem"}}></i>
                       <i class="fab fa-linkedin" style={{fontSize:"1.2rem",color:"white"}}></i>
                       </div>
                       <h3 className="pt-3" style={{color:"#212529",fontSize:"1.5rem"}}>Mode De Paiment</h3>
                       <div>
                       <i class="fab fa-paypal" style={{fontSize:"1.2rem",color:"white"}}></i>
                       <i class="fab fa-cc-mastercard" style={{color:"white",paddingLeft:"10px",paddingRight:"10px",fontSize:"1.2rem"}}></i>
                       <i class="fab fa-cc-visa" style={{fontSize:"1.2rem",color:"white"}}></i>
                       </div>
                      </div>
                      <div className="col-12 col-md-4 col-lg-4">
                      <Link to="/shop" className="nav-link"><h3 className="pt-3 pb-3" style={{color:"#212529"}}>Categories</h3></Link>
                          <ul style={{listStyle:"none",fontSize:"1.5rem",fontWeight:"bold",color:"white",}}>
                              <li>Kitchen</li>
                              <li style={{paddingBottom:"10px",paddingTop:"10px"}}>Decoration</li>
                              <li>Bathroom</li>
                          </ul>
                      </div>
                      <div className="col-12 col-md-4 col-lg-4">
                          <h4 className="pt-3 pb-3">Contact Us</h4>
                          <form action="">
                              <input type="text" placeholder="Your mail adress" style={{padding:"8px 5px",outline:"none",borderRadius:"5px",border:"none",marginTop: "3px"}}/>
                              <button type="button" class="btn btn-dark ms-2 mt-1" style={{verticalAlign:"top"}}>Send</button>
                          </form>
                          <h5 className="pt-3 pb-3">Our Location</h5>
                          <p><i class="fas fa-map-marker-alt" style={{marginRight:"10px",color:"#212529"}}></i>AV cicerolaan 17,Evere</p>
                          <p><i class="fas fa-envelope" style={{marginRight:"10px",color:"#212529"}}></i>ikramlam26@gmail.com</p>
                          <p><i class="fas fa-phone" style={{marginRight:"10px",color:"#212529"}}></i>+212(0)66666666</p>
                      </div>  
                    </div>
                </div>
            </div>
    )
}

export default Footer
