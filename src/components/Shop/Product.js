import React from 'react';

const Product = (props) => {
    console.log('In product component:',props);
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
                <img src={props.image} alt="" className='product-img'/>
            </div>
            <div className="col-md-8 mt-2">
                    <h5 className="text-primary">{props.name}</h5>
                    by: {props.seller}
                    <div className="d-flex justify-content-between mt-3">
                        <div>
                            <strong className="d-block mb-2">${props.price}</strong>
                            only {props.stock} left in stock - order soon
                            <button className="btn btn-warning d-block my-2">
                                <i class="bi bi-cart-fill"></i> add to cart
                            </button>
                        </div>
                        <div>
                            {
                                showStars(props.star)
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