import React from "react";
import { NavLink } from "react-router-dom";

const Order = (props) => {
  const items=props.items;
  //Here .reduce will reduce the item 1 by 1 & update initial toal value of 0 to total + product.price
  const productsPrice=+items.reduce((total,product)=>total+(product.price*product.quantity),0).toFixed(2);
  const itemsOrdered=items.reduce((total,product)=>total+product.quantity,0);
  let shipping=0;
  if(productsPrice>35)
    shipping=0;
  else if(productsPrice>15)
    shipping=4.99;
  else if(productsPrice>0)
    shipping=12.99;
  const tax=Number((productsPrice/10).toFixed(2));
  const totalBeforeTax=(productsPrice+shipping).toFixed(2);
  const totalPrice=(productsPrice+shipping+tax).toFixed(2);
  return (
    <div className="pt-4">
      <h5 className="text-center">Order Summary</h5>
      <h6 className="text-center">Items Ordered: {itemsOrdered}</h6>
      <div className="d-flex justify-content-between">
        <small>Items</small>
        <small>${productsPrice}</small>
      </div>
      <div className="d-flex justify-content-between">
        <small>Shipping & Handling:</small>
        <small>${shipping}</small>
      </div>
      <div className="d-flex justify-content-between">
        <small>Total before tax:</small><small>${totalBeforeTax}</small>
      </div>
      <div className="d-flex justify-content-between">
        <small>Estimated Tax:</small>
        <small>${tax}</small>
      </div>
      <div className="d-flex justify-content-between">
        <h5 className="text-danger">Order Total:</h5>
        <h5 className="text-danger">${totalPrice}</h5>
      </div>
      <NavLink className="btn btn-warning" to="/review">Review your order</NavLink>
    </div>
  );
};

export default Order;
