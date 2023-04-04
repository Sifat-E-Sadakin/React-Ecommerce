import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {

    let products = useLoaderData();
    // console.log(products);


    return (
        <div className='shop'>
            <h2>{products.length} Order will be displayed here...!  </h2>
            <Cart cart={products}></Cart>
        </div>
    );
};

export default Orders;