import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import productsJson from '../../fakeData/products.json';
import placeOrderImg from '../../images/giphy.gif';
import { deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import Order from '../Order/Order';
import ReviewItem from '../ReviewItem/ReviewItem';
const ReviewOrder = () => {
    const [cartItems,setCartItems]=useState([]);
    const [orderPlaced,setOrderPlaced]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
        const getCart=getStoredCart();
        const cartKeys=Object.keys(getCart);
        const carts=cartKeys.map(pid=>{
            const product=productsJson.find(pd=>pd.key===pid);
            product.quantity=getCart[pid];
            return product;
        })
        setCartItems(carts);
    },[]);
    const removeFromCartHandler=(cart)=>{
        deleteFromDb(cart.key);
        setCartItems(cartItems.filter(pd=>pd.key!==cart.key));
    }
    const handleProceedCheckout=()=>{
        navigate("/shipment");
    }
    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col-md-9">
                    {cartItems.map(cart=>
                        <ReviewItem cart={cart} key={cart.key+'_'+cart.quantity} removeFromCartHandler={removeFromCartHandler}>
                        </ReviewItem>
                    )}
                    {orderPlaced && <img src={placeOrderImg} alt="" className='img-fluid'/>}
                </div>
                <div className="col-md-3">
                    <Order items={cartItems}>
                        {cartItems.length>0 && <button className="btn btn-warning" onClick={handleProceedCheckout}>Proceed Checkout</button>}
                    </Order>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder;