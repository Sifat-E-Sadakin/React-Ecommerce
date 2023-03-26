import React from 'react';
import './Products.css'

const Products = (props) => {
    console.log(props.products);
    let {name, img, price, seller, ratings    }= props.products
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
                
                <button className='btn-atc'>Add To Cart</button>
            </div>
           
        </div>
    );
};

export default Products;