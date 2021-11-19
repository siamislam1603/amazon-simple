import React from 'react';

const Product = (props) => {
    const showStars=(star)=>{
        let stars=[];
        for (let i = 0; i < star; i++) {
            stars.push(<i className="bi bi-star-fill"></i>) ;     
        }
        for(let i=0;i<5-star;i++){
            stars.push(<i className="bi bi-star"></i>);
        }
        return <div className='mb-2'>{stars}</div>;
    };
    return (
        <div className="row product-section">
            <div className="text-center col-md-4 d-md-flex align-items-md-center">
                <img src={props.product.img} alt="" className='product-img'/>
            </div>
            <div className="col-md-8 mt-2">
                    <h5 className="text-primary">{props.product.name}</h5>
                    by: {props.product.seller}
                    <div className="d-flex justify-content-between mt-3">
                        <div>
                            <strong className="d-block mb-2">${props.product.price}</strong>
                            only {props.product.stock} left in stock - order soon
                            {// As we need to pass all the properties back to the Shop.js cartHandler function's parameter, we can't directly call props.addToCartHandler(props). Because this will call the function without clicking the button. That's why we must call it through an anonymous function if we need to send parameters to the handler function.
                            }
                            <button className="btn btn-warning d-block my-2" onClick={()=>props.addToCartHandler(props.product)}>
                                <i className="bi bi-cart-fill"></i> add to cart
                            </button>
                        </div>
                        <div>
                            {
                                showStars(props.product.star)
                            }
                            <strong>Features</strong>
                        </div>
                    </div>
            </div>
            <br />
        </div>
    );
};

export default Product;