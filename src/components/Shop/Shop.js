import React, { useEffect, useState } from 'react';
import productsJson from '../../fakeData/products.json';
import Order from './Order';
import Product from './Product';
import './Shop.css';
const Shop = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const num=Math.floor(Math.random() * (productsJson.length+1-10)); 
        setProducts(productsJson.slice(num,num+10));
    },[]);
    const addToCartHandler=(product)=>{
        console.log(product);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 pt-3">
                    {products.map(product=>
                        <Product product={product} addToCartHandler={addToCartHandler}></Product>
                    )}
                </div>
                <div className="col-md-2 orders-container pt-3">
                    <Order></Order>
                </div>
            </div>
        </div>
    );
};

export default Shop;