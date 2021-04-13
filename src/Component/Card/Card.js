import React from 'react'
import "./Card.css"; 

const Card = ({items}) => {
    
    return (
        <div className="Card">
                <div className="cart-items">
                   {
                       items ? items.map( item => {
                        return (
                            <div className="product-cart">
                                <img src={item.Src} alt="" />
                                <div className="product-cart-content">
                                    <div> {item.title} </div>
                                    <div style={{fontWeight:'bold'}} >{item.price} </div>
                                </div>
                                <hr/>
                            </div>
                           

                        )
                    }) : <span style={{textAlign:'center', fontWeight:"bold"}}>empty cart </span>
                   }
                </div>
        </div>
    )
}

export default Card
