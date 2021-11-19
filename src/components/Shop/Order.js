import React from "react";

const Order = (props) => {
  return (
    <div>
      <h5 className="text-center">Order Summary</h5>
      <h6 className="text-center">Items Ordered: {props.items}</h6>
      <div className="d-flex justify-content-between">
        <small>Items</small>
        <small>${}</small>
      </div>
      <div className="d-flex justify-content-between">
        <small>Shipping & Handling:</small>
        <small>${}</small>
      </div>
      <div className="d-flex justify-content-between">
        <small>Total before tax:</small>$<small></small>
      </div>
      <div className="d-flex justify-content-between">
        <small>Estimated Tax</small>
        <small>${}</small>
      </div>
      <div className="d-flex justify-content-between">
        <h5 className="text-danger">Order Total:</h5>
        <h5 className="text-danger">${}</h5>
      </div>
      <button className="btn btn-warning">Review your order</button>
    </div>
  );
};

export default Order;
