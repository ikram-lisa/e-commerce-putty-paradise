import React from 'react';
import {connect} from 'react-redux';
const Product = ({Src,title,message,price, add}) => {


  
    return (
        <div className="col-12 col-md-4 col-lg-4 pb-3">
            <div className="card">
                <img src={Src} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" style={{color:"black",paddingBottom:"0"}}>{message.substring(0,28)}...</p>
                    <h6>{price} </h6>
                    <button  className="btn btn-primary" style={{padding:"10px 15px", display: "block",margin:"0 auto",backgroundColor:"#556b69",border:"none"}} onClick={ add}>ADD TO BASKET</button>

                   {/* <div className="d-flex justify-content-around p-3 pb-0">
                        <button className="btn " style={{width:'30px',height:'30px',padding:'0'}} ><i className="fas fa-window-minimize" style={{verticalAlign:"middle",marginTop: "-11px"}}></i></button>
                        <p style={{color:"black",paddingBottom:"0",marginBottom:"0",padding: "3px"}}>1</p>
                        <button className="btn" style={{width:'30px',height:'30px',padding:'0'}}><i className="fas fa-plus" style={{verticalAlign:"middle"}}></i></button>
                   </div> */}

                </div>
            </div>
        </div>
    )
    
   
}

const mapStateToProps = (state) => {
    return {
      count: state.count
    };
  }
export default connect(mapStateToProps)(Product)
