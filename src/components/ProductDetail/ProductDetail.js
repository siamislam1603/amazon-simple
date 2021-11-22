import React from 'react';
import { useParams } from 'react-router';
import productJson from '../../fakeData/products.json';
import NotFound from '../NotFound/NotFound';
import Product from '../Product/Product';
const ProductDetail = () => {
    const {productId}=useParams();
    const product=productJson.find(pd=>pd.key === productId);
    const style={width:'70%',margin:'0 auto'}
    return (
        <div style={style}>
            {
                typeof product!== 'undefined' ? <Product product={product} showAddToCart={false}>
                </Product> :  <NotFound></NotFound>
            }
            
        </div>
    );
};

export default ProductDetail;