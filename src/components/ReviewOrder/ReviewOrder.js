import React, { useEffect, useState } from 'react';
import { getStoredCart,deleteFromDb } from '../../utilities/fakedb';
import productsJson from '../../fakeData/products.json';
import ReviewItem from '../ReviewItem/ReviewItem';
import Order from '../Order/Order';
const ReviewOrder = () => {
    const [cartItems,setCartItems]=useState([]);
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        const getCart=getStoredCart();
        const cartKeys=Object.keys(getCart);
        const carts=cartKeys.map(pid=>{
            const product=productsJson.find(pd=>pd.key===pid);
            product.quantity=getCart[pid];
            return product;
        })
        setCartItems(carts);
        setOrders(carts);
    },[cartItems]);
    const removeFromCartHandler=(cart)=>{
        deleteFromDb(cart.key);
        setCartItems(cartItems.filter(pd=>pd.key!==cart.key));
    }
    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col-md-9">
                    {cartItems.map(cart=>
                        <ReviewItem cart={cart} key={cart.key+'_'+cart.quantity} removeFromCartHandler={removeFromCartHandler}>
                        </ReviewItem>
                    )}
                </div>
                <div className="col-md-3">
                    <Order items={orders}></Order>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder;