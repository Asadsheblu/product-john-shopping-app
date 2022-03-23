import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props
    
  
    let total=0;
    let Shipping=0;
    let quantity=0;
    for(let product of cart ){  
        quantity=quantity + product.quantity
       
        total=total+product.price*product.quantity
        Shipping=Shipping+product.shipping 
        
    }
    
    let totaltax=parseInt((total*0.1).toFixed(2))
    let grandTotal=total+Shipping+totaltax
    
    return (
        <div className='cart'>
            <h6>Order Summary</h6>
               <p>
                   Selected Item:
               
                <FontAwesomeIcon className='fs-3' icon={faShoppingCart}></FontAwesomeIcon>
                {quantity}
                </p>
                <p>Total price:${total}</p>
                <p>Total Shipping:${Shipping}</p>
                <p>Tax:${totaltax}</p>
                <h6>Grand Total:${grandTotal}</h6>

                </div>
    );
};

export default Cart;