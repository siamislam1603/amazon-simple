import React from 'react';
import { NavLink } from 'react-router-dom';
import './Product.css';
const Product = (props) => {
    const showStars=(star,key)=>{
        let stars=[];
        for (let i = 1; i <= star; i++) {
            stars.push(<i className="bi bi-star-fill" key={key+'_'+i}></i>) ;     
        }
        for(let i=1;i<=5-star;i++){
            stars.push(<i className="bi bi-star" key={key+'_'+(star+i)}></i>);
        }
        return <div className='mb-2'>{stars}</div>;
    };
    return (
        <div className="row product-section pt-2">
            <div className="text-center col-md-4 d-md-flex align-items-md-center">
                <img src={props.product.img} alt="" className='product-img'/>
            </div>
            <div className="col-md-8">
                    <NavLink className="text-primary d-block mb-2" to={"/product/"+props.product.key}>{props.product.name}</NavLink>
                    by: {props.product.seller}
                    <div className="d-flex justify-content-between mt-3">
                        <div>
                            <strong className="d-block mb-2">${props.product.price}</strong>
                            only {props.product.stock} left in stock - order soon
                            {// As we need to pass all the properties back to the Shop.js cartHandler function's parameter, we can't directly call props.addToCartHandler(props). Because this will call the function without clicking the button. That's why we must call it through an anonymous function if we need to send parameters to the handler function.
                            }
                            {
                                props.showAddToCart && <button className="btn btn-warning d-block my-2" onClick={()=>props.addToCartHandler(props.product)}>
                                <i className="bi bi-cart-fill"></i> add to cart
                                </button>
                            }
                            
                        </div>
                        <div>
                            {
                                showStars(props.product.star,props.product.key)
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