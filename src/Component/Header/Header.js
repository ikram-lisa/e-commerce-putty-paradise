import React, { useState} from 'react'
import './header.css'; 
import Card from '../Card/Card';
import { connect} from "react-redux"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = (props) => {
    let nombreProducts = 0 ; 
    props.cartItems.forEach(item => {
        nombreProducts += item.quantite ; 
    })
    const show = () =>{
         props.dispatch({
             type:"TOGGLE-CART"
         })
       }
    return (
        <div classNameName="header">
            {/* <ul>
                <li><Link to="/home" style={myStyle}>Home</Link></li>
                <li><Link to="/Product" style={myStyle}>Product</Link></li>
                <li><Link to="/aboutUs" style={myStyle}>About Us</Link></li>
                <li><Link to="/contact" style={myStyle}>Contact</Link></li>
            </ul> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"  style={{fontWeight:"bold"}}><i class="fab fa-slack" style={{fontSize:"2rem",color:"#354947",paddingRight:"10px",verticalAlign:"center"}}></i><span style={{verticalAlign:"center"}}>Putty Paradise</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color:"#f8f9fa",borderColor:"#f8f9fa"}}>
                    <i class="fas fa-bars" style={{color:"black",fontSize:"2rem"}}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className="bar" style={{display:"flex",flexDerection:"column",justifyContent:"center",textAlign:"center"}}>
                            <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/shop" className="nav-link">shop</Link>
                            </li>
                        
                        {/* <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                                </li>
                            </ul>
                        </div> */}
                        </div>
                       
                    </ul>
                    <form className="d-flex" style={{backgroundColor:"white",borderRadius:"30px"}}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{border:"none",borderRadius:"30px"}} />
                        <button className="btn" type="submit"><i class="fas fa-search" style={{fontSize:"1rem",color:"lightgray"}}></i></button>
                    </form>
                    <div className=" d-flex justify-content-end position-relative p-2">
                    <span>Sign Out <i class="fas fa-user-alt" style={{padding:"10px 5px"}}></i></span>
                    <div style={{position:"absolute",top:"5px",right:"10px",borderRadius:"50%",height:"15px",width:"15px",backgroundColor:"#354947d",textAlign:"center",color:"black",fontWeight:'bold'}}> {nombreProducts} </div>
                    <button style= {{backgroundColor:"#f8f9fa",border:"none"}} onClick={show} ><i class="fas fa-shopping-cart" style={{padding:"10px 5px"}}></i></button>
                    
                    </div>
                    </div>
                   
                </div>
            </nav>
          {
              props.hidden ?   <Card items={props.cartItems} />  : null 
          }
      </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems, 
        hidden: state.hidden
    }
}

export default connect(mapStateToProps)(Header);