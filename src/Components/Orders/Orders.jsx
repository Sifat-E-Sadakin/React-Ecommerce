import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrderItem from '../OrderItem/OrderItem';
import './Order.css'

const Orders = () => {

    let products = useLoaderData();
    // console.log(products);


    return (
        <div className='order'>

            <div className='orderContainer'>


            {
                products.map(product=> <OrderItem product={product} key={product.id}></OrderItem> )
            }
            </div>
            


            <Cart cart={products}></Cart>
        </div>
    );
};

export default Orders;