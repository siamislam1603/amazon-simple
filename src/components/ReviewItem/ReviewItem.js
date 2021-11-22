import React from 'react';
import { NavLink } from 'react-router-dom';
import './ReviewItem.css';
const ReviewItem = (props) => {
    const cart=props.cart;
    return (
        <div className='review-item pt-4'>
            <NavLink className="text-primary d-block mb-2" to={"/product/"+cart.key}>{cart.name}</NavLink>
            <strong className="d-block my-3 text-danger">${cart.price}</strong>
            <small className="mb-2 d-block">sold by {cart.seller}</small>
            <small className="mb-2 d-block">Quantity {cart.quantity}</small>
            <button className="btn btn-warning d-block mb-3" onClick={()=>props.removeFromCartHandler(cart)}>
                Remove
            </button>
        </div>
    );
};

export default ReviewItem;