import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'



const Shop = () => {
    let [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])

    useEffect(()=>{
        let storedCart = getShoppingCart();
        // console.log(storedCart);
        let savedCart=[];
        for (const id in storedCart) {

            let addedProduct = products.find(product => product.id==id)
            // console.log(addedProduct);
            if(addedProduct){
                let quantity= storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct);
                // console.log(addedProduct);
            }
          
         }
          setCart(savedCart)
    },[products])
    // console.log(products);
    let atc= (products)=>{
          // cart.push(product); '
          let newCart = [];
          // const newCart = [...cart, product];
          // if product doesn't exist in the cart, then set quantity = 1
          // if exist update quantity by 1
          const exists = cart.find(pd => pd.id === products.id);
          if(!exists){
              products.quantity = 1;
              newCart= [...cart, products]
          }
          else{
              exists.quantity = exists.quantity + 1;
              const remaining = cart.filter(pd => pd.id !== products.id);
              newCart = [...remaining, exists];
          }
        setCart(newCart);
        addToDb(products.id)

    }

    let clearCart= ()=>{
        setCart([]);
        deleteShoppingCart();
    }
    

    return (
        <div className='shop'>
            
            <div className='productContainer'>
                
            {
                products.map(product=><Products products={product} atc={atc} key={product.id} ></Products>)
            }

            </div>
           
            <div>
               <Cart cart={cart} clearCart={clearCart}>
                <Link to='/orders'>
                <button className='btn-review'>Review Cart</button>
                </Link>
                
               </Cart>
            </div>
            
        </div>
    );
};

export default Shop;