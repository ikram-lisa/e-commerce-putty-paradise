import React, { useState, useEffect} from 'react';
import './main.css';
import Category from '../Category/Category';
import KitchenImg from '../../assets/kitchenet.svg';
import DataBase from '../../FireBase/firebase';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import database from '../../FireBase/firebase';
  
const Main = () => {
    const [categories, setCategores] = useState([]); 

    const getCategories = () => {
      database.collection("categories").onSnapshot( snapshot => {
        let listCategorie =  snapshot.docs.map( doc => {
              return {
                  id: doc.id, 
                  category_name:doc.data().categoryName, 
                  category_link : doc.data().categoryLink
              }
          })
          setCategores(listCategorie); 
      })
    }

    useEffect(getCategories, []); 
    return (
        <div className="containerParent">
            <div className="containerMain">
                <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8 col-lg-8 pt-5">
                                <h1>Welcome to Potty Paradise</h1>
                                <h3>Where Everything Made Width Love </h3>
                                <p>Every item created in our studio is carefully created with a focus on the smallest details.</p>
                                <Link to="/shop" className="nav-link"><button className="btn" style={{backgroundColor:"#556b69",color:"white",borderColor:"#556b69",boxShadow: "0 0 0 0.25rem #556b69"}}>See our collection</button></Link>
                            </div>
                            <div className="col-12 col-md-2 col-lg-2"></div>
                            <div className="col-12 col-md-2 col-lg-2"></div>
                        </div>
                </div>
            </div>
         

           <div className="categories">
              <div className="container">
                  <div className="row" >
                      <h1 className="text-center pt-5">Our Category</h1>
                     {
                         categories.map( item => {
                             return    <Category 
               
                             Image={item.category_link}
                             message={item.category_name}
                         />
                         })
                     }
     
            
                  </div>
              </div>
              
           </div>
           <div className="history">
                <h1 className="text-center pb-5">Our History</h1>
                 <div className="historyContainer">
                 <div className="container">
                      <div className="row">
                          <div className="col-12 col-md-6 col-lg-6">
                              <img src="https://images.unsplash.com/photo-1597696929644-a2157a251a43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>  
                          </div>
                          <div className="col-12 col-md-6 col-lg-6">
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                  Aspernatur aliquam odit praesentium nam repellendus sapiente
                                   voluptatem officiis in architecto sed beatae consectetur itaque 
                                   est neque provident, corporis dolorem totam porro voluptatibus ipsa 
                                   reprehenderit vitae sit! Iusto perferendis tenetur, quod cum magni 
                                   esse vitae doloremque. Temporibus voluptate sequi, beatae magni quo
                                    libero officiis deserunt quam quod repellat officia harum aspernatur 
                                    numquam. Praesentium, veniam officia optio eos deserunt voluptatem 
                                    ullam exercitationem minus a cumque dicta molestiae. Eveniet corporis
                                     doloribus ullam aliquid, deleniti nam ipsam ratione. Doloremque ipsa
                                      porro rem odit. Est obcaecati 
                                  reprehenderit eum quaerat optio. Earum hic fugit rem cumque quae?</p>
                          </div>
                      </div>
                </div>
                 </div>
            </div>
            <div className="review">
                <h1 className="text-center p-5">Experience Of Our Client</h1>
                <div className="reviews">
                <div id="carouselExampleFade" className="carousel slide carousel-fade p-5" data-bs-ride="carousel" style={{backgroundColor:"lightGray"}}>
                    <div className="carousel-inner" >
                        <div className="carousel-item active">
                        <img src="https://mk0qomafemocnned3wjh.kinstacdn.com/wp-content/uploads/2019/02/AI-thispersondoesnotexist.jpg" className="d-block w-100" alt="..."/>
                        <h3 className="text-center p-3 pb-0 text-secondary text-capitalize fw-bold">Rosa</h3>
                        <div className="col-md-12 text-center p-3">
                            <div> 
                                <i className="fas fa-star" style={{textAlign:"center",color:"#ffc107",fontSize:"1.5rem", margin:"0 auto"}}></i>
                                <i className="fas fa-star" style={{textAlign:"center",color:"#ffc107",fontSize:"1.5rem", margin:"0 auto"}}></i>
                                <i className="fas fa-star" style={{textAlign:"center",color:"#ffc107",fontSize:"1.5rem", margin:"0 auto"}}></i>
                                <i className="fas fa-star" style={{textAlign:"center",color:"#ffc107",fontSize:"1.5rem", margin:"0 auto"}}></i>
                                <i className="fas fa-star" style={{textAlign:"center",color:"#ffc107",fontSize:"1.5rem", margin:"0 auto"}}></i>
                            </div>

                        </div>
                        <p className="text-center p-3 text-secondary text-capitalize fw-bold ps-5 pe-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nobis expedita modi odio nam, quam voluptatem cumque iusto impedit maiores enim in voluptatibus cupiditate id, soluta blanditiis debitis! Ad, debitis?</p>
                        </div>
                        <div className="carousel-item">
                        <img src="https://i.pinimg.com/474x/eb/37/d9/eb37d9c487ae1e6424aa66028a506d0a.jpg" className="d-block w-100" alt="..."/>
                        <h3 className="text-center p-3 pb-0 text-secondary text-capitalize fw-bold">Ema</h3>
                        <div className="col-md-12 text-center p-3">
                            <div> 
                                <i className="fas fa-star" style={{textAlign:"center",color:"#ffc107",fontSize:"1.5rem", margin:"0 auto"}}></i>
                                <i className="fas fa-star" style={{textAlign:"center",color:"#ffc107",fontSize:"1.5rem", margin:"0 auto"}}></i>
                                <i className="fas fa-star" style={{textAlign:"center",color:"#ffc107",fontSize:"1.5rem", margin:"0 auto"}}></i>
                                <i className="fas fa-star" style={{textAlign:"center",color:"#ffc107",fontSize:"1.5rem", margin:"0 auto"}}></i>
                                <i className="fas fa-star" style={{textAlign:"center",color:"#ffc107",fontSize:"1.5rem", margin:"0 auto"}}></i>
                            </div>

                        </div>
                        <p className="text-center p-3 text-secondary text-capitalize fw-bold ps-5 pe-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nobis expedita modi odio nam, quam voluptatem cumque iusto impedit maiores enim in voluptatibus cupiditate id, soluta blanditiis debitis! Ad, debitis?</p>

                        </div>
                        <div className="carousel-item">
                        <img src="https://www.thepassivevoice.com/wp-content/uploads/2020/05/a1-2-640x640.jpg" className="d-block w-100" alt="..."/>
                        <h3 className="text-center p-3 pb-0 text-secondary text-capitalize fw-bold">Julien</h3>
                        <div className="col-md-12 text-center p-3">
                            <div> 
                                <i className="fas fa-star" style={{textAlign:"center",color:"#ffc107",fontSize:"1.5rem", margin:"0 auto"}}></i>
                                <i className="fas fa-star" style={{textAlign:"center",color:"#ffc107",fontSize:"1.5rem", margin:"0 auto"}}></i>
                                <i className="fas fa-star" style={{textAlign:"center",color:"#ffc107",fontSize:"1.5rem", margin:"0 auto"}}></i>
                                <i className="fas fa-star" style={{textAlign:"center",color:"#ffc107",fontSize:"1.5rem", margin:"0 auto"}}></i>
                                <i class="fas fa-star-half-alt"  style={{textAlign:"center",color:"#ffc107",fontSize:"1.5rem", margin:"0 auto"}}></i>
                            </div>

                        </div>
                        <p className="text-center p-3 text-secondary text-capitalize fw-bold ps-5 pe-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nobis expedita modi odio nam, quam voluptatem cumque iusto impedit maiores enim in voluptatibus cupiditate id, soluta blanditiis debitis! Ad, debitis?</p>

                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Main;
