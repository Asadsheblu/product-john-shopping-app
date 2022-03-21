import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    return (
        <div className="col-md-4 col-sm-6  g-4 product ">

                        <img className='img-fluid' src={props.image} alt="" />
                        <div className='product-info'>
                        <h4>Name:{props.name}</h4>
                        <h5>price:{props.price}</h5>
                        <h6>Category:{props.category}</h6>
                        <p>Seller:{props.seller}</p>
                        <p>Rating:{props.rating}</p>
                        <button onClick={()=>props.addToCart(props)} className='btn btn-success btn'><span className='pe-2'>Add To Cart</span> 
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        </button>
                        </div>


                        </div>
      
    );
};

export default Product;