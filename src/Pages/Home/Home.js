import React from 'react'
import Header from '../../Component/Header/Header';
import Main from '../../Component/Main/Main';
import Shop from "../Shop/Shop"; 
import Footer from '../../Component/Footer/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Page = () => {
    return (
        <div>
           <Header />
             <Switch>
                 <Route path="/" exact >
                   <Main />
                 </Route>
                 <Route path="/shop" exact >
                   <Shop />
                 </Route>
             </Switch>
           <Footer />
        </div>
    )
}

export default Page;
