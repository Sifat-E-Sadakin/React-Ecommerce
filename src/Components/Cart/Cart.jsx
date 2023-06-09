import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteShoppingCart } from '../../../utilities/fakedb';


const Cart = (props, children) => {
    let {cart}= props
    // console.log(cart);
    
    let totalPrice=0;
    let totalShipping=0;
    let tax=0;
    let grandTotal=0;
     let quantity=0;
    for (const product of cart) {
        if(product.quantity==0){
            product.quantity=1;
        }
    //   console.log(product.quantity,'pq');
       totalPrice = totalPrice+ product.price* product.quantity;
       totalShipping = totalShipping+ product.shipping;
       
       quantity= quantity + product.quantity
        // console.log(quantity, product.quantity);
        
    }

    
    tax= totalPrice*7/100
    grandTotal=totalPrice+totalShipping+tax;
    // console.log(totalPrice);

    let clearCart= props.clearCart;
   

    return (
        <div className='cart'>
             <h4>Order Summary</h4>
             <h5>{cart.length} Different item added in cart</h5>
             <h5>{quantity} Total item added in cart</h5>
             <h5>Total Price: {totalPrice} $ </h5>
             <h5>Total Shipping Charge:{totalShipping} $</h5>
             <h5>Tax: {tax.toFixed(2)} $ </h5>
             <h4>Grand Total: {grandTotal.toFixed(2)} $ </h4>
             <button className='btn-cc' onClick={clearCart}><span>Clear cart</span>  <FontAwesomeIcon icon={faTrash} /></button>
             
             {props.children}
        </div>
    );
};

export default Cart;