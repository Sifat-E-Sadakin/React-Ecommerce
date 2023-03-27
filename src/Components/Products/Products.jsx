import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Products = (props) => {
    // console.log(props.atc);
    let {name, img, price, seller, ratings, id    }= props.products
 
    let atc= props.atc;

    return (
        <div className='products'>
            <div className=''>
                <img src={img} alt="" />
                <div className='productDetails'>
                    <h5>{name}</h5>
                    <h6>Price: ${price}</h6>
                    <p>Manufacturer: {seller} </p>
                    <p><small>Rating: {ratings} Star </small></p>

                </div>
                
                <button onClick={()=>atc(props.products)} className='btn-atc'>
                    Add To Cart  <FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
           
        </div>
    );
};

export default Products;