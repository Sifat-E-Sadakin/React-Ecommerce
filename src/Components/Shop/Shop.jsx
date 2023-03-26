import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    let [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    console.log(products);

    return (
        <div className='shop'>
            
            <div className='productContainer'>
                
            {
                products.map(product=><Products products={product} ></Products>)
            }

            </div>
           
            <div>
                <h4>Cart will be here</h4>
            </div>
            
        </div>
    );
};

export default Shop;