import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'



const Shop = () => {
    let [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    // console.log(products);
    let atc= (products)=>{
        // console.log('added in cart', products);
        let newCart= [...cart, products];
        setCart(newCart);

    }

    return (
        <div className='shop'>
            
            <div className='productContainer'>
                
            {
                products.map(product=><Products products={product} atc={atc} ></Products>)
            }

            </div>
           
            <div>
                <h4>Cart will be here</h4>
                <h5>{cart.length} Item added in cart</h5>
            </div>
            
        </div>
    );
};

export default Shop;