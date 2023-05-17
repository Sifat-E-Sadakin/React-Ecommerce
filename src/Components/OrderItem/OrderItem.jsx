import React from 'react';
import './OrderItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'

const OrderItem = (props) => {
    
let {img, price, name, quantity, _id }= props.product;

 let deleteItem= props.deleteItem;
    return (
        <div className='cartContainer'>
            <div className='flex'>
                <div>
                <img src={img} alt="" />
                </div>
                <div>
                    <h4 style={{margin:'5px'}}>{name}</h4>
                    <p  style={{margin:'5px'}}>Price: {price}</p>
                    <p  style={{margin:'5px'}}>Quantity: {quantity}</p>
                </div>
                
            </div>
            <div>
                <button className='btn'  onClick={()=>deleteItem(_id)}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
           
           
            
        </div>
    );
};

export default OrderItem;