import { getShoppingCart } from "../../../utilities/fakedb";

let loadCart = async()=>{

    let storedCart = getShoppingCart();
    let ids = Object.keys(storedCart)
    console.log(ids);
    let productInCart= await fetch('http://localhost:3000/productsByID',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ids)
    });
    let products= await productInCart.json();

  
    // console.log(storedCart);
    let addedProducts=[]

    for (const id in storedCart) {

       let selectedProduct = products.find(product=> product._id==id );
       if(selectedProduct){
        let quantity= storedCart[id];
        selectedProduct.quantity= quantity;
        addedProducts.push(selectedProduct);
       }

        
    }
   

    return addedProducts;
}

export {loadCart}