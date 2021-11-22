import React from 'react';
import { useParams } from 'react-router';
const ProductDetail = () => {
    const id=useParams().productId;
    return (
        <div>
            Product id is: {id}
        </div>
    );
};

export default ProductDetail;