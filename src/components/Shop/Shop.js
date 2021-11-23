import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import productsJson from '../../fakeData/products.json';
import { addToDb,getStoredCart } from '../../utilities/fakedb';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        const num=Math.floor(Math.random() * (productsJson.length+1-10)); 
        setProducts(productsJson.slice(num,num+10));
        const savedCart=getStoredCart();
        const productKeys=Object.keys(savedCart);
        const cart=productKeys.map(pdKey=>{
            const product=productsJson.find(pd=>pd.key===pdKey);
            product.quantity=savedCart[pdKey];
            return product;
        });
        setOrders(cart);
    },[]);
    // We should define the call handler function, where the useState is used
    const addToCartHandler=(product)=>{
        const foundProduct=orders.find(pd=>pd.key===product.key);
        let newCart;
        if(foundProduct){
            product.quantity+=1;
            const others=orders.filter(pd=>pd.key!==product.key);
            newCart=[...others,product];
        }
        else{
            product.quantity=1;
            newCart=[...orders,product];
        }
        setOrders(newCart);
        addToDb(product.key);
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
                    <Order items={orders}>           
                        <NavLink className="btn btn-warning" to="/review">Review your order</NavLink>
                    </Order>
                </div>
            </div>
        </div>
    );
};

export default Shop;