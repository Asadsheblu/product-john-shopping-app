import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Cart = ({cart}) => {
    return (
        <div>
            <h6>Order Summary</h6>
                <p>Selected Item</p>
                <FontAwesomeIcon className='fs-3' icon={faShoppingCart}></FontAwesomeIcon><sup>{cart.length}</sup>
        </div>
    );
};

export default Cart;