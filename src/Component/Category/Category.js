import React from 'react';
import './category.css';

const Category = ({Image,message}) => {
    return (
        <div className="CategoryCols col-12 col-md-4 col-lg-4 p-5">
                 <img src={Image} alt=""  className="img-fluid" />
                <h4>{message} </h4>               

        </div>
              
    )
}

export default Category;
