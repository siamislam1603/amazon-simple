import React, { useEffect, useState } from 'react';
import productsJson from '../../fakeData/products.json';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const num=Math.floor(Math.random() * (productsJson.length+1-10)); 
        setProducts(productsJson.slice(num,num+10));
    },[]);
    const [orders,setOrders]=useState([]);
    // We should define the call handler function, where the useState is used
    const addToCartHandler=(product)=>{
        console.log(product);
        setOrders([...orders,product]);
    }
    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col-md-9 pt-3 products-container">
                    {products.map(product=>
                        <Product product={product} addToCartHandler={addToCartHandler} key={product.key} showAddToCart={true}>
                        </Product>
                    )}
                </div>
                <div className="col-md-3 pt-3">
                    <Order items={orders}></Order>
                </div>
            </div>
        </div>
    );
};

export default Shop;