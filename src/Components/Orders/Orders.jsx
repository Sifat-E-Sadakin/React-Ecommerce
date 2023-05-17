import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import OrderItem from '../OrderItem/OrderItem';
import './Order.css'
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {

    let products = useLoaderData();
    
    let [finalProducts, setFinalProducts]= useState(products)

    // console.log(finalProducts);


    let deleteItem = (id)=>{
        
    let finalItem = finalProducts.filter(product => product._id != id);
    setFinalProducts(finalItem);

    removeFromDb(id);
        
      
    }

    let clearCart= ()=>{
        setFinalProducts([]);
        deleteShoppingCart();
    }
    


    return (
        <div className='order'>

            <div className='orderContainer'>


            {
                finalProducts.map(product=> <OrderItem deleteItem={deleteItem} product={product} key={product._id}></OrderItem> )
            }
            </div>
            


            <Cart cart={finalProducts} clearCart={clearCart}>
                <Link to='/checkout'>
                <button className='btn-checkout'><span>Checkout</span><FontAwesomeIcon icon={faCartShopping} /> </button>
                </Link>
               
            </Cart>
        </div>
    );
};

export default Orders;