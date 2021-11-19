import React, { useEffect, useState } from 'react';
import productsJson from '../../fakeData/products.json';
import Product from './Product';
import './Shop.css';
const Shop = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const num=Math.floor(Math.random() * (productsJson.length+1-10)); 
        setProducts(productsJson.slice(num,num+10));
    },[]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    {products.map(product=>
                        <Product key={product.key} name={product.name} seller={product.seller} price={product.price} star={product.star} stock={product.stock}image={product.img}></Product>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;