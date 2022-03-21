import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const addToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
        <div className="shop container mt-5">
            <div className="row">
            <marquee behavior="" direction="">20% off Our All product </marquee>
            
            {
                products.map(product=><Product key={product.id} price={product.price}  image={product.img} name={product.name}category={product.category} rating={product.ratings}seller={product.seller} addToCart={addToCart}></Product>)

            }
            </div>
            <div className="cart">
                <h6>Order Summary</h6>
                <p>Selected Item:{cart.length}</p>
               
            </div>
            

        </div>
    );
};

export default Shop;