import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'



const Shop = () => {
    let [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);
    let [itemPerPage, setItemPerPage]= useState(12)
    let [page, setPage ] =useState(0)

    let totalProducts= useLoaderData();
    // console.log(totalProducts.total);
    let totalItem = totalProducts.total;

    
    let totalPage = Math.ceil(totalItem/itemPerPage)
    // console.log(totalPage);

    let pageNumber = [];
    for(let i = 0; i<=totalPage ; i++){
        pageNumber.push(i)
    }
    // console.log(pageNumber);

    useEffect(()=>{
        fetch(`http://localhost:3000/products?page=${page}&limit=${itemPerPage}`)
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[page, itemPerPage])

    useEffect(()=>{
        let storedCart = getShoppingCart();
        let ids = Object.keys(storedCart);
        fetch('http://localhost:3000/productsByID',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ids)
    })
    .then(res=> res.json())
    .then(data =>{
        let savedCart=[];
        for (const id in storedCart) {

            let addedProduct = data.find(product => product._id==id)
            // console.log(addedProduct);
            if(addedProduct){
                let quantity= storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct);
                // console.log(addedProduct);
            }
          
         }
          setCart(savedCart)

    } )

     
    },[products])
    // console.log(products);
    let atc= (products)=>{
          // cart.push(product); '
          let newCart = [];
          // const newCart = [...cart, product];
          // if product doesn't exist in the cart, then set quantity = 1
          // if exist update quantity by 1
          const exists = cart.find(pd => pd._id === products._id);
          if(!exists){
              products.quantity = 1;
              newCart= [...cart, products]
          }
          else{
              exists.quantity = exists.quantity + 1;
              const remaining = cart.filter(pd => pd._id !== products._id);
              newCart = [...remaining, exists];
          }
        setCart(newCart);
        addToDb(products._id)

    }

    let clearCart= ()=>{
        setCart([]);
        deleteShoppingCart();
    }

    let options = [12,15,20]
    let handelSelectChange = event =>{
        setItemPerPage(parseInt(event.target.value));
        setPage(1);
    }
    

    return (
        <div className='shop'>
            
            <div className='productContainer'>
                
            {
                products.map(product=><Products products={product} atc={atc} key={product._id} ></Products>)
            }

            </div>
           
            <div>
               <Cart cart={cart} clearCart={clearCart}>
                <Link to='/orders'>
                <button className='btn-review'>Review Cart</button>
                </Link>
                
               </Cart>
            </div>
            <div className='btn-page'>
                <p>Current Page : {page}</p>
                {
                    pageNumber.map(item=><button onClick={()=>setPage(item)} className='btn' key={item}>{item}</button>)
                }
                <select value={itemPerPage} onChange={handelSelectChange}>
                    {
                        options.map(option=>(
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))
                    }

                </select>
            </div>
            
        </div>
    );
};

export default Shop;