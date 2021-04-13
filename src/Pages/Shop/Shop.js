import React, { useState, useEffect} from 'react';
import Header from '../../Component/Header/Header';
import Product from '../../Component/ProductCat/Product';
import database from '../../FireBase/firebase';
import './shop.css';
import Top from '../../Component/TopTitle/top'
import { connect} from 'react-redux'
const Shop = (props) => {
    const [product, setProduct] = useState([]); 

    const getProduct = () => {
      database.collection("Product").onSnapshot( snapshot => {
        let listProduct =  snapshot.docs.map( doc => {
              return {
                  id: doc.id, 
                 Src:doc.data().Src, 
                 title : doc.data().title,
                 price: doc.data().price,
                 message: doc.data().message
              }
          })
          setProduct(listProduct); 
      })
    }
    const addItem = (item) =>  {
        props.dispatch({
            type:"ADD", 
            data:item
        })
    }
    // const increase = (state) =>{
    //     props.dispatch({
    //         type:"INCREASE",
    //         data:state.count
    //     })
    // }
    useEffect(getProduct, []); 
    return (
        <div className="collectionCategories ">
            <Top />
           <div className="containeproduct p-5">
              <div className="container-fluid">
                  <div className="row">
                  <div className="filter col-12 col-md-4 col-lg-4">
                    <div className="container">
                        <div className="row">
                                <div className="col-12">
                                     <h3>Type of product</h3>
                                     <label className="list-group-item">
                                       <input className="form-check-input me-1" type="checkbox" value=""/>
                                         Kitchen
                                    </label>
                                    <label className="list-group-item">
                                       <input className="form-check-input me-1" type="checkbox" value=""/>
                                         Decoration
                                    </label>
                                    <label className="list-group-item">
                                       <input className="form-check-input me-1" type="checkbox" value=""/>
                                         Bathroom
                                    </label>
                                 </div>
                                 <div className="col-12">
                                    <h3>Categories</h3>
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                          Cup
                                            <span className="badge  rounded-pill" style={{backgroundColor:"#556b69"}}>14</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Cup Teapot
                                            <span className="badge  rounded-pill" style={{backgroundColor:"#556b69"}}>2</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Tajine
                                            <span className="badge  rounded-pill" style={{backgroundColor:"#556b69"}}>1</span>
                                        </li>
                                    </ul>
                                 </div>
                                 <div className="col-12"></div>

                        </div>
                    </div>
                </div>
                    <div className="product pt-5 col-12 col-md-8 col-lg-8">
                        <div className="container">
                            <div className="row d-flex">
                                 
                                    {
                                        product.map( item => {
                                            return  <Product 
                                            Src={item.Src}
                                            title={item.title}
                                            price={item.price}
                                            message={item.message}
                                            add = {() => addItem(item)}
                                            // increase={() => increase(item)}
                                        />
                                        })
                                    }
                                 
                            </div>
                        </div>

                    </div>
                  </div>
              </div>  
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}

export default connect(mapStateToProps)(Shop);
