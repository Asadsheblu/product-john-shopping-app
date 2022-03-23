

import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
    useEffect(()=>{
        const storedCart=getStoredCart()
        const savedCart=[]
       for(const name in storedCart){
           const addedProduct=products.find(product=>product.name===name)
           if(addedProduct){
               const quantity=storedCart[name]
               addedProduct.quantity=quantity
               savedCart.push(addedProduct)
           }
       }
       setCart(savedCart)
    },[products])
    const addToCart=(selectedProduct)=>{
        let newCart=[]
        const exists=cart.find(product=>product.name===selectedProduct.name)
        if(!exists){
            selectedProduct.quantity=1
            
            newCart=[...cart,selectedProduct]
        }
        else{
            const rest=cart.filter(product=>product.name!=selectedProduct.name)
            exists.quantity=exists.quantity+1
            newCart=[...rest,exists]
        }
      
       
        setCart(newCart)
       addToDb(selectedProduct.name)
    }
    return (
        <div className="shop container mt-5">
            <div className="row">
            <marquee behavior="" direction="">20% off Our All product </marquee>
            {/* cart products */}
            
            {
                products.map(product=><Product key={product.id} price={product.price}  image={product.img} name={product.name}category={product.category} rating={product.ratings}seller={product.seller} shipping={product.shipping} tax={product.tax} quantity={product.quantity} addToCart={addToCart}></Product>)

            }
            </div>
             {/* cart product */}
            <div className="cart bg-info ms-3 h-25 pt-5">
                <Cart cart={cart}></Cart>
                    
                    
               
            </div>
            

        </div>
    );
};

export default Shop;